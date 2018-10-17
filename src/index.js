// 3rd Party
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// Custom
import recipesReducer from './reducer'
import AppContainer from './containers/AppContainer';


const store = createStore(recipesReducer)

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById('root'));
