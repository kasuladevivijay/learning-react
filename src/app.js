import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'A paragraph');
ReactDOM.render(template, document.querySelector('#app'));