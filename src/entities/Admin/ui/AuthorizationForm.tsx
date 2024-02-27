import { memo, useState } from 'react';
import { classNames } from '../../../shared';
import Input from '../../../shared/ui/Input/Input';
import cls from './AuthorizationForm.module.scss';

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
            </div>
        </div>
    );
});
