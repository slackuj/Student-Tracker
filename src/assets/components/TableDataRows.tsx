//import { headers } from './StudentTable';
import './Table.css';
import {useState} from "react";

interface DataRow {
    row: string[];
}

const INITIAL_DATA: DataRow[] = [
    {row: ["Rabin Pandit", "721036", "A", "9812345678", "Male"]},
    {row: ["Rabin Pandit", "721037", "A", "9812345678", "Male"]},
    {row: ["Rabin Pandit", "721038", "A", "9812345678", "Male"]},
    {row: ["Rabin Pandit", "721039", "A", "9812345678", "Male"]}
];
/*const DataRows = ({ row }: DataRow) => {
    if (headers.length !== row.length) {
        return (<></>);
    }

    return (
        <div className="grid-row" key={row[1]}>
            {row.map(rw => <div>{rw}</div>)}
        </div>
    );
};*/

const DataRows = () => {
    const [dROW, setRow] = useState<DataRow[]>(INITIAL_DATA);

    return (

        dROW.map(drow => (
            <div className="grid-row" key={drow.row[1]}>
                <div>{drow.row[0]}</div>
                <div>{drow.row[1]}</div>
                <div>{drow.row[2]}</div>
                <div>{drow.row[3]}</div>
                <div>{drow.row[4]}</div>
            </div>
        ))
    );
};
    /*return (
            {dROW.map(rw => (
                    <div className="grid-row" key={rw[1]}>
                        <div>{rw}</div>
                    </div>
                ))}
);
};*/

export default DataRows;