import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "jquery";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle';


//!Store wrapper
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode> 
);
