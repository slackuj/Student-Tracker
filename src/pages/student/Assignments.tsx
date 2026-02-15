import './Assignments.css';
import AssignmentActionBar from "../../components/AssignmentActionBar.tsx";
import useAssignments from "../../hooks/useAssignments.tsx";
import {useParams} from "react-router";

const AssignmentList = () => {

    const {id} = useParams();
    if (!id){
        return <div>No assignments not found.</div>;
    }
    const {
        assignments,
        loading
    } = useAssignments(id);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!assignments || assignments.length === 0) {
        return (
                <>
                    <AssignmentActionBar/>
                    <div>

                        <div className="student-assignments-list">
                            <div className="no-assignments">No assignments found.</div>
                    </div>
                    </div>
                </>
        )
    }

    return (
        <>
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
        </>
    )


}

export default AssignmentList;