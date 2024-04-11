import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import cls from './ProjectDetailsRoles.module.scss';

interface ProjectDetailsRolesProps {
    className?: string;
    roles?: string[];
}

export const ProjectDetailsRoles = memo((props: ProjectDetailsRolesProps) => {
    const {
        className,
        roles,
    } = props;

    if (!roles) {
        return null;
    }

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <Text title="Роли в проекте:" size={TextSize.S} />
            <ul className={cls.roles}>
                {roles.map((role) => (
                    <li
                        key={role}
                        className={cls.roleItem}
                    >
                        <Text text={role} className={cls.role} />
                    </li>
                ))}
            </ul>
        </VStack>
    );
});
