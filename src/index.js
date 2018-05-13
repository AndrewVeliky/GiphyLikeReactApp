import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/index' component={Main} />
        </Switch>
    </ BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
