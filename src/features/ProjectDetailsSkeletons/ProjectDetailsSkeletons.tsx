import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import cls from './ProjectDetailsSkeletons.module.scss';

interface ProjectDetailsSkeletonsProps {
    className?: string;
}

export const ProjectDetailsSkeletons = memo((props: ProjectDetailsSkeletonsProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.ProjectDetailsSkeletons, {}, [className])}>
            <VStack max>
                <Skeleton className={cls.cover} height={526} width="100%" />
                <HStack justify="between" className={cls.title}>
                    <Skeleton height={50} width={300} border="8px" />
                    <Skeleton height={40} width={260} border="8px" />
                </HStack>
                <VStack max className={cls.content} gap="16">
                    <Skeleton height={150} width="80%" border="12px" />

                    <Text title="Обязанности на проекте:" size={TextSize.S} />
                    <VStack gap="8">
                        <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                        <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                        <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                    </VStack>

                    <Text title="Роли в проекте:" size={TextSize.S} />
                    <VStack gap="8">
                        <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                        <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                        <Skeleton height={30} width={300} border="8px" className={cls.dutyItem} />
                    </VStack>

                    <Text title="Ссылки:" size={TextSize.S} />
                    <VStack gap="8">
                        <Skeleton height={30} width={300} border="8px" className={cls.linkItem} />
                        <Skeleton height={30} width={300} border="8px" className={cls.linkItem} />
                        <Skeleton height={30} width={300} border="8px" className={cls.linkItem} />
                    </VStack>
                </VStack>
            </VStack>
        </Page>
    );
});
