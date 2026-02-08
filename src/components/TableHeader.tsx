import './Table.css';

interface TableHeaderProps {
    headers: string[];
    handleShouldDeleteAll: () => void;
    allChecked: boolean;
}

const TableHeader = (props: TableHeaderProps) => {
    if (props.headers.length === 0){
        return (<></>);
    }

    return (
        <>
            <div className="grid-row header" >
        <div><input
                        type="checkbox"
                        checked={props.allChecked}
                        onChange={props.handleShouldDeleteAll}
                    /></div>
            {props.headers.map(header => (
                    <div key={crypto.randomUUID()}>{header}</div>
            ))}
            </div>
        </>
    );
}

export default TableHeader;