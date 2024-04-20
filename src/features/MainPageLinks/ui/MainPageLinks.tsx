import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text } from 'shared/ui/Text/Text';
import { Link } from 'shared/types/Link';
import { Grid } from 'shared/ui/Grid/Grid';
import cls from './MainPageLinks.module.scss';

const links: Link[] = [
    { href: 'https://vk.com/mineevmaxim', title: 'VK' },
    { href: 'https://t.me/mineevmaxim', title: 'TELEGRAM' },
    { href: 'https://github.com/mineevmaxim', title: 'GITHUB' },
    { href: 'https://ekaterinburg.hh.ru/resume/08f53453ff06e1e9fa0039ed1f697454443946', title: 'HH.RU' },
    { href: 'mailto:maksim.mineeff@gmail.com', title: 'EMAIL' },
];

export const MainPageLinks = memo(() => {
    const linksList = links.map((link) => (
        <li className={cls.listItem} key={link.href}>
            <AppLink to={link.href} target="_blank">
                <Text text={link.title} className={cls.listItemText} />
            </AppLink>
        </li>
    ));

    return (
        <Grid>
            <Text title="Ссылки:" />
            <ul>
                {linksList}
            </ul>
        </Grid>
    );
});
