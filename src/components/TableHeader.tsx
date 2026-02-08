import './Table.css';

interface TableHeaderProps {
    headers: string[];
    handleShouldDeleteAll: () => void;
    allChecked: boolean;
}

const TableHeader = ({
                         headers,
                         handleShouldDeleteAll,
                         allChecked
                     }: TableHeaderProps) => {
    if (headers.length === 0){
        return (<></>);
    }

    return (
        <>
            <div className="grid-row header" >
        <div><input
                        type="checkbox"
                        checked={allChecked}
                        onChange={handleShouldDeleteAll}
                    /></div>
            {headers.map(header => (
                    <div key={crypto.randomUUID()}>{header}</div>
            ))}
            </div>
        </>
    );
}

export default TableHeader;