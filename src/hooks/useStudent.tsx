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


    const [Student, setStudent] = useState<DataRowsProps>({
        id: '',
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

        setStudent(prev => ({
            ...prev,
            [name]: name === "rollNumber" || name === "contactNumber" ? Number(value) : value
        }));

    }

    const handleStudentValidation = (): string => {

        // check for duplicate roll-number
        const duplicateRoll = dataRows.some(dataRow => dataRow.rollNumber === Student.rollNumber);
        if (duplicateRoll) {
            toast.error(`ERROR: Student with roll number: ${Student.rollNumber} already exists`);
            return 'error';
        }

        // validate roll-number
        if (Student.rollNumber === undefined || isNaN(Student.rollNumber) || Student.rollNumber <= 0) {
            toast.error(`ERROR: Invalid Roll Number`);
            return 'error';
        }

        // validate contact-number
        if (Student.contactNumber === undefined || isNaN(Student.contactNumber) || Student.contactNumber <= 0) {
            toast.error(`ERROR: Invalid Contact Number`);
            return 'error';
        }
        return 'validated';
    };

    const handleNewStudent = () => {

        const newDataRow: DataRowsProps = {
            id: crypto.randomUUID(),// to skip any cached id values ---> consider flushing Student state variables when user clicks cancel on modal forms !!!
            name: Student.name,
            rollNumber: Student.rollNumber,
            grade: Student.grade,
            contactNumber: Student.contactNumber,
            gender: Student.gender,
            imgURL: Student.imgURL,
            shouldDelete: false
        };

        //setStudent( prev => ({...prev, id: crypto.randomUUID()}));

        setDataRows(prev => [...prev, newDataRow]);
        setStudent({
            id: '',
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

    const handleShouldDelete = (id: string) => {
        console.log(`preparing to delete user ${id}`);
        setDataRows(prev => prev.map(dataRow =>
            dataRow.id === id ? {...dataRow, shouldDelete: !dataRow.shouldDelete} : dataRow
        ));
    };

    const allChecked = dataRows.length > 0 ? dataRows.every(dataRow => dataRow.shouldDelete) : false;

    const handleShouldDeleteALL = () => {
        setDataRows(prev => prev.map(dataRow => (
                {...dataRow, shouldDelete: !allChecked}
            )
        ));
    };

    const handleDeletion = () => {

        console.log('handleDeletion called');
        const updatedDataRows: DataRowsProps[] = dataRows.filter(dataRow => !dataRow.shouldDelete);
        setDataRows(updatedDataRows);
    };

    const handleDeletionByID = (id: string) => {
        setDataRows(prev => prev.filter(student => student.id !== id));
        toast.success("Student removed successfully",{
            autoClose: 3000
        });
    };

    /* ---------------------------------------------------------------------------- */
    /*   L O G I C    F O R   H A N D L I N G    E X I S T I N G    S T U D E N T S */
    /* ---------------------------------------------------------------------------- */

   const getStudentProps = (id: string) => {

       return useMemo(() => {
           if (dataRows) {
               /*console.log('returning null from here');
               console.log(rollNumber);
               console.log(dataRows);*/
               return dataRows.find(dataRow => dataRow.id === id) ?? null;
           }
           /*console.log('returning null');*/
           return null;
       }, [id, dataRows]);
   };

    const handleUpdateValidation = (student: DataRowsProps): string => {

        // check for duplicate roll-number
        const duplicateRoll = dataRows.some(dataRow =>
            dataRow.rollNumber === student.rollNumber && dataRow.id !== student.id);
        if (duplicateRoll) {
            toast.error(`ERROR: Student with roll number: ${student.rollNumber} already exists`);
            return 'error';
        }

        // validate roll-number
        if (student.rollNumber === undefined || isNaN(student.rollNumber) || student.rollNumber <= 0) {
            toast.error(`ERROR: Invalid Roll Number`);
            return 'error';
        }

        // validate contact-number
        if (student.contactNumber === undefined || isNaN(student.contactNumber) || student.contactNumber <= 0) {
            toast.error(`ERROR: Invalid Contact Number`);
            return 'error';
        }
        return 'validated';
    };

    const setStudentProps = (student: DataRowsProps) => {

        // UPDATING STUDENTS VIA EDITMODAL
            if (dataRows) {
                setDataRows(prev => prev.map(dataRow =>
                    dataRow.id === student.id ? student : dataRow));
            }
    };

        return {
            handleChange,
            handleStudentValidation,
            handleNewStudent,
            allChecked,
            handleShouldDelete,
            handleShouldDeleteALL,
            handleDeletion,
            getStudentProps,
            setStudentProps,
            handleUpdateValidation,
            handleDeletionByID
        };
    };

export default useStudent;
