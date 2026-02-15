import {NavLink} from "react-router";

interface StudentSideBarProps {

    id: string;
}

const StudentSideBar = ({id}: StudentSideBarProps) => {
    return (
        <div className="sidebar">
            <ul>
                <NavLink to={`/student/${id}`} end>
                    <li>Overview</li>
                </NavLink>
                <NavLink to={`/student/${id}/assignments`}>
                    <li>Assignments</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default StudentSideBar;