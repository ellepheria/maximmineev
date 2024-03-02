import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
    classNames,
} from '../shared';
import { Navbar } from '../widgets/NavBar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { adminActions } from '../entities/Admin/model/slice/adminSlice';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(adminActions.initAuthData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
