import './Header.css';
import favicon from '../assets/tracker.svg';
import {NavLink} from "react-router";
import {ThemeButton} from "./ThemeButton.tsx";

interface HeaderProps {
    title: string;
}

const Header = ({title} : HeaderProps) => {
    return (
        <header className="app-header">
            <NavLink
                to="/"
            >
            <img
                className="favicon"
                src={favicon}
                alt=""
            />
                <span className="header__title">{title}</span>
            </NavLink>
            <ThemeButton/>
        </header>
    )
}

export default Header;