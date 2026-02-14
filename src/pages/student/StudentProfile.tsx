import '../../App.css'
import './StudentProfile.css';
import 'react-toastify/dist/ReactToastify.css';
import StudentActionBar from "../../components/StudentActionBar.tsx";
import StudentSideBar from "../../components/StudentSideBar.tsx";
import type {DataRowsProps} from "../../components/TableDataRows.tsx";
import {useParams} from "react-router";

interface StudentProfileProps {

    getStudentProps: (rollNumber: number) => DataRowsProps | null;
}

const StudentProfile = ({getStudentProps}: StudentProfileProps) => {

    const {rollNumber} = useParams();
    const student = getStudentProps(Number(rollNumber));

    /*console.log('roll: ' + rollNumber)
    console.log(student);*/
    if (!student) {
        return <div>Student not found.</div>
    }

    return (
        <>
            <StudentSideBar
                rollNumber={Number(rollNumber)}
            />
            <div className="main-content">
                <StudentActionBar/>
                <div>
                    <div className="profile-container">
                        <div className="profile-content">
                            <div className="user-info-section">
                                <div className="user-avatar">
                                    <div className="avatar-circle">RB</div>
                                </div>
                                <div className="user-details">
                                    <h1>{student.name}</h1>
                                </div>
                            </div>

                            <hr/>

                            <div className="user-details-grid">
                                <div className="grid-item">
                                    <div className="label">Roll Number</div>
                                    <div className="value">{student.rollNumber}</div>
                                </div>
                                <div className="grid-item">
                                    <div className="label">Grade</div>
                                    <div className="value">{student.grade}</div>
                                </div>
                                <div className="grid-item">
                                    <div className="label">Contact Number</div>
                                    <div className="value-with-icon">
                                        <span className="value">{student.rollNumber}</span>
                                    </div>
                                </div>
                                <div className="grid-item">
                                    <div className="label">Gender</div>
                                    <div className="value">{student.gender}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-container">
                        <nav className="profile-nav">
                            Assignment Activity
                        </nav>
                        <div className="profile-content">
                            <h2>February 2026</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};
          export default StudentProfile;
