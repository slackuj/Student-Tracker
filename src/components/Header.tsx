import './Header.css';
import favicon from '../assets/tracker.svg';

interface HeaderProps {
    title: string;
}

const Header = ({title} : HeaderProps) => {
    return (
        <header className="app-header">
            <img className="favicon" src={favicon}/> <span className="header__title">{title}</span>
        </header>
    )
}

export default Header;