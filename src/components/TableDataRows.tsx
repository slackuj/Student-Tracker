import './TableDataRows.css';
import './Table.css';
import Avatar from "./Avatar.tsx";
import {NavLink} from "react-router";

export type Gender = "Male" | "Female" | "Other";

export interface DataRowsProps {
    id: string;
    name: string;
    rollNumber: number;
    grade: string;
    contactNumber: number;
    gender: Gender;
    imgURL?: string;
    shouldDelete: boolean;
}
interface dataRowsProps {
    dataRows: DataRowsProps[];
    handleShouldDelete: (id: string) => void;
}


const DataRows = ({dataRows, handleShouldDelete}: dataRowsProps) => {

    return (
        <>
            {dataRows.map(dataRow => (
                <div className="grid-row" key={dataRow.id}>
                    <div><input
                        type="checkbox"
                        checked={dataRow.shouldDelete}
                        onChange={() => handleShouldDelete(dataRow.id)}
                    /></div>
                    {/* Second Column: Avatar + Name */}
                    <div className="avatar-container">
                    <NavLink to={`/student/${dataRow.id}`} className="student-profile">
                        <Avatar student={dataRow}/>
                        <span className="user-name">{dataRow.name}</span>
                    </NavLink>
                    </div>

                    {/* Remaining Columns */}
                    <div>{dataRow.rollNumber}</div>
                    <div>{dataRow.grade}</div>
                    <div>{dataRow.contactNumber}</div>
                    <div>{dataRow.gender}</div>
                </div>
            ))}
        </>
    );
};

export default DataRows;