import React from 'react';
import { hydrate } from 'react-dom';
import App from '../assets/App';
import { StyleSheet } from 'aphrodite';

StyleSheet.rehydrate(window.renderedClassNames);
hydrate(<App />, document.getElementById('root'));