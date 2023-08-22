const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const documents = [
  'Este es un ejemplo de documento.',
  'Aquí tienes otro documento para buscar.',
  'Necesito encontrar la palabra clave en algún documento.',
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/search', (req, res) => {
  const query = req.body.query.toLowerCase();
  const results = documents.filter(document =>
    document.toLowerCase().includes(query)
  );

  res.send(results);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
