import {createStore} from 'redux';

import reducer from './reducers';

const enchancer = (createStore)=>(...args) =>{
    const store = createStore(...args);
    const originalDispatch = store.dispatch;

    store.dispatch = (action) =>{
        if(typeof action ==="string"){
            return originalDispatch({
                type:action
            });
        }
        originalDispatch(action);
    }
    return store;
};

const store = createStore(reducer, enchancer);



store.dispatch("hello_App")

export default store;