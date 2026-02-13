import { FaPlus, FaTimes, FaSyncAlt } from "react-icons/fa";
import './ActionBar.css';
import './AddNewStudent.css';
import './DeletionModal.css';

const StudentActionBar = () => {

    return (
        <div className="action-bar">
            <button className="btn btn--primary" onClick={() => alert('This feature hasn\'t been implemented yet.')}>
                <FaPlus className="icon" /> Edit Student
            </button>

            <button className="btn btn--danger"
                    onClick={() => alert('This feature hasn\'t been implemented yet.')}
            >
                <FaTimes className="icon" /> Remove Student
            </button>
            <button className="btn btn--secondary"
                    onClick={() => window.location.reload()}
            >
                <FaSyncAlt className="icon" /> Refresh
            </button>
        </div>
    );
};

export default StudentActionBar;