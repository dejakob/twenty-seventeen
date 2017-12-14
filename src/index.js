import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './style';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
