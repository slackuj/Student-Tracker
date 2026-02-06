import { useState } from 'react';
import { FaPlus, FaTimes, FaSyncAlt } from "react-icons/fa";
import Modal from './Modal';
import './ActionBar.css';

const ActionBar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="action-bar">
            <button className="btn btn--primary" onClick={() => setModalOpen(true)}>
                <FaPlus className="icon" /> New Student
            </button>

            {/* Add other buttons here */}
            <button className="btn btn--danger" disabled>
                <FaTimes className="icon" /> Remove Student
            </button>
            <button className="btn btn--secondary">
                <FaSyncAlt className="icon" /> Refresh
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title="Register New Student"
            >
                <form className="student-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="student-form__name"
                               id="name"
                               type="text"
                               placeholder="enter name ..."
                               required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rollNumber">Roll Number</label>
                        <input
                            className="student-form__roll"
                            id="rollNumber"
                            type="number"
                            placeholder="721028"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grade">Grade</label>
                        <input className="student-form__grade"
                               id="grade"
                               type="text"
                               placeholder="A"
                               required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input
                            className="student-form__contact"
                            id="contactNumber"
                            type="number"
                            placeholder="9800000000"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" className="student-form__gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgURL">ImageURL (optional)</label>
                        <input className="student-form__img"
                               id="imgURL"
                               type="text"
                               placeholder="enter imageURL"
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn btn--primary">Save Student</button>
                        <button type="button" className="btn btn--secondary"
                                onClick={() => setModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};
/*
const ActionBar = () => {
    return (
        <div className="action-bar">
            <button className="btn btn--primary">
                <FaPlus className="icon" /> New Student
            </button>

        </div>
    );
};
*/

export default ActionBar;