import './Table.css';
import TableHeader from "./TableHeader.tsx";
import DataRows from "./TableDataRows.tsx";


/*interface dataRowsProps {
    dataRows: DataRowsProps[];
    handleShouldDelete: (id: string) => void;
    handleShouldDeleteAll: () => void;
    allChecked: boolean;
}*/

const StudentTable = () =>{
    return (
        <div className="grid-table">
            <TableHeader/>
            <DataRows/>
        </div>
    );
};

export default StudentTable;