import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../assets/App';
import fixtures from '../../data/competition-id-10.json';
import 'isomorphic-fetch';
const app = express();

app.use(express.static('public'));

app.get('/fixtures', (req, res) => {
  res.json(fixtures)
})

app.get('*', (req, res) => {
  fetch('http://localhost:3000/fixtures')
    .then(response => response.json())
    .then(data => {
      const fixtures = renderToString(<App data={data} />);
      res.send(`
        <html>
          <head>
            <title>Sportdec Test</title>
            <link rel='stylesheet' href='/css/main.css'>
            <script src='/bundle.js' defer></script>
          </head>

          <body>
            <div id='root'>${fixtures}</div>
          </body>
        </html>`
        );
    })
});

app.listen(3000, () => console.log('Running at port 3000'))
