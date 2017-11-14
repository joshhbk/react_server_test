import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../assets/App';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  console.log('lol')
  res.send(`
    <html>
      <head>
        <title>Sportdec Test</title>
        <link rel='stylesheet' href='/css/main.css'>
        <script src='/bundle.js' defer></script>
      </head>

      <body>
        <div id='root'>${renderToString(<App />)}</div>
      </body>
    </html>`
    );
});

app.listen(3000, () => console.log('Running at port 3000'))