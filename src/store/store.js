import {createStore, compose, applyMiddleware, combineReducers} from "redux";
//import thunk from "redux-thunk";

import {testReducer} from "./reducers/testReducers";

// const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  
// ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
// :  compose;

const store = createStore(
    combineReducers({
        testStore: testReducer
    }),
    //composeEnhancers(applyMiddleware(thunk))
);

export default store;