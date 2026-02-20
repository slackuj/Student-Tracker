import {createContext, type ReactNode, useContext, useEffect, useState} from 'react';

// Step 1: Define the Theme type
// This ensures type safety for our theme values
export type Theme = 'light' | 'dark';

// Step 2: Define the shape of our context data
// This interface describes what data and functions will be available to components
interface ThemeContextType {
    theme: Theme;           // Current theme value
    toggleTheme: () => void; // Function to switch between themes
}

// Step 3: Create the React Context
// createContext() creates a new context object
// We initialize it with 'undefined' to force proper usage with our custom hook
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Step 4: Create a custom hook to use the context
// This hook provides a safe way to access the context and includes error handling
export const useTheme = () => {
    const context = useContext(ThemeContext);

    // Step 5: Add error handling
    // This ensures the hook is only used within a ThemeProvider
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};

// Step 6: Define props for our Provider component
interface ThemeProviderProps {
    children: ReactNode; // Any child components that need access to the theme
}

// Step 7: Create the Provider component
// This component will wrap our app and provide theme state to all child components
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Step 8: Create local state to manage the current theme
    // This state will be shared with all components that use our context
    const [theme, setTheme] = useState<Theme>(
        localStorage.getItem('appTheme') as Theme || 'light'
        );

     // handling theme using useEffect and document.body
    // because modal-root lives outside <App/>
    useEffect(() => {
        document.body.classList.remove('dark', 'light');
        document.body.classList.add('app-theme', theme);
    }, [theme]);

    // Step 9: Create the toggle function
    // This function switches between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => {
            prevTheme = prevTheme === 'light' ? 'dark' : 'light';
        // save the theme to localStorage
        localStorage.setItem('appTheme', prevTheme);
        return prevTheme;
        });
    };

    // Step 10: Return the Provider component
    // The Provider makes the theme state and toggle function available to all children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
        </ThemeContext.Provider>
    );
};