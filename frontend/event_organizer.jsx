import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import ApolloClient from "apollo-boost";

import gql from "graphql-tag";

const client = new ApolloClient();
console.log(client);

client
  .query({
    query: gql`
      {
        allOrganizers {
          id
          fname
        }
      }
    `
  })
  .then(result => console.log(result));

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

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
