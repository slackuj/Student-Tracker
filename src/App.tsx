import './App.css'
import StudentTable from "./components/StudentTable.tsx";
import Header from "./components/Header.tsx";
import ActionBar from "./components/ActionBar.tsx";
import React, {useState} from "react";
import type {DataRowsProps, Gender} from "./components/TableDataRows.tsx";

function App() {
    const INITIAL_DATA_ROWS: DataRowsProps[] = [
        {
            name: "Rabin Pandit",
            rollNumber: 721036,
            grade: 'A',
            contactNumber: 9812345678,
            gender: 'Male'
        },
        {
            name: "Rabin Pandit",
            rollNumber: 721037,
            grade: 'A',
            contactNumber: 9812345678,
            gender: 'Male'
        },
        {
            name: "Rabin Pandit",
            rollNumber: 721038,
            grade: 'A',
            contactNumber: 9812345678,
            gender: 'Male'
        },
        {
            name: "Rabin Pandit",
            rollNumber: 721039,
            grade: 'A',
            contactNumber: 9812345678,
            gender: 'Male'
        }
    ];

    /* ---------------- LIFTING STATE UP ---------------------------- */
    /* lifting state up from <TableDataRows> and <ActionBar>          */
    /*        BECAUSE MODAL ELEMENTS IN <ActionBar>                   */
    /* needs to update data-rows in <TableDataRows> !!!               */
    /*                    A    N   D                                  */
    /*                   <TableDataRows>                              */
    /*                needs to use the states !!!                     */

    const [dataRows, setDataRows] = useState<DataRowsProps[]>(INITIAL_DATA_ROWS);
    const [name, setName] = useState("");
    const [rollNumber, setRollNumber] = useState<number>(721028);
    const [grade, setGrade] = useState("");
    const [contactNumber, setContactNumber] = useState<number>(9800000000);
    const [gender, setGender] = useState<Gender>("Male");
    const [imageURL, setImageURL] = useState("");

    /*---------------------------------------------------------*/
    /* ----- CALLBACK HANDLERS FOR MODALS in <ActionBar> ----- */
    /*---------------------------------------------------------*/

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
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

    const handleDataRows = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // perform form validation later

        const newDataRow: DataRowsProps = {
            name: name,
            rollNumber: rollNumber,
            grade: grade,
            contactNumber: contactNumber,
            gender: gender,
            imgURL: imageURL
        };

        setDataRows(prev => [...prev, newDataRow]);
        setName("");
        setRollNumber(0);
        setGrade("");
        setContactNumber(9800000000);
        setGender("Male");
        setImageURL("");


    };
  return (
      <div className="container">
          {/*<h1>Student Tracker</h1>
          <div className="searchBar">
              <input id="searchInput" type="text" placeholder="type to search" name="searchText"/>
          </div>*/}

          <Header title='Student Tracker'/>
          <ActionBar
              handleAddName={handleName}
              handleAddRollNumber={handleRollNumber}
              handleAddGrade={handleGrade}
              handleAddContactNumber={handleContactNumber}
              handleAddGender={handleGender}
              handleAddImageURL={handleImageURL}
              handleSubmitForm={handleDataRows}
          />
          <StudentTable dataRows={dataRows} />

      </div>
  );
}

export default App;
