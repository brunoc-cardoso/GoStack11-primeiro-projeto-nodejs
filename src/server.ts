import express from 'express';

const PORT = 3333;

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
