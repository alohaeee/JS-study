import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css';
import 'antd/dist/antd.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);
