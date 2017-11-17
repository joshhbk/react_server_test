import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheet } from 'aphrodite';
import App from '../assets/App';

StyleSheet.rehydrate(window.renderedClassNames);

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
