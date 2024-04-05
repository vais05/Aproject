import React from 'react';

function SuperAdminAdd() {
    function validateForm() {
        var fullName = document.getElementById("fullName").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var courses = document.getElementById("courses").value.trim();
        var batch = document.getElementById("batch").value.trim();
        
        if (fullName === "" || email === "" || phone === "" || courses === "" || batch === "") {
           alert("Please fill out all fields.");
           return false;
        }
        
        // Assuming you're using a modern JavaScript environment or a library like React,
        // you can replace confirm with a custom modal or dialog component to confirm actions.
        
        // For example, using a custom modal component:
        showConfirmationModal("Are you sure you want to add this student?", function(result) {
            if (result) {
                // User confirmed, proceed with adding the student
                // Call a function to add the student here
            } else {
                // User canceled, do nothing or handle accordingly
            }
        });
        
        // Function to show a confirmation modal
        function showConfirmationModal(message, callback) {
            // This is a simplified example, in a real application,
            // you'd use a modal component or dialog library
            var result = window.confirm(message);
            callback(result);
        }
    }
    
    return(
        <div>
            
<div className="container">
   <h1 className="form-title">Add Student</h1>
   <form id="addStudentForm" onsubmit="return validateForm()">
      <div className="form-group">
         <label for="fullName">Full Name:</label>
         <input type="text" id="fullName" name="fullName" required/>
      </div>
      <div className="form-group">
         <label for="email">Email ID:</label>
         <input type="email" id="email" name="email" required/>
      </div>
      <div className="form-group">
         <label for="phone">Phone Number:</label>
         <input type="text" id="phone" name="phone" required/>
      </div>
      
      
      <div className="form-group">
         <button type="submit">Submit</button>
      </div>
   </form>
</div>

<img src="images\REA_LOGO_Transparent (1).png" alt="Logo" className="logo"/>

        </div>
    )
}

export default SuperAdminAdd;
