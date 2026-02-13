import {NavLink} from "react-router";

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <NavLink to="/">
                    <li>Overview</li>
                </NavLink>
                <NavLink to="/students">
                    <li>Students</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default SideBar;