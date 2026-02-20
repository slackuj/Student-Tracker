import { useState } from 'react';
import { FaPlus, FaTimes, FaSyncAlt } from "react-icons/fa";
import NewStudentModal, {DeletionModal} from './ModalForms.tsx';
import './ActionBar.css';
import {useStudentContext} from "../context/StudentContextProvider.tsx";

/*interface ActionBarProps {
    handleNewStudent: () => void;
    isRmvBtnDisabled: boolean;
    handleDeletion: () => void;
    handleStudentValidation: () => string;
    handleChange: (e: React.ChangeEvent<HTMLElement>) => void;
}*/


const ActionBar = () => {
    const StudentContext = useStudentContext();

    const [isStudentModalOpen, setStudentModalOpen] = useState(false);
    const [isDeletionModalOpen, setDeletionModalOpen] = useState(false);
    const isRmvBtnDisabled = !StudentContext.dataRows.some(dataRow => dataRow.shouldDelete);

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
                    disabled={isRmvBtnDisabled}
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
               isOpen={isStudentModalOpen}
               handleModal={handleStudentModal}
           />

            <DeletionModal
                isOpen={isDeletionModalOpen}
                handleModal={handleDeletionModal}
            />

        </div>
    );
};

export default ActionBar;