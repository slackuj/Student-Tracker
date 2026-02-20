import '../../App.css'
import './StudentProfile.css';
import 'react-toastify/dist/ReactToastify.css';
import StudentActionBar from "../../components/StudentActionBar.tsx";
import {useParams} from "react-router";
import Avatar from "../../components/Avatar.tsx";
import {useStudentContext} from "../../context/StudentContextProvider.tsx";

/*interface StudentProfileProps {

    getStudentProps: (id: string) => DataRowsProps | null;
    setStudentProps: (students: DataRowsProps) => void;
    handleUpdateValidation: (student: DataRowsProps) => string;
    handleDeletion: () => void;
    handleShouldDelete: (id: string) => void;
}*/


const StudentProfile = () => {

    const StudentContext = useStudentContext();
    const {id} = useParams();
    if (!id) {
        return <div>Student not found.</div>
    }
    const student = StudentContext.getStudentProps(id);

    /*console.log('roll: ' + rollNumber)
    console.log(student);*/
    if (!student) {
        return <div>Student not found.</div>
    }

    return (
        <>
                <StudentActionBar/>
                <div>
                    <div className="profile-container">
                        <div className="profile-content">
                            <div className="user-info-section">
                                <div className="user-avatar">
                                    <div className="avatar-circle">
                                        <Avatar student={student}/>
                                    </div>
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
                                        <span className="value">{student.contactNumber}</span>
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
        </>
    );

};
          export default StudentProfile;
