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
            <div className="grid-row header" key={crypto.randomUUID()}>
        <div><input
                        type="checkbox"
                        checked={allChecked}
                        onChange={handleShouldDeleteAll}
                    /></div>
            {headers.map(header => (
                    <div>{header}</div>
            ))}
            </div>
        </>
    );
}

export default TableHeader;