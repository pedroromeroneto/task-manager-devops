const request = require('supertest');
const { createApp } = require('../src/app');

describe('API de gerenciamento de tarefas', () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });

  test('GET /health retorna status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  test('POST /tasks cadastra uma tarefa', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ title: 'Estudar DevOps' });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      id: 1,
      title: 'Estudar DevOps',
      completed: false
    });
  });

  test('POST /tasks rejeita título vazio', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ title: '   ' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  test('GET /tasks lista as tarefas cadastradas', async () => {
    await request(app).post('/tasks').send({ title: 'Entregar atividade' });

    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].title).toBe('Entregar atividade');
  });

  test('PATCH /tasks/:id atualiza o status da tarefa', async () => {
    await request(app).post('/tasks').send({ title: 'Fazer testes' });

    const response = await request(app)
      .patch('/tasks/1')
      .send({ completed: true });

    expect(response.status).toBe(200);
    expect(response.body.completed).toBe(true);
  });

  test('DELETE /tasks/:id exclui uma tarefa', async () => {
    await request(app).post('/tasks').send({ title: 'Tarefa temporária' });

    const response = await request(app).delete('/tasks/1');
    const list = await request(app).get('/tasks');

    expect(response.status).toBe(200);
    expect(list.body).toHaveLength(0);
  });

  test('retorna 404 ao atualizar tarefa inexistente', async () => {
    const response = await request(app)
      .patch('/tasks/999')
      .send({ completed: true });

    expect(response.status).toBe(404);
  });
});
