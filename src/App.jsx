import * as actions from './actions/index'
import {createStore, applyMiddleware} from 'redux';
import mainReducer from './reducers/index';
import { Provider } from 'react-redux'
import React, {Component} from 'react';
import thunkMiddleware from 'redux-thunk';
import './css/App.css';
import IssPosition from './containers/IssPosition';

const store = createStore(
    mainReducer,
    applyMiddleware(
        thunkMiddleware // lets dispatch() functions
    )
)

store.dispatch(actions.fetchIssPosition())

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="App-header">
                        <h2>Where is ISS</h2>
                    </div>
                    <IssPosition />
                </div>
            </Provider>
        );
    }
}

export default App;
