const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon');
const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon });
});

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id;
  res.render('Show', { id, pokemon });
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});

