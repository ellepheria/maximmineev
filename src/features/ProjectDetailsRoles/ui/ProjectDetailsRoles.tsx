import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProjectDetailsRoles.module.scss';
import { Text, TextSize } from '../../../shared/ui/Text/Text';
import { VStack } from '../../../shared/ui/Stack';

interface ProjectDetailsRolesProps {
    className?: string;
    roles: string[];
}

export const ProjectDetailsRoles = memo((props: ProjectDetailsRolesProps) => {
    const {
        className,
        roles,
    } = props;

    return (
        <VStack gap="8" max className={classNames(cls.ProjectDetailsRoles, {}, [className])}>
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
