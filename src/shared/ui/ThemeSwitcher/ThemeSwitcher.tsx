import { Button, ButtonTheme } from '../Button/Button';
import { Theme, useTheme } from '../../../app/providers/ThemeProvider';
import DarkIcon from '../../assets/icons/dark-theme-icon.svg';
import LightIcon from '../../assets/icons/light-theme-icon.svg';
import { classNames } from '../../lib/classNames/classNames';

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
