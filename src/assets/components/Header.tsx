import './Header.css';

interface HeaderProps {
    title: string;
}

const Header = ({title} : HeaderProps) => {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
        </header>
    )
}

export default Header;