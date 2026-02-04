import './Table.css';
import TableHeader from "./TableHeader.tsx";
import DataRows from "./TableDataRows.tsx";
//import DataRows from "./TableDataRows.tsx";

export const headers: string[] = ["Name", "Roll Number", "Grade", "Contact Number", "Gender"];

const StudentTable = () =>{
    return (
        <div className="grid-table">
            <TableHeader headers={headers} />
            {/*<DataRows row={}/>*/}
            <DataRows/>
        </div>
    );
};

export default StudentTable;