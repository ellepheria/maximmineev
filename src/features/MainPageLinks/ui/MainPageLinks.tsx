import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { Link } from 'shared/types/Link';
import cls from './MainPageLinks.module.scss';

interface MainPageLinksProps {
    className?: string;
}

const links: Link[] = [
    { href: 'https://vk.com/mineevmaxim', title: 'VK' },
    { href: 'https://t.me/mineevmaxim', title: 'TELEGRAM' },
    { href: 'https://github.com/mineevmaxim', title: 'GITHUB' },
    { href: 'https://ekaterinburg.hh.ru/resume/08f53453ff06e1e9fa0039ed1f697454443946', title: 'HH.RU' },
    { href: 'mailto:maksim.mineeff@gmail.com', title: 'EMAIL' },
];

export const MainPageLinks = memo((props: MainPageLinksProps) => {
    const {
        className,
    } = props;

    const linksList = links.map((link) => (
        <li className={cls.listItem} key={link.href}>
            <AppLink to={link.href} target="_blank">
                <Text text={link.title} className={cls.listItemText} />
            </AppLink>
        </li>
    ));

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            <Text title="Ссылки:" />
            <ul>
                {linksList}
            </ul>
        </VStack>
    );
});
