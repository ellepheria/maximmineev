import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import TypescriptIcon from 'shared/assets/icons/typescript.png';
import ReactIcon from 'shared/assets/icons/react.png';
import VueIcon from 'shared/assets/icons/vue.png';
import PythonIcon from 'shared/assets/icons/python.png';
import SassIcon from 'shared/assets/icons/sass.png';
import HtmlIcon from 'shared/assets/icons/html.png';
import CssIcon from 'shared/assets/icons/css-3.png';
import CsharpIcon from 'shared/assets/icons/c-sharp.png';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import cls from './MainPageStack.module.scss';

interface MainPageStackProps {
    className?: string;
}

export const MainPageStack = memo((props: MainPageStackProps) => {
    const {
        className,
    } = props;

    return (
        <HStack
            className={classNames(cls.MainPageStack, {}, [className])}
            gap="16"
            align="center"
            justify="center"
            max
        >
            <Text title="Мой стек:" size={TextSize.M} />
            <img src={ReactIcon} alt="React" className={cls.icon} />
            <img src={TypescriptIcon} alt="Typescript" className={cls.icon} />
            <img src={HtmlIcon} alt="HTML" className={cls.icon} />
            <img src={CssIcon} alt="CSS" className={cls.icon} />
            <img src={SassIcon} alt="Sass" className={cls.icon} />
            <img src={VueIcon} alt="Vue" className={cls.icon} />
            <img src={PythonIcon} alt="Python" className={cls.icon} />
            <img src={CsharpIcon} alt="C#" className={cls.icon} />
        </HStack>
    );
});
