import StudentSideBar from "../../components/StudentSideBar.tsx";
import './Assignments.css';
import AssignmentActionBar from "../../components/AssignmentActionBar.tsx";
import useAssignments from "../../hooks/useAssignments.tsx";
import {useParams} from "react-router";

const AssignmentList = () => {

    const {rollNumber} = useParams();
    const {
        assignments,
        loading
    } = useAssignments(Number(rollNumber));

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!assignments || assignments.length === 0) {
        return <div className="no-assignments">No assignments found.</div>;
    }

    return (
        <>
            <StudentSideBar
                rollNumber={Number(rollNumber)}
            />
            <div className="main-content">
                <AssignmentActionBar/>
                <div>

                <div className="student-assignments-list">
                    <ul>
                        {assignments?.map(assignment => (
                            <li className="assignment-card" key={assignment.assignmentId}>
                                <div>
                                    <h3>{assignment.title}</h3>
                                    <p>assigned date: {new Date(assignment.assignedDate).toLocaleDateString()}</p>
                                    <p>submitted on: {assignment.submissionDate ? new Date(assignment.submissionDate).toLocaleDateString() : "Not Submitted"}</p>
                                </div>
                                <div>
                                    <p
                                        className={`status-box ${assignment.status.toLowerCase()}`}
                                    >status: {assignment.status}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
                </div>
            </div>
        </>
    )


}

export default AssignmentList;