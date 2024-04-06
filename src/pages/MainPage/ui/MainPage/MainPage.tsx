import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import MainImage from 'shared/assets/images/main-photo.jpg';
import cls from './MainPage.module.scss';
import { Page } from '../../../../widgets/Page/Page';
import { HStack, VStack } from '../../../../shared/ui/Stack';
import { Text, TextGap } from '../../../../shared/ui/Text/Text';

interface MainPageProps {
    className?: string;
}

const description: string[] = [
    // eslint-disable-next-line max-len
    'Я занимаюсь фронтенд-разработкой с 2020 года, сейчас учусь на втором курсе Уральского Федерального Университета на специальности "Программная инженерия".',
    'Есть опыт разработки на Vue.js, в основном пишу на React, TypeScript',
];

const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.MainPage, {}, [className || ''])}>
            <VStack max gap="32">
                <HStack max gap="32" justify="between">
                    <VStack
                        className={cls.description}
                        gap="16"
                    >
                        <Text
                            title="Привет! Меня зовут Максим"
                        />
                        {description.map((block) => (
                            <Text text={block} key={block} />
                        ))}
                    </VStack>
                    <img src={MainImage} alt="main" className={cls.photo} />
                </HStack>
            </VStack>
        </Page>
    );
};

export default memo(MainPage);
