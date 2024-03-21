import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme, useTheme } from '../../app/providers/ThemeProvider';
import DarkIcon from '../../shared/assets/icons/dark-theme-icon.svg';
import LightIcon from '../../shared/assets/icons/light-theme-icon.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT
                ? (
                    <img
                        alt="Dark theme switch icon"
                        src={DarkIcon}
                    />
                )
                : (
                    <img
                        alt="Light theme switch icon"
                        src={LightIcon}
                    />
                )}
        </Button>
    );
};
