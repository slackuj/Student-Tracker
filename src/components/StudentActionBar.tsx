import { FaPlus, FaTimes, FaSyncAlt } from "react-icons/fa";
import './ActionBar.css';
import './AddNewStudent.css';
import './DeletionModal.css';
import {useState} from "react";
import {DeletionModal, EditModal} from "./ModalForms.tsx";
import type {DataRowsProps} from "./TableDataRows.tsx";
import {useParams} from "react-router";

interface StudentProfileProps {

    getStudentProps: (id: string) => DataRowsProps | null;
    setStudentProps: (students: DataRowsProps) => void;
    handleUpdateValidation: (student: DataRowsProps) => string;
    handleDeletion: () => void;
    handleShouldDelete: (id: string) => void;
}

const StudentActionBar = (props: StudentProfileProps) => {

    const {id} = useParams();
    if (!id) {
        return <div>Student not found.</div>;
    }
    const student = props.getStudentProps(id);
    if (!student)
        return <div>Student not found.</div>;

    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeletionModalOpen, setDeletionModalOpen] = useState(false);

    const handleEditModal = () => {
        /*console.log(isEditModalOpen);*/
        setEditModalOpen(!isEditModalOpen);
    };

    const handleDeletionModal = () => {
        setDeletionModalOpen(!isDeletionModalOpen);
    };

    return (
        <div className="action-bar">
            <button className="btn btn--primary" onClick={() => setEditModalOpen(true)}>
                <FaPlus className="icon" /> Edit Student
            </button>

            <button className="btn btn--danger"
                    onClick={() => setDeletionModalOpen(true)}
            >
                <FaTimes className="icon" /> Remove Student
            </button>
            <button className="btn btn--secondary"
                    onClick={() => window.location.reload()}
            >
                <FaSyncAlt className="icon" /> Refresh
            </button>

            <EditModal
                isOpen={isEditModalOpen}
                handleModal={handleEditModal}
                student={student}
                setStudentProps={props.setStudentProps}
                handleUpdateValidation={props.handleUpdateValidation}
            />

            <DeletionModal
                handleDeletion={props.handleDeletion}
                isOpen={isDeletionModalOpen}
                handleModal={handleDeletionModal}
                studentID={student.id}
                handleShouldDelete={props.handleShouldDelete}
            />
        </div>
    );
};

export default StudentActionBar;