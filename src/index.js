import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './redux/store';
import {HashRouter as Router} from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';

const app = (
  <Provider store={store}>
      <ErrorBoundary>
          <Router>
                <App />
          </Router>
      </ErrorBoundary>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

