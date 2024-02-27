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
            <div className="content_page">
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
