import './Table.css';
import TableHeader from "./TableHeader.tsx";
import DataRows from "./TableDataRows.tsx";
import type {DataRowsProps} from "./TableDataRows.tsx";
//import DataRows from "./TableDataRows.tsx";

export const headers: string[] = ["Name", "Roll Number", "Grade", "Contact Number", "Gender"];

interface dataRowsProps {
    dataRows: DataRowsProps[];
}

const StudentTable = ({dataRows}: dataRowsProps) =>{
    return (
        <div className="grid-table">
            <TableHeader headers={headers} />
            {/*<DataRows row={}/>*/}
            <DataRows dataRows={dataRows} />
        </div>
    );
};

export default StudentTable;