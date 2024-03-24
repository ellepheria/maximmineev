import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import Input from '../../../shared/ui/Input/Input';
import cls from './AuthorizationForm.module.scss';
import { VStack } from '../../../shared/ui/Stack';
import { loginByUsername } from '../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';

interface AuthorizationFormProps {
	className?: string;
}

export const AuthorizationForm = memo((props: AuthorizationFormProps) => {
    const {
        className,
    } = props;

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();

    const onAuth = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <VStack
            max
            justify="center"
            align="center"
            gap="32"
            className={classNames(cls.formWrapper, {}, [className])}
        >
            <header className={cls.header}>
                authorization form
            </header>
            <VStack gap="16" max>
                <Input
                    placeholder="Логин"
                    autofocus
                    value={username}
                    onChange={setUsername}
                />
                <Input
                    placeholder="Пароль"
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
                <Button
                    className={cls.loginBtn}
                    onClick={onAuth}
                >
                    Войти
                </Button>
            </VStack>
        </VStack>
    );
});
