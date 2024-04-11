import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import cls from './ProjectDetailsDuties.module.scss';

interface ProjectDetailsDutiesProps {
    className?: string;
    duties?: string[];
}

export const ProjectDetailsDuties = memo((props: ProjectDetailsDutiesProps) => {
    const {
        className,
        duties,
    } = props;

    if (!duties) {
        return null;
    }

    return (
        <VStack max gap="8" className={classNames('', {}, [className])}>
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
