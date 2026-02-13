import './Header.css';
import favicon from '../assets/tracker.svg';
import {NavLink} from "react-router";

interface HeaderProps {
    title: string;
}

const Header = ({title} : HeaderProps) => {
    return (
        <header>
            <NavLink
                to="/"
                className="app-header"
            >
            <img
                className="favicon"
                src={favicon}
                alt=""
            />
                <span className="header__title">{title}</span>
            </NavLink>
        </header>
    )
}

export default Header;