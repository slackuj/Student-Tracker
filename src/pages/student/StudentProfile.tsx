import '../../App.css'
import './StudentProfile.css';
import 'react-toastify/dist/ReactToastify.css';
import StudentActionBar from "../../components/StudentActionBar.tsx";
import StudentSideBar from "../../components/StudentSideBar.tsx";

const StudentProfile = () => {

  return (
      <>
          <StudentSideBar/>
          <div className="main-content">
              <StudentActionBar/>
              <div>
                  <div className="profile-container">
                      <nav className="profile-nav">
                          Overview
                      </nav>
                      <div className="profile-content">
                          <h2>Basic info</h2>
                          <div className="user-info-section">
                              <div className="user-avatar">
                                  <div className="avatar-circle">RB</div>
                              </div>
                              <div className="user-details">
                                  <h1>Rabin Pandit</h1>
                                  <p className="email">rb@gmail.com</p>
                              </div>
                          </div>

                          <hr/>

                          <div className="user-details-grid">
                              <div className="grid-item">
                                  <div className="label">Roll Number</div>
                                  <div className="value">Science</div>
                              </div>
                              <div className="grid-item">
                                  <div className="label">Grade</div>
                                  <div className="value">B</div>
                              </div>
                              <div className="grid-item">
                                  <div className="label">Contact Number</div>
                                  <div className="value-with-icon">
                                      <span className="value">721036</span>
                                  </div>
                              </div>
                              <div className="grid-item">
                                  <div className="label">Gender</div>
                                  <div className="value">Male</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
          );
          };

          export default StudentProfile;
