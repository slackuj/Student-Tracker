import './Table.css';
import {useStudentContext} from "../context/StudentContextProvider.tsx";

/*interface TableHeaderProps {
    headers: string[];
    handleShouldDeleteAll: () => void;
    allChecked: boolean;
}*/


const TableHeader = () => {
    const StudentContext = useStudentContext();
    const headers: string[] = ["Name", "Roll Number", "Grade", "Contact Number", "Gender"];

    return (
        <>
            <div className="grid-row header" >
        <div
        ><input
                        type="checkbox"
                        checked={StudentContext.allChecked}
                        onChange={StudentContext.handleShouldDeleteALL}
                    /></div>
            {headers.map(header => (
                    <div key={crypto.randomUUID()}>{header}</div>
            ))}
            </div>
        </>
    );
}

export default TableHeader;