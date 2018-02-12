import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ChatApp from './components/ChatApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatApp />, document.getElementById('root'));
registerServiceWorker();
