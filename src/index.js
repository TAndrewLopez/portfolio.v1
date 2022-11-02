import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

//COMPONENTS
import App from './components/App';
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <Router>
        <App />
    </Router>
)