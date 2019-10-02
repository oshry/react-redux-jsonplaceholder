**WHAT I DID**

1. install react new app:

    $ create-react-app react-redux-jsonplaceholder

2. install extra packages:
    
    $ npm i axios react-dom react-redux redux redux-thunk react-router-dom node-sass

3. create actions:
    create actions folder under src
    inside actions folder create types.js
    inside actions folder create jphActions.js

4. create reducers:
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
    
    
7. install lazy loading package:

    $ npm i --save react-lazy-load-image-component
    
   ref: [ https://www.npmjs.com/package/react-lazy-load-image-component ] 

8. install webpack

    $ npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin @babel/core @babel/preset-env babel-loader @babel/preset-react babel-plugin-transform-class-properties babel-plugin-transform-es2015-modules-commonjs
    
    extra packages:
    
    $ npm i -D babel-loader file-loader url-loader
    
    $ npm i -D image-webpack-loader
                
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
    
    npm i -D sass-loader css-loader style-loader
    
            {   
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
    
    ref: [ https://blog.logrocket.com/versatile-webpack-configurations-for-your-react-application-e6ebf6615cc/ ]
