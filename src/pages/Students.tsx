import '../App.css'
import StudentTable from "../components/StudentTable.tsx";
import ActionBar from "../components/ActionBar.tsx";
//import SearchBar from "../components/SearchBar.tsx";
import 'react-toastify/dist/ReactToastify.css';

/*interface StudentsProps {
    dataRows: DataRowsProps[];
    setDataRows: React.Dispatch<React.SetStateAction<DataRowsProps[]>>;
}*/

const Students = () => {

    /*const {
        handleChange,
        handleStudentValidation,
        handleNewStudent,
        allChecked,
        handleShouldDelete,
        handleShouldDeleteALL,
        handleDeletion
    } = useStudent(dataRows, setDataRows);
*/


    /*const [searchTerm, setSearchTerm] = useState("");


    const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };*/


    /*const searchedDataRows = StudentContext.dataRows.filter(dataRow => (
        dataRow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dataRow.rollNumber.toString().includes(searchTerm.toLowerCase()) ||
        dataRow.contactNumber.toString().includes(searchTerm.toLowerCase()) ||
        dataRow.gender.toString().toLowerCase().includes(searchTerm.toLowerCase())
    ));
*/
    return (
        <>
            <ActionBar/>
            {/*<SearchBar
                handleSearchTerm={handleSearchTerm}
                searchTerm={searchTerm}

                I M P L E M E N T   A T   L A S T   U S I N G    U S E C O N T E X T ()

            />*/}
            <StudentTable/>
        </>
    );
};

export default Students;