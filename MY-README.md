**WHAT I DID**

1. $ create-react-app react-redux-jsonplaceholder
2. $ npm i axios react-dom react-redux redux redux-thunk react-router-dom node-sass
3. create actions

    create actions folder under src
    inside actions folder create types.js
    inside actions folder create jphActions.js
4. create reducers

   create reducers folder inside src folder, 
   inside create index.js, jphReducer, errorReducer

5. create store.js  under src folder

6. connect store to app -> add the following to src/index.js

import { Provider } from 'react-redux';
import store from './store';
…..
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('.container'));
    
    
