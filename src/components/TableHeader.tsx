import './Table.css';

interface TableHeaderProps {
    headers: string[];
}

const TableHeader = ({headers}: TableHeaderProps) => {
    if (headers.length === 0){
        return (<></>);
    }

    return (
        <div className="grid-row header">
            {headers.map(header => <div>{header}</div>)}
        </div>
    );
}

export default TableHeader;