import './App.css'
import StudentTable from "./components/StudentTable.tsx";
import Header from "./components/Header.tsx";
import ActionBar from "./components/ActionBar.tsx";
import SearchBar from "./components/SearchBar.tsx";
import React, {useEffect, useState} from "react";
import type {DataRowsProps, Gender} from "./components/TableDataRows.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function App() {
    const INITIAL_DATA_ROWS: DataRowsProps[] = [
        {
            name: "Rabin Pandit",
            rollNumber: 721036,
            grade: 'A',
            contactNumber: 9812345678,
            gender: 'Male',
            shouldDelete: false
        },
        {
            name: "Prabin Chaudhary",
            rollNumber: 721037,
            grade: 'B',
            contactNumber: 9800345678,
            gender: 'Male',
            shouldDelete: false
        },
        {
            name: "Yuvraj Kalauni",
            rollNumber: 721038,
            grade: 'A',
            contactNumber: 9892345678,
            gender: 'Male',
            shouldDelete: false
        },
        {
            name: "Sushila Chamling Rai",
            rollNumber: 721039,
            grade: 'A',
            contactNumber: 9812345678,
            gender: 'Female',
            shouldDelete: false
        }
    ];

    /*            H A N D L E    I N I T I A L I Z A T I O N          */

    const INITIALIZE_DATA_ROWS = (): DataRowsProps[] =>{

        const dataRows = localStorage.getItem("dataRows");
        if (dataRows) {
            try {
                return JSON.parse(dataRows);
            } catch (e) {
                // If parsing fails, reset to initial
                localStorage.setItem("dataRows", JSON.stringify(INITIAL_DATA_ROWS));
                return(INITIAL_DATA_ROWS);
            }
        }
        else{
            return(INITIAL_DATA_ROWS);
        }
    }

    /* ---------------- LIFTING STATE UP ---------------------------- */
    /* lifting state up from <TableDataRows> and <ActionBar>          */
    /*        BECAUSE MODAL ELEMENTS IN <ActionBar>                   */
    /* needs to update data-rows in <TableDataRows> !!!               */
    /*                    A    N   D                                  */
    /*                   <TableDataRows>                              */
    /*                needs to use the states !!!                     */


    const [dataRows, setDataRows] = useState<DataRowsProps[]>(INITIALIZE_DATA_ROWS);
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState<number>(721028);
    const [grade, setGrade] = useState("");
    const [contactNumber, setContactNumber] = useState<number>(9800000000);
    const [gender, setGender] = useState<Gender>("Male");
    const [imageURL, setImageURL] = useState("");

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Save to local storage
        localStorage.setItem("dataRows", JSON.stringify(dataRows));
    }, [dataRows]);

    //const [shouldDelete, setShouldDelete] = useState<boolean>(false);
    //const [isRmvBtnDisabled, setIsRmvBtnDisabled] = useState<boolean>(true);

    /*---------------------------------------------------------*/
    /* ----- CALLBACK HANDLERS FOR MODALS in <ActionBar> ----- */
    /*---------------------------------------------------------*/

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value.trim());
    };
    const handleRollNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRollNumber(Number(event.target.value));
    };
    const handleGrade = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrade(event.target.value);
    };
    const handleContactNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContactNumber(Number(event.target.value));
    };
    const handleGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value as Gender);
    };
    const handleImageURL = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageURL(event.target.value);
    };

    const handleNewStudentValidation = (): string => {

        // check for duplicate roll-number
        const duplicateRoll = dataRows.some(dataRow => dataRow.rollNumber === rollNumber);
        if (duplicateRoll) {
            toast.error(`ERROR: Student with roll number: ${rollNumber} already exists`);
            return 'error';
        }

        // validate roll-number
        if (rollNumber === undefined || isNaN(rollNumber) || rollNumber <= 0){
            toast.error(`ERROR: Invalid Roll Number`);
            return 'error';
        }

        // validate contact-number
        if (contactNumber === undefined || isNaN(contactNumber) || contactNumber <= 0){
            toast.error(`ERROR: Invalid Contact Number`);
            return 'error';
        }
        return 'validated';
    };

    const handleDataRows = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // perform form validation later

        const newDataRow: DataRowsProps = {
            name: name,
            rollNumber: rollNumber,
            grade: grade,
            contactNumber: contactNumber,
            gender: gender,
            imgURL: imageURL,
            shouldDelete: false
        };

        setDataRows(prev => [...prev, newDataRow]);
        setName("");
        setRollNumber(0);
        setGrade("");
        setContactNumber(9800000000);
        setGender("Male");
        setImageURL("");


    };

    /*const handleDisablingRmvBtn = () => {
        if (dataRows.some(dataRow => dataRow.shouldDelete)){
            setIsRmvBtnDisabled(false);
        }
        else {
            setIsRmvBtnDisabled(true);
        }
    };*/

    /* --------------------------------------------------------------------------- */
    /* ------------------ L O G I C    F O R    D E L E T I O N ------------------ */
    /* --------------------------------------------------------------------------- */

    const handleShouldDelete = (rollNumber: number) => {
        setDataRows(prev => prev.map(dataRow =>
                dataRow.rollNumber === rollNumber ? {...dataRow, shouldDelete: !dataRow.shouldDelete} : dataRow
            ));
    };

    const allChecked = dataRows.length > 0 ? dataRows.every(dataRow => dataRow.shouldDelete) : false;

    const handleShouldDeleteALL = () => {
        setDataRows(prev => prev.map(dataRow => (
            { ...dataRow, shouldDelete: !allChecked }
            )
        ));
    };

    const handleDeletion = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedDataRows: DataRowsProps[] = dataRows.filter(dataRow => !dataRow.shouldDelete);
        setDataRows(updatedDataRows);
    };

    const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) =>{
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
      <div className="container">
          {/*<h1>Student Tracker</h1>
          */}

          <Header title='Student Tracker'/>
          <ActionBar
              handleAddName={handleName}
              handleAddRollNumber={handleRollNumber}
              handleAddGrade={handleGrade}
              handleAddContactNumber={handleContactNumber}
              handleAddGender={handleGender}
              handleAddImageURL={handleImageURL}
              handleSubmitForm={handleDataRows}
              isRmvBtnDisabled={shouldDisableRmvBtn}
              handleDeleteForm={handleDeletion}
              handleNewStudentValidation={handleNewStudentValidation}
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
          <ToastContainer
              position="bottom-right"
              autoClose={false}
              hideProgressBar={false}
              theme="colored"
          />

      </div>
  );
}

export default App;
