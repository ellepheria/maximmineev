import React from 'react';
import './app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode as HTMLElement);
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
);
