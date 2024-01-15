const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

app.get('/other.html', (req, res) => {
    res.sendFile(__dirname + '/public/other.html');
  });


app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json({ message: 'Task added successfully', tasks });
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter((task, index) => index != taskId);
  res.json({ message: 'Task deleted successfully', tasks });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});