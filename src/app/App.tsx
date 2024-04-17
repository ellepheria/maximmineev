import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '../widgets/NavBar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { adminActions } from '../entities/Admin/model/slice/adminSlice';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(adminActions.initAuthData());
    });

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
