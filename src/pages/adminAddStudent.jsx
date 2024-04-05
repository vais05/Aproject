import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function AdminAddStudent() {
    // Function to handle the click event
    function removeStudent(rowId) {
        var row = document.getElementById(rowId);
        row.parentNode.removeChild(row);
    }

    function confirmRemove(rowId) {
        if (window.confirm("Are you sure you want to remove this student?")) {
            removeStudent(rowId);
        }
    }

    return (
        <div>
            <header className="header">
                <section className="flex">
                    <div className="profile">
                        <img src="images/pic-1.jpg" className="image" alt=""/>
                        <h3 className="name">Raj</h3>
                        <p className="role">Admin</p>
                        <Link to="/adminprofile" className="btn">view profile</Link> {/* Use Link instead of anchor tag */}
                        <div className="flex-btn">
                            <Link to="/adminlogin" className="option-btn">login</Link> {/* Use Link instead of anchor tag */}
                            <Link to="/adminregister" className="option-btn">register</Link> {/* Use Link instead of anchor tag */}
                        </div>
                    </div>
                </section>
            </header>

            <div className="side-bar">
                <div id="close-btn">
                    <i className="fas fa-times"></i>
                </div>
                <div className="profile">
                    <img src="images/pic-1.jpg" className="image" alt=""/>
                    <h3 className="name">Raj</h3>
                    <p className="role">Admin</p>
                    <Link to="/adminprofile" className="btn">view profile</Link> {/* Use Link instead of anchor tag */}
                </div>
                <nav className="navbar">
                    <Link to="/adminabout"><i className="fas fa-home"></i><span>home</span></Link> {/* Use Link instead of anchor tag */}
                    <Link to="/adminAddStudent"><i className="fas fa-question"></i><span>Add/Remove Students</span></Link> {/* Use Link instead of anchor tag */}
                    <Link to="/adminuploadmaterial"><i className="fas fa-graduation-cap"></i><span>upload material</span></Link> {/* Use Link instead of anchor tag */}
                </nav>
            </div>

            <div className="container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <tr style={{ backgroundColor: '#8E44AD' }}>
                        <th style={{ padding: '10px', border: '1px solid #e8e6e6' }}>Full Name</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Phone Number</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mail ID</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Course</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Batch Name</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
                    </tr>
                    <tr id="student1">
                        <td style={{ padding: '10px', border: '1px solid #ddd', color:'black'}}>Ravi</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color:'black' }}>1234567890</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color:'black' }}>ravi@example.com</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color:'black' }}>Rubik Cube</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color:'black' }}>Batch A</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color:'black' }}>
                            <button className="remove-btn" onClick={() => confirmRemove('student1')}>Remove</button>
                        </td>
                    </tr>
                </table>
            </div>
            
            <Link to="/adminadd"> {/* Use Link to navigate to admin add page */}
                <button className="add-student-btn">Add Student</button>
            </Link>
        </div>
    );
}

export default AdminAddStudent;
