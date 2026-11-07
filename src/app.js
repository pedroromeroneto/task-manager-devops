const express = require('express');

function createApp() {
  const app = express();
  app.use(express.json());

  let tasks = [];
  let nextId = 1;

  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.get('/tasks', (_req, res) => {
    res.status(200).json(tasks);
  });

  app.post('/tasks', (req, res) => {
    const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';

    if (!title) {
      return res.status(400).json({ error: 'O título da tarefa é obrigatório.' });
    }

    const task = {
      id: nextId++,
      title,
      completed: false
    };

    tasks.push(task);
    return res.status(201).json(task);
  });

  app.patch('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((item) => item.id === id);

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    if (typeof req.body.title === 'string') {
      const title = req.body.title.trim();
      if (!title) {
        return res.status(400).json({ error: 'O título não pode ficar vazio.' });
      }
      task.title = title;
    }

    if (typeof req.body.completed === 'boolean') {
      task.completed = req.body.completed;
    }

    return res.status(200).json(task);
  });

  app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    const [removed] = tasks.splice(index, 1);
    return res.status(200).json(removed);
  });

  return app;
}

module.exports = { createApp };
