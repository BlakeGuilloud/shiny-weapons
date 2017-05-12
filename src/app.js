import ReactDOM from 'react-dom';
import { Router, hashHistory, Route } from 'react-router';
import React from 'react';

import HelloWorld from './components/HelloWorld';

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
)