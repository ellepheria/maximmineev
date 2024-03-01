import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, classNames } from '../../../shared';
import Input from '../../../shared/ui/Input/Input';
import cls from './AuthorizationForm.module.scss';
import { getAdminAuthData } from '../model/selectors/getAuthData/getAdminAuthData';
import { adminActions } from '../model/slice/adminSlice';

interface AuthorizationFormProps {
	className?: string;
}

export const AuthorizationForm = memo((props: AuthorizationFormProps) => {
    const {
        className,
    } = props;

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className={classNames(cls.formWrapper, {}, [className])}>
            <div className={cls.header}>
                authorization form
            </div>
            <div className={cls.form}>
                <Input
                    placeholder="Логин"
                    autofocus
                    value={login}
                    onChange={setLogin}
                    className={cls.input}
                />
                <Input
                    placeholder="Пароль"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    className={cls.input}
                />
                <Button>
                    Войти
                </Button>
            </div>
        </div>
    );
});
