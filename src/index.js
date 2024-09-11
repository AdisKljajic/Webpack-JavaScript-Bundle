require('file-loader?name=[name].[ext]!./index.html')
import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const appElement = document.getElementById('App');

const container = document.getElementById('App');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);