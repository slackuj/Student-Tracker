import '../App.css'
import StudentTable from "../components/StudentTable.tsx";
import ActionBar from "../components/ActionBar.tsx";
import SearchBar from "../components/SearchBar.tsx";
import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import useStudentForm from "../hooks/useStudentForm.tsx";
import type {DataRowsProps} from "../components/TableDataRows.tsx";

interface StudentsProps {
    dataRows: DataRowsProps[];
    setDataRows: React.Dispatch<React.SetStateAction<DataRowsProps[]>>;
}

const Students = ({dataRows, setDataRows}: StudentsProps) => {

    const {
        handleChange,
        handleStudentValidation,
        handleDataRows,
        allChecked,
        handleShouldDelete,
        handleShouldDeleteALL,
        handleDeletion
    } = useStudentForm(dataRows, setDataRows);



    const [searchTerm, setSearchTerm] = useState("");


    const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const shouldDisableRmvBtn = !dataRows.some(dataRow => dataRow.shouldDelete);

    const searchedDataRows = dataRows.filter(dataRow => (
        dataRow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dataRow.rollNumber.toString().includes(searchTerm.toLowerCase()) ||
        dataRow.contactNumber.toString().includes(searchTerm.toLowerCase()) ||
        dataRow.gender.toString().toLowerCase().includes(searchTerm.toLowerCase())
    ));

    return (
        <>
            <ActionBar
                handleChange={handleChange}
                handleSubmitForm={handleDataRows}
                isRmvBtnDisabled={shouldDisableRmvBtn}
                handleDeleteForm={handleDeletion}
                handleStudentValidation={handleStudentValidation}
            />
            <SearchBar
                handleSearchTerm={handleSearchTerm}
                searchTerm={searchTerm}
            />
            <StudentTable
                dataRows={searchedDataRows}
                handleShouldDelete={handleShouldDelete}
                handleShouldDeleteAll={handleShouldDeleteALL}
                allChecked={allChecked}
            />
        </>
    );
};

export default Students;