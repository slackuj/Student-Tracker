import '../../App.css';
import { Outlet, useParams } from "react-router";
import StudentSideBar from "../../components/StudentSideBar.tsx";

const StudentProfileLayout = () => {
    const { rollNumber } = useParams();

    return (
        <>
            <StudentSideBar rollNumber={Number(rollNumber)} />
            <div className="main-content">
                <Outlet />
            </div>
        </>
    );
};

export default StudentProfileLayout;