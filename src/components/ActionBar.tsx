import React, { useState } from 'react';
import { FaPlus, FaTimes, FaSyncAlt } from "react-icons/fa";
import Modal from './Modal';
import './ActionBar.css';
import './AddNewStudent.css';
import './DeletionModal.css';

interface ActionBarProps {
    handleAddName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddRollNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddGrade: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddContactNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddGender: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleAddImageURL: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
    isRmvBtnDisabled: boolean;
    handleDeleteForm: (e: React.FormEvent<HTMLFormElement>) => void;
    handleNewStudentValidation: () => string;
}

const ActionBar = (props: ActionBarProps) => {

    const [isFileModalOpen, setFileModalOpen] = useState(false);
    const [isDeletionModalOpen, setDeletionModalOpen] = useState(false);

    return (
        <div className="action-bar">
            <button className="btn btn--primary" onClick={() => setFileModalOpen(true)}>
                <FaPlus className="icon" /> New Student
            </button>

            {/* Add other buttons here */}
            <button className="btn btn--danger"
                    disabled={props.isRmvBtnDisabled}
                    onClick={() => setDeletionModalOpen(true)}
            >
                <FaTimes className="icon" /> Remove Student
            </button>
            <button className="btn btn--secondary"
                    onClick={() => window.location.reload()}
            >
                <FaSyncAlt className="icon" /> Refresh
            </button>

            <Modal
                isOpen={isFileModalOpen}
                onClose={() => setFileModalOpen(false)}
                title="Register New Student"
            >
                <form className="student-form" onSubmit={(e) => {
                    e.preventDefault();
                    if(props.handleNewStudentValidation() === 'validated') {
                    setFileModalOpen(false);
                    props.handleSubmitForm(e);}}}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="student-form__name"
                               id="name"
                               type="text"
                               placeholder="enter name ..."
                               required
                               onChange={props.handleAddName}
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
                            onChange={props.handleAddRollNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grade">Grade</label>
                        <input className="student-form__grade"
                               id="grade"
                               type="text"
                               placeholder="A"
                               required
                               onChange={props.handleAddGrade}
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
                            onChange={props.handleAddContactNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            className="student-form__gender"
                            value="Male"
                            onChange={props.handleAddGender}
                        >
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
                               onChange={props.handleAddImageURL}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit"
                                className="btn btn--primary"
                        >Save Student</button>
                        <button type="button" className="btn btn--secondary"
                                onClick={() => setFileModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>

            <Modal
                isOpen={isDeletionModalOpen}
                onClose={()=>setDeletionModalOpen(false)}
                title="Removing Students"
                >
                <form className="student-deletion-form"
                      onSubmit={(e) => {
                          setDeletionModalOpen(false);
                          props.handleDeleteForm(e);}}
                >
                    <div className="form-group">
                        Remove the selected student(s) ?
                    </div>
                    <div className="form-actions">
                        <button type="submit"
                                className="btn btn--primary"
                        >
                            Remove
                        </button>
                        <button type="button"
                                className="btn btn--secondary"
                                onClick={() => setDeletionModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ActionBar;