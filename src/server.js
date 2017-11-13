import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import App from './universal/app';

const app = express();

app.use(express.static('dist'));

app.use((req, res) => {
  const html = ReactDOMServer.renderToString(
    <App />
  );

  res.send(`
    <!doctype html>
      <head>
        <title>Universal code splitting with Webpack's import()</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="http://localhost:3000/vendor.bundle.js"></script>
        <script src="http://localhost:3000/app.bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000);
