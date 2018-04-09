import React from 'react';
import ReactDOM from 'react-dom';
import IndecisonApp from './components/IndecisonApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = document.querySelector('#app');

ReactDOM.render(<IndecisonApp />, app);