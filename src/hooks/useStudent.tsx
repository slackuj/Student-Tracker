import React, {useMemo, useState} from "react";
import type {DataRowsProps} from "../components/TableDataRows.tsx";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

const useStudent = (dataRows: DataRowsProps[], setDataRows:  React.Dispatch<React.SetStateAction<DataRowsProps[]>>) => {


    /* ---------------- LIFTING STATE UP ---------------------------- */
    /* lifting state up from <TableDataRows> and <ActionBar>          */
    /*        BECAUSE MODAL ELEMENTS IN <ActionBar>                   */
    /* needs to update data-rows in <TableDataRows> !!!               */
    /*                    A    N   D                                  */
    /*                   <TableDataRows>                              */
    /*                needs to use the states !!!                     */


    const [newStudent, setNewStudent] = useState<DataRowsProps>({
        name: '',
        rollNumber: 721028,
        grade: 'A',
        contactNumber: 9800000000,
        gender: 'Male',
        imgURL: '',
        shouldDelete: false
    });



    /*---------------------------------------------------------*/
    /* ----- CALLBACK HANDLERS FOR MODALS in <ActionBar> ----- */
    /*---------------------------------------------------------*/

    /* CALLBACK HANDLER FOR REGISTERING NEW STUDENT */

    const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const {name, value} = target;

        setNewStudent(prev => ({
            ...prev,
            [name]: name === "rollNumber" || name === "contactNumber" ? Number(value) : value
        }));

    }

    const handleStudentValidation = (): string => {

        // check for duplicate roll-number
        const duplicateRoll = dataRows.some(dataRow => dataRow.rollNumber === newStudent.rollNumber);
        if (duplicateRoll) {
            toast.error(`ERROR: Student with roll number: ${newStudent.rollNumber} already exists`);
            return 'error';
        }

        // validate roll-number
        if (newStudent.rollNumber === undefined || isNaN(newStudent.rollNumber) || newStudent.rollNumber <= 0) {
            toast.error(`ERROR: Invalid Roll Number`);
            return 'error';
        }

        // validate contact-number
        if (newStudent.contactNumber === undefined || isNaN(newStudent.contactNumber) || newStudent.contactNumber <= 0) {
            toast.error(`ERROR: Invalid Contact Number`);
            return 'error';
        }
        return 'validated';
    };

    const handleDataRows = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // perform newStudent validation later

        const newDataRow: DataRowsProps = {
            name: newStudent.name,
            rollNumber: newStudent.rollNumber,
            grade: newStudent.grade,
            contactNumber: newStudent.contactNumber,
            gender: newStudent.gender,
            imgURL: newStudent.imgURL,
            shouldDelete: false
        };

        setDataRows(prev => [...prev, newDataRow]);
        setNewStudent({
            name: '',
            rollNumber: 721028,
            grade: 'A',
            contactNumber: 9800000000,
            gender: 'Male',
            imgURL: '',
            shouldDelete: false
        });
    }

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
                {...dataRow, shouldDelete: !allChecked}
            )
        ));
    };

    const handleDeletion = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedDataRows: DataRowsProps[] = dataRows.filter(dataRow => !dataRow.shouldDelete);
        setDataRows(updatedDataRows);
    };


    /* ---------------------------------------------------------------------------- */
    /*   L O G I C    F O R   H A N D L I N G    E X I S T I N G    S T U D E N T S */
    /* ---------------------------------------------------------------------------- */

   const getStudentProps = (rollNumber: number) => {

       return useMemo(() => {
           if (dataRows) {
               /*console.log('returning null from here');
               console.log(rollNumber);
               console.log(dataRows);*/
               return dataRows.find(dataRow => dataRow.rollNumber === rollNumber) ?? null;
           }
           /*console.log('returning null');*/
           return null;
       }, [rollNumber, dataRows]);
   };

        return {
            handleChange,
            handleStudentValidation,
            handleDataRows,
            allChecked,
            handleShouldDelete,
            handleShouldDeleteALL,
            handleDeletion,
            getStudentProps
        };
    };

export default useStudent;
