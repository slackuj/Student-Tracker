import './TableDataRows.css';
import './Table.css';
import {useState} from "react";
import Avatar from "./Avatar.tsx";

export type Gender = "Male" | "Female" | "Other";

export interface DataRowsProps {
    name: string;
    rollNumber: number;
    grade: string;
    contactNumber: number;
    gender: Gender;
    imgURL?: string;
}
interface dataRowsProps {
    dataRows: DataRowsProps[];
}


const DataRows = ({dataRows}: dataRowsProps) => {

    return (
        <>
            {dataRows.map(dataRow => (
                <div className="grid-row" key={dataRow.rollNumber}>
                    <div><input type="checkbox"/></div>
                    {/* Column 1: Avatar + Name */}
                    <div className="avatar-container">
                        <Avatar student={dataRow}/>
                        {/*<img
                            className="avatar"
                            src={profileMale}
                            alt="" /* Decorative element only! /
                        />*/}
                        <span className="user-name">{dataRow.name}</span>
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
    /*return (
            {dataRows.map(rw => (
                    <div className="grid-row" key={rw[1]}>
                        <div>{rw}</div>
                    </div>
                ))}
);
};*/

export default DataRows;