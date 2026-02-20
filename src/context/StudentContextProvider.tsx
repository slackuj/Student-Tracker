import type {DataRowsProps} from "../components/TableDataRows.tsx";
import React, {createContext, type ReactNode, useContext} from "react";
import useStudents from "../hooks/useStudents.tsx";
import useStudent from "../hooks/useStudent.tsx";

interface StudentContextType {

    dataRows: DataRowsProps[];
    setDataRows: React.Dispatch<React.SetStateAction<DataRowsProps[]>>;
    handleChange: (e: React.ChangeEvent<HTMLElement>) => void;
    handleStudentValidation: () => string;
    handleNewStudent: () => void;
    handleShouldDelete: (id: string) => void;
    handleShouldDeleteALL: () => void;
    handleDeletion: () => void;
    handleDeletionByID: (id: string) => void;
    getStudentProps: (id: string) => DataRowsProps|null;
    handleUpdateValidation: (student: DataRowsProps) => string;
    setStudentProps: (student: DataRowsProps) => void;
    allChecked: boolean;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const useStudentContext = () => {
    const context = useContext(StudentContext);

    if (context === undefined) {
        throw new Error('useStudentContext must be used within a StudentContextProvider');
    }
    return context;
}

interface StudentContextProviderProps {
    children: ReactNode;
}

export const StudentContextProvider: React.FC<StudentContextProviderProps> = ({children}) => {


// using hooks !!!
    const {dataRows, setDataRows} = useStudents();
    const {
        allChecked,
        handleShouldDelete,
        handleShouldDeleteALL,
        handleDeletion,
        getStudentProps,
        setStudentProps,
        handleUpdateValidation,
        handleDeletionByID,
        handleNewStudent,
        handleChange,
        handleStudentValidation
    } = useStudent(dataRows, setDataRows);

    return (
    <StudentContext.Provider value={{
        dataRows,
        setDataRows,
        handleChange,
        handleStudentValidation,
        handleNewStudent,
        handleShouldDelete,
        handleShouldDeleteALL,
        handleDeletion,
        handleDeletionByID,
        getStudentProps,
        handleUpdateValidation,
        setStudentProps,
        allChecked
    }}>
        {children}
    </StudentContext.Provider>
    )
};