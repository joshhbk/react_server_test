import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheet } from 'aphrodite';
import Routes from './Routes';

StyleSheet.rehydrate(window.renderedClassNames);

hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
