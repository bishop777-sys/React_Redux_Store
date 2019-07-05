import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './component/app';
import ErrorBoundry from './component/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './component/bookstore-service-context';
import store from './store.js';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>, 
document.getElementById('root'));