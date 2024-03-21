import {
    memo, useCallback,
    useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { postAuthData } from '../../../shared/lib/api/postAuthData';
import Input from '../../../shared/ui/Input/Input';
import cls from './AuthorizationForm.module.scss';

interface AuthorizationFormProps {
	className?: string;
}

export const AuthorizationForm = memo((props: AuthorizationFormProps) => {
    const {
        className,
    } = props;

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    const onAuth = useCallback(async () => {
        await postAuthData({
            authData: {
                username,
                password,
            },
            dispatch,
        });
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.formWrapper, {}, [className])}>
            <div className={cls.header}>
                authorization form
            </div>
            <div className={cls.form}>
                <Input
                    placeholder="Логин"
                    autofocus
                    value={username}
                    onChange={setUsername}
                    className={cls.input}
                />
                <Input
                    placeholder="Пароль"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    className={cls.input}
                />
                <Button
                    className={cls.loginBtn}
                    onClick={onAuth}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
});
