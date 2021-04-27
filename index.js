// const express = require('express')
import express from 'express';

const app = express();

app.use(express.json());

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
];

app.use((req, res, next) => {
  console.log('estoy en el primer middleware');
  console.log(req.path);
  console.log(req.method);
  console.log(req.body);
  next();
});
app.get('/', (request, response, next) => {
  response.send('<h1>Hello World!</h1>');
  next();
});

app.get('/api/notes', (request, response) => {
  response.json(notes);
});

app.post('/api/notes', (request, response) => {
  console.log(request.body);
  const { descripcion: content } = request.body;
  const ids = notes.map(e => e.id);
  const nuevaNota = {
    id: Math.max(...ids) + 1,
    content: content,
    important: false,
    date: new Date().toISOString()
  };
  notes.push(nuevaNota);
  response.status(201).json(nuevaNota);
});

app.use((req, res, next) => {
  res.status(404).send('<h1 style="color: red;">Error 404</h1>');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
