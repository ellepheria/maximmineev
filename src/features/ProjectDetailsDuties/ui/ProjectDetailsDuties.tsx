import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProjectDetailsDuties.module.scss';
import { Text, TextSize } from '../../../shared/ui/Text/Text';
import { VStack } from '../../../shared/ui/Stack';

interface ProjectDetailsDutiesProps {
    className?: string;
    duties: string[];
}

export const ProjectDetailsDuties = memo((props: ProjectDetailsDutiesProps) => {
    const {
        className,
        duties,
    } = props;

    return (
        <VStack max gap="8" className={classNames(cls.ProjectDetailsDuties, {}, [className])}>
            <Text title="Обязанности на проекте:" size={TextSize.S} />
            <ul className={cls.duties}>
                {duties.map((duty) => (
                    <li
                        key={duty}
                        className={cls.dutyItem}
                    >
                        <Text text={duty} className={cls.duty} />
                    </li>
                ))}
            </ul>
        </VStack>
    );
});
