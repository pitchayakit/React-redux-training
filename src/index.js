import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"
import {createStore} from "redux"

const initialState={
    result:15000,
    value:[]
}

const employeeReducer=(state=initialState,action) => {
    switch(action.type) {
        case "ADD":
        state={
            result:state.result += action.playload,
            value:state.value
        }
        break;
        default:
    }
    return state
}

const store=createStore(employeeReducer)

store.subscribe(()=>{
    //console.log("Update store:",store.getState())
})

store.dispatch({
    type:"ADD",
    playload:15000
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
