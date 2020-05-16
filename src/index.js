import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import {ProductProvider} from './components/context';


ReactDOM.render(
<ProductProvider>
<Router>
    <App />
</Router>
</ProductProvider>,
document.getElementById("root")
);


