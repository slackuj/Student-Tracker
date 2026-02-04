import './App.css'
import StudentTable from "./assets/components/StudentTable.tsx";
import Header from "./assets/components/Header.tsx";

function App() {

  return (
      <div className="container">
          {/*<h1>Student Tracker</h1>
          <div className="searchBar">
              <input id="searchInput" type="text" placeholder="type to search" name="searchText"/>
          </div>*/}

          <Header title='Student Tracker'/>
          <StudentTable />

      </div>
          );
          }

          export default App;
