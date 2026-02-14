import {NavLink} from "react-router";

interface StudentSideBarProps {

    rollNumber: number;
}

const StudentSideBar = ({rollNumber}: StudentSideBarProps) => {
    return (
        <div className="sidebar">
            <ul>
                <NavLink to={`/student/${rollNumber}`} end>
                    <li>Overview</li>
                </NavLink>
                <NavLink to={`/student/${rollNumber}/assignments`}>
                    <li>Assignments</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default StudentSideBar;