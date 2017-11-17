import express from 'express';
import mcache from 'memory-cache';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StyleSheetServer} from 'aphrodite';
import App from '../assets/App';
import fixtures from '../../data/competition-id-10.json';
import 'isomorphic-fetch';
const app = express();

const cache = (duration) => (req, res, next) => {
  const key = '__express__' + req.originalUrl || req.url;
  const cachedBody = mcache.get(key);

  if (cachedBody) {
    res.send(cachedBody);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      mcache.put(key, body, duration * 1000);
      res.sendResponse(body);
    }
    next();
  }
}

app.use(express.static('public'));

app.get('/fixtures', (req, res) => {
  res.json(fixtures)
})

app.get('*', cache(30), (req, res) => {
  fetch('http://localhost:3000/fixtures')
    .then(response => response.json())
    .then(data => {

      const {html, css} = StyleSheetServer.renderStatic(() => {
          return renderToString(<App data={data} />);
      });
      setTimeout(() => {

      res.send(`
        <html>
          <head>
            <title>Sportdec Test</title>
            <script src='/bundle.js' defer></script>
            <script>window.__data__ = ${JSON.stringify(data)}</script>
            <style data-aphrodite>${css.content}</style>
          </head>

          <body>
            <div id='root'>${html}</div>
            <script>
              window.renderedClassNames = ${JSON.stringify(css.renderedClassNames)};
            </script>
          </body>
        </html>`
      );
    }, 5000) //setTimeout was used to simulate a slow processing request

    })
});

app.listen(3000, () => console.log('Running at port 3000'))
