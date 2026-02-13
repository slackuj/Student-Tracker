import './App.css'
import StudentTable from "./components/StudentTable.tsx";
import Header from "./components/Header.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from "./components/SideBar.tsx";
import {Route, Routes} from "react-router";
import Students from "./pages/Students.tsx";
import StudentProfile from "./pages/student/StudentProfile.tsx";
import useStudentForm from "./hooks/useStudentForm.tsx";
import useStudents from "./hooks/useStudents.tsx";

const App = () => {

    const {dataRows, setDataRows} = useStudents();
    const {
        allChecked,
        handleShouldDelete,
        handleShouldDeleteALL,
    } = useStudentForm(dataRows, setDataRows);

  return (
      <>
          <div className="topbar">
              <Header title='Student Tracker'/>
          </div>
          <div className="container">

                 <Routes>
                      <Route index element={
                          <>
                          <SideBar/>
                          <div className="main-content">
              <StudentTable
                  dataRows={dataRows}
                  handleShouldDelete={handleShouldDelete}
                  handleShouldDeleteAll={handleShouldDeleteALL}
                  allChecked={allChecked}
              />
                          </div>
                          </>
                      }/>
                      <Route path="/students" element={
                          <>
                          <SideBar/>
                          <div className="main-content">
                              <Students
                                  dataRows={dataRows}
                                  setDataRows={setDataRows}
                              />
                          </div>
                          </>
                      }/>
                      <Route path="/student/profile" element={<StudentProfile/>}/>
                      <Route path="/student/assignments" element={<StudentProfile/>}/>
                  </Routes>


          </div>
          <ToastContainer
                  position="bottom-right"
                  autoClose={false}
                  hideProgressBar={false}
                  theme="colored"
              />
      </>
  );
};

export default App;
