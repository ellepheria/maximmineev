import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { VStack } from 'shared/ui/Stack';
import { Link } from 'shared/types/Link';
import cls from './ProjectDetailsLinks.module.scss';

interface ProjectDetailsLinksProps {
    className?: string;
    links?: Link[];
}

export const ProjectDetailsLinks = memo((props: ProjectDetailsLinksProps) => {
    const {
        className,
        links,
    } = props;

    if (!links) {
        return null;
    }

    return (
        <VStack max gap="8" className={classNames('', {}, [className])}>
            <Text title="Ссылки:" size={TextSize.S} />
            <ul className={cls.links}>
                {links.map((link) => (
                    <li
                        key={link.href}
                        className={cls.linkItem}
                    >
                        <AppLink to={link.href} className={cls.link} target="_blank">
                            <Text text={link.title} className={cls.linkText} />
                        </AppLink>
                    </li>
                ))}
            </ul>
        </VStack>
    );
});
