import React from 'react';

function SuperAdminAddAdmin() {
    function openAddStudentForm() {
        window.location.href = '/superadminadd';
    }

    function removeStudent(rowId) {
        var row = document.getElementById(rowId);
        row.parentNode.removeChild(row);
    }

    function confirmRemove(rowId) {
        if (window.confirm("Are you sure you want to remove this Admin?")) {
            removeStudent(rowId);
        }
    }

    function confirmSuperAdmin(studentId) {
        // Instead of using confirm, you can use a modal or dialog component for confirmation.
        // For simplicity, let's just log the confirmation message.
        console.log("Confirmation for granting super admin privileges to student with ID:", studentId);
        // Perform further actions as needed
    }
    return (
        <div>
            <header className="header">
                <section className="flex">
                    
                    <div className="profile">
                        <img src="images/pic-1.jpg" className="image" alt=""/>
                        <h3 className="name">Ram</h3>
                        <p className="role">Super Admin</p>
                        <a href="/superadminprofile" className="btn">view profile</a>
                        <div className="flex-btn">
                            <a href="/superadminlogin" className="option-btn">login</a>
                            <a href="/superadminregister" className="option-btn">register</a>
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
                    <h3 className="name">Ram</h3>
                    <p className="role">Super Admin</p>
                    <a href="/superadminprofile" className="btn">view profile</a>
                </div>
                <nav className="navbar">
                    <a href="/superadminadminabout"><i className="fas fa-home"></i><span>home</span></a>
                    <a href="/superadminAddStudent"><i className="fa fa-plus"></i><span>Add/Remove Students</span></a>
                    <a href="/superadminAddadmin"><i className="fa fa-plus"></i><span>Add/Remove Admin</span></a>
                    <a href="/superadminuploadmaterial"><i className="fa-solid fa-upload"></i><span>upload material</span></a>
                </nav>
            </div>

            <div className="container">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#8E44AD' }}>
                            <th style={{ padding: '10px', border: '1px solid #e8e6e6' }}>Full Name</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Phone Number</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mail ID</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>addStudentForm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="student1">
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Ravi</td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>1234567890</td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>ravi@example.com</td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                <button className="remove-btn" onClick={() => confirmRemove('student1')}>Remove</button>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                <button className="super-admin-btn" onClick={() => confirmSuperAdmin('student1')}>Super Admin</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className="add-student-btn" onClick={openAddStudentForm}>Add Admin</button>
            </div>
        </div>
    );
}
export default SuperAdminAddAdmin
