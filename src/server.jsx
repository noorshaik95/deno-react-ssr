import {ReactDOMServer}  from '../dependencies.js';
import React from 'https://dev.jspm.io/react@16.13.1';
import { default as App } from './components/App.jsx';

export default ReactDOMServer.renderToString(<App/>);