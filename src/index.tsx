import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './app/styles/index.scss';
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode as HTMLElement);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
);
