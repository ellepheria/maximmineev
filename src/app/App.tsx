import React from 'react';
import { MainPage } from '../pages/MainPage';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared';
import { AppRouter } from './providers/router';

function App() {
    const { theme, toggleTheme } = useTheme();

    const onToggle = () => {
        toggleTheme();
    };

    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter />
        </div>
    );
}

export default App;
