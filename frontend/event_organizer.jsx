import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentOrganizer) {
    const preloadedState = { session: {currentOrganizer: window.currentOrganizer }};
    delete window.currentOrganizer;
    store = configureStore(preloadedState);
    window.dispatch = store.dispatch;
    window.getState = store.getState;
  }
  else{
    store = configureStore();
    window.dispatch = store.dispatch;
    window.getState = store.getState;
  }
  ReactDOM.render(<Root store={store}/>, root);
});
