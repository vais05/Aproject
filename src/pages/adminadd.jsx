import React from 'react';
function validateForm(event) {
        event.preventDefault(); // Prevent default form submission

        var fullName = document.getElementById("fullName").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var courses = document.getElementById("courses").value.trim();
        var batch = document.getElementById("batch").value.trim();

        if (fullName === "" || email === "" || phone === "" || courses === "" || batch === "") {
            alert("Please fill out all fields.");
            return false;
        }

        // Confirmation dialog handled outside of JSX
        var confirmed = window.confirm("Are you sure you want to add this student?");
        if (confirmed) {
            // Here you can perform any action you want after confirmation
            // For now, let's just log a message
            console.log("Student added successfully!");
        }

        return confirmed; // Return true if confirmed, false otherwise
    }

function AdminAbout() {
    // Function to handle the click event
    
    return (
        <div>
            <div className="container">
                <h1 className="form-title">Add Student</h1>
                <form id="addStudentForm" onSubmit={validateForm}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="courses">Courses:</label>
                        <select id="courses" name="courses" required>
                            <option value="">Select Course</option>
                            <option value="Abacus">Abacus</option>
                            <option value="Vedic Math">Vedic Math</option>
                            <option value="E Kids">E Kids</option>
                            <option value="Memory Technique">Memory Technique</option>
                            <option value="Cursive Writing">Cursive Writing</option>
                            <option value="Rubik Cube">Rubik Cube</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="batch">Batch:</label>
                        <input type="text" id="batch" name="batch" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <img src="images\REA_LOGO_Transparent (1).png" alt="Logo" className="logo" />
        </div>
    );
}

export default AdminAbout;
