import {NavLink} from "react-router";

const StudentSideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <NavLink to="/student/profile">
                    <li>Overview</li>
                </NavLink>
                <NavLink to="/student/assignments">
                    <li>Assignments</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default StudentSideBar;