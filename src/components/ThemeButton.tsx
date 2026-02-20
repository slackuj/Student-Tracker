import { useTheme } from '../context/ThemeContext';

export const ThemeButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (

        <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ? '🌙' : '☀️'}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
};