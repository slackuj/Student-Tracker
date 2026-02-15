import './App.css'
import StudentTable from "./components/StudentTable.tsx";
import Header from "./components/Header.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from "./components/SideBar.tsx";
import {Route, Routes} from "react-router";
import Students from "./pages/Students.tsx";
import StudentProfile from "./pages/student/StudentProfile.tsx";
import useStudent from "./hooks/useStudent.tsx";
import useStudents from "./hooks/useStudents.tsx";
import Assignments from "./pages/student/Assignments.tsx";
import StudentProfileLayout from "./pages/student/StudentProfileLayout.tsx";

const App = () => {

    const {dataRows, setDataRows} = useStudents();
    const {
        allChecked,
        handleShouldDelete,
        handleShouldDeleteALL,
        handleDeletion,
        getStudentProps,
        setStudentProps,
        handleUpdateValidation,
        handleDeletionByID
    } = useStudent(dataRows, setDataRows);

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
                      <Route path="/student/:id" element={<StudentProfileLayout/>}>
                          <Route index element={<StudentProfile
                          getStudentProps={getStudentProps}
                          setStudentProps={setStudentProps}
                          handleUpdateValidation={handleUpdateValidation}
                          handleDeletion={handleDeletion}
                          handleShouldDelete={handleDeletionByID}
                      />}/>
                      <Route path="assignments" element={<Assignments/>}/>
                      </Route>
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
