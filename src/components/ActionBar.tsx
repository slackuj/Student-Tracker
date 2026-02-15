import React, { useState } from 'react';
import { FaPlus, FaTimes, FaSyncAlt } from "react-icons/fa";
import NewStudentModal, {DeletionModal} from './ModalForms.tsx';
import './ActionBar.css';
import './AddNewStudent.css';
import './DeletionModal.css';

interface ActionBarProps {
    handleNewStudent: () => void;
    isRmvBtnDisabled: boolean;
    handleDeletion: () => void;
    handleStudentValidation: () => string;
    handleChange: (e: React.ChangeEvent<HTMLElement>) => void;
}

const ActionBar = (props: ActionBarProps) => {

    const [isStudentModalOpen, setStudentModalOpen] = useState(false);
    const [isDeletionModalOpen, setDeletionModalOpen] = useState(false);

    const handleStudentModal = () => {
        /*console.log(isStudentModalOpen);*/
      setStudentModalOpen(!isStudentModalOpen);
    };

    const handleDeletionModal = () => {
        setDeletionModalOpen(!isDeletionModalOpen);
    };

    return (
        <div className="action-bar">
            <button className="btn btn--primary" onClick={() => setStudentModalOpen(true)}>
                <FaPlus className="icon" /> New Student
            </button>

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

           <NewStudentModal
               handleStudent={props.handleNewStudent}
               handleStudentValidation={props.handleStudentValidation}
               handleChange={props.handleChange}
               isOpen={isStudentModalOpen}
               handleModal={handleStudentModal}
           />

            <DeletionModal
                handleDeletion={props.handleDeletion}
                isOpen={isDeletionModalOpen}
                handleModal={handleDeletionModal}
            />

        </div>
    );
};

export default ActionBar;