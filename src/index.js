import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ReactPWAInstallProvider from "react-pwa-install";
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store = { store }>
        <ReactPWAInstallProvider enableLogging>
            <App/>
        </ReactPWAInstallProvider>    
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

 
serviceWorkerRegistration.register();

reportWebVitals();
