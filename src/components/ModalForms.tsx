import React, {useState} from 'react';
import Modal from './Modal';
import './AddNewStudent.css';
import './AddNewStudent.css';
import './DeletionModal.css';
import type {DataRowsProps} from "./TableDataRows.tsx";
import {useNavigate} from "react-router";

interface StudentModalProps {

    handleStudent: () => void;
    handleStudentValidation: () => string;
    handleChange: (e: React.ChangeEvent<HTMLElement>) => void;
    isOpen: boolean;
    handleModal: () => void;
}

interface EditModalProps {

    isOpen: boolean;
    handleModal: () => void;
    student: DataRowsProps | null;
    setStudentProps: (student: DataRowsProps) => void;
    handleUpdateValidation: (student: DataRowsProps) => string;
}

interface DeletionModalProps {

    isOpen: boolean;
    handleModal: () => void;
    handleDeletion: () => void;
    handleShouldDelete?: (id: string) => void;// used inside StudentActionBar
    studentID?: string;
}

const StudentModal = (props: StudentModalProps) => {

        return (
            <Modal
                isOpen={props.isOpen}
                onClose={props.handleModal}
                title="Register New Student"
            >
                <form
                    className="student-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                            if (props.handleStudentValidation() === 'validated') {
                                props.handleModal();
                                    props.handleStudent();
                        }
                    }
                    }
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="student-form__name"
                               id="name"
                               name="name"
                               type="text"
                               placeholder="enter name ..."
                               required
                               onChange={props.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rollNumber">Roll Number</label>
                        <input
                            className="student-form__roll"
                            id="rollNumber"
                            name="rollNumber"
                            type="number"
                            placeholder="721028"
                            required
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grade">Grade</label>
                        <input className="student-form__grade"
                               id="grade"
                               name="grade"
                               type="text"
                               placeholder="A"
                               required
                               onChange={props.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input
                            className="student-form__contact"
                            id="contactNumber"
                            name="contactNumber"
                            type="number"
                            placeholder="9800000000"
                            required
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            className="student-form__gender"
                            value="Male"
                            onChange={props.handleChange}
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
                               name="imgURL"
                               type="text"
                               placeholder="enter imageURL"
                               onChange={props.handleChange}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit"
                                className="btn btn--primary"
                        >Save Student
                        </button>
                        <button type="button" className="btn btn--secondary"
                                onClick={props.handleModal}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        );
};

const EditModal = (props: EditModalProps) => {

    if (!props.student){
        return null;
    }
    const [Student, setStudent] = useState<DataRowsProps>(props.student);

    const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const {name, value} = target;

        setStudent(prev => ({
            ...prev,
            [name]: name === "rollNumber" || name === "contactNumber" ? Number(value) : value
        }));

    }

    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.handleModal}
            title="Eidting Student"
        >
            <form
                className="student-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (props.handleUpdateValidation(Student) === 'validated') {
                        props.handleModal();
                        props.setStudentProps(Student);
                    }
                }
                }
            >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="student-form__name"
                           id="name"
                           name="name"
                           type="text"
                           value={Student.name}
                           placeholder="enter name ..."
                           required
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rollNumber">Roll Number</label>
                    <input
                        className="student-form__roll"
                        id="rollNumber"
                        name="rollNumber"
                        type="number"
                        value={Student.rollNumber}
                        placeholder="721028"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                    <input className="student-form__grade"
                           id="grade"
                           name="grade"
                           type="text"
                           value={Student.grade}
                           placeholder="A"
                           required
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        className="student-form__contact"
                        id="contactNumber"
                        name="contactNumber"
                        type="number"
                        value={Student.contactNumber}
                        placeholder="9800000000"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        className="student-form__gender"
                        value={Student.gender}
                        onChange={handleChange}
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
                           name="imgURL"
                           type="text"
                           placeholder="enter imageURL"
                           value={Student.imgURL}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit"
                            className="btn btn--primary"
                    >Save Student
                    </button>
                    <button type="button" className="btn btn--secondary"
                            onClick={props.handleModal}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    );
};

const DeletionModal = (props: DeletionModalProps) => {

    let navigate = useNavigate();
    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.handleModal}
            title="Removing Students"
            >
            <form className="student-deletion-form"
                  onSubmit={(e) => {
                      e.preventDefault();
                      props.handleModal();
                      if (props.handleShouldDelete) {
                          if (props.studentID) {
                              console.log('deleting user from profile page');
                              props.handleShouldDelete(props.studentID);
                              navigate("/students");
                          }
                      } else {

                          console.log('deleting user from /students page');
                          console.log(props.studentID);
                          props.handleDeletion();
                  }}}
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
                            onClick={props.handleModal}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default StudentModal;
export {DeletionModal, EditModal};