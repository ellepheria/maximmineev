import React from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/NavBar';

function App() {
    const { theme, toggleTheme } = useTheme();

    const onToggle = () => {
        toggleTheme();
    };

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div>
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
