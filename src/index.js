import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalState from './Context/GlobalState.jsx';
import App from './Container/App.jsx';

import './Container/style.scss'

render( < BrowserRouter > < GlobalState > < App / > < /GlobalState> < /BrowserRouter > , document.getElementById('root'));