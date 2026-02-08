import './Table.css';
import TableHeader from "./TableHeader.tsx";
import DataRows from "./TableDataRows.tsx";
import type {DataRowsProps} from "./TableDataRows.tsx";
//import DataRows from "./TableDataRows.tsx";

export const headers: string[] = ["Name", "Roll Number", "Grade", "Contact Number", "Gender"];

interface dataRowsProps {
    dataRows: DataRowsProps[];
    handleShouldDelete: (rollNumber: number) => void;
    handleShouldDeleteAll: () => void;
    allChecked: boolean;
}

const StudentTable = ({
                          dataRows,
                          handleShouldDelete,
                          handleShouldDeleteAll,
                          allChecked
                      }: dataRowsProps) =>{
    return (
        <div className="grid-table">
            <TableHeader
                headers={headers}
                handleShouldDeleteAll={handleShouldDeleteAll}
                allChecked={allChecked}
            />
            <DataRows
                dataRows={dataRows}
                handleShouldDelete={handleShouldDelete}
            />
        </div>
    );
};

export default StudentTable;