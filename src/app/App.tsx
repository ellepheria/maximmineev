import {
    classNames,
} from '../shared';
import { Navbar } from '../widgets/NavBar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();

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
