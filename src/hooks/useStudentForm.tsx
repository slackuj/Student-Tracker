import React, {useState} from "react";
import type {DataRowsProps} from "../components/TableDataRows.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const useStudentForm = (dataRows: DataRowsProps[],setDataRows:  React.Dispatch<React.SetStateAction<DataRowsProps[]>>) => {


    /* ---------------- LIFTING STATE UP ---------------------------- */
    /* lifting state up from <TableDataRows> and <ActionBar>          */
    /*        BECAUSE MODAL ELEMENTS IN <ActionBar>                   */
    /* needs to update data-rows in <TableDataRows> !!!               */
    /*                    A    N   D                                  */
    /*                   <TableDataRows>                              */
    /*                needs to use the states !!!                     */


    const [form, setForm] = useState<DataRowsProps>({
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

        setForm(prev => ({
            ...prev,
            [name]: name === "rollNumber" || name === "contactNumber" ? Number(value) : value
        }));

    }

    const handleStudentValidation = (): string => {

        // check for duplicate roll-number
        const duplicateRoll = dataRows.some(dataRow => dataRow.rollNumber === form.rollNumber);
        if (duplicateRoll) {
            toast.error(`ERROR: Student with roll number: ${form.rollNumber} already exists`);
            return 'error';
        }

        // validate roll-number
        if (form.rollNumber === undefined || isNaN(form.rollNumber) || form.rollNumber <= 0) {
            toast.error(`ERROR: Invalid Roll Number`);
            return 'error';
        }

        // validate contact-number
        if (form.contactNumber === undefined || isNaN(form.contactNumber) || form.contactNumber <= 0) {
            toast.error(`ERROR: Invalid Contact Number`);
            return 'error';
        }
        return 'validated';
    };

    const handleDataRows = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // perform form validation later

        const newDataRow: DataRowsProps = {
            name: form.name,
            rollNumber: form.rollNumber,
            grade: form.grade,
            contactNumber: form.contactNumber,
            gender: form.gender,
            imgURL: form.imgURL,
            shouldDelete: false
        };

        setDataRows(prev => [...prev, newDataRow]);
        setForm({
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


        return {
            handleChange,
            handleStudentValidation,
            handleDataRows,
            allChecked,
            handleShouldDelete,
            handleShouldDeleteALL,
            handleDeletion
        };
    };

export default useStudentForm;
