import {useEffect, useState} from "react";
import type {DataRowsProps} from "../components/TableDataRows.tsx";
import 'react-toastify/dist/ReactToastify.css';

/*            H A N D L E    I N I T I A L I Z A T I O N          */

const INITIALIZE_DATA_ROWS = (): DataRowsProps[] =>{

        try {
            console.log('retrieving data from localStorage');
            const dataRows = localStorage.getItem("dataRows");
            return dataRows ? JSON.parse(dataRows) : [];
        } catch (e) {
            console.error(e);
            return([]);
        }
}


const useStudents = () => {


    /* ---------------- LIFTING STATE UP ---------------------------- */
    /* lifting state up from <TableDataRows> and <ActionBar>          */
    /*        BECAUSE MODAL ELEMENTS IN <ActionBar>                   */
    /* needs to update data-rows in <TableDataRows> !!!               */
    /*                    A    N   D                                  */
    /*                   <TableDataRows>                              */
    /*                needs to use the states !!!                     */


    const [dataRows, setDataRows] = useState<DataRowsProps[]>(INITIALIZE_DATA_ROWS);

    useEffect(() => {
        // Save to local storage
        localStorage.setItem("dataRows", JSON.stringify(dataRows));
    }, [dataRows]);

  return {dataRows, setDataRows};
};

export default useStudents;
