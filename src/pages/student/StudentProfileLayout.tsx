import '../../App.css';
import { Outlet, useParams } from "react-router";
import StudentSideBar from "../../components/StudentSideBar.tsx";

const StudentProfileLayout = () => {
    const { id } = useParams();

    if (!id){
        return <div>No student not found.</div>;
    }
    return (
        <>
            <StudentSideBar id={id} />
            <div className="main-content">
                <Outlet />
            </div>
        </>
    );
};

export default StudentProfileLayout;