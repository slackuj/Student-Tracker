import './Table.css';
import TableHeader from "./TableHeader.tsx";
import DataRows from "./TableDataRows.tsx";
import type {DataRowsProps} from "./TableDataRows.tsx";
//import DataRows from "./TableDataRows.tsx";

export const headers: string[] = ["Name", "Roll Number", "Grade", "Contact Number", "Gender"];

interface dataRowsProps {
    dataRows: DataRowsProps[];
    handleShouldDelete: (id: string) => void;
    handleShouldDeleteAll: () => void;
    allChecked: boolean;
}

const StudentTable = (props: dataRowsProps) =>{
    return (
        <div className="grid-table">
            <TableHeader
                headers={headers}
                handleShouldDeleteAll={props.handleShouldDeleteAll}
                allChecked={props.allChecked}
            />
            <DataRows
                dataRows={props.dataRows}
                handleShouldDelete={props.handleShouldDelete}
            />
        </div>
    );
};

export default StudentTable;