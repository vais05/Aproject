import React, { useState } from 'react';

function SuperAdminAbout() {
    const [showConfirmation, setShowConfirmation] = useState(false);

    function confirmAction() {
        setShowConfirmation(true);
    }

    function handleConfirm() {
        // Handle confirmed action here
        setShowConfirmation(false);
    }

    function handleCancel() {
        // Handle canceled action here
        setShowConfirmation(false);
    }
    // eslint-disable-next-line no-restricted-globals

    return(
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
      <a href="/superadminabout"><i className="fas fa-home"></i><span>home</span></a>
      <a href="/superadminAddStudent"><i className="fa fa-plus"></i><span>Add/Remove Students</span></a>
      <a href="/superadminAddadmin"><i className="fa fa-plus"></i><span>Add/Remove Admin</span></a>
      <a href="/superadminuploadmaterial"><i className="fa-solid fa-upload"></i><span>upload material</span></a>
      
   </nav>

</div>

<section className="uploads">
                <div className="container">
                    <div className="file-upload">
                        <input type="file" id="fileInput" accept=".pdf,.doc,.docx,.txt"/>
                        <label htmlFor="fileInput">Upload File</label>
                    </div>
                    
                    <ul className="file-list">
                        <li><a href="#">ExampleFile1.pdf</a></li>
                        <li><a href="#">ExampleFile2.docx</a></li>
                    </ul>
                </div>
            </section>

            {/* Confirmation modal */}
            {showConfirmation && (
                <div className="confirmation-modal">
                    <p>Are you sure you want to perform this action?</p>
                    <button onClick={handleConfirm}>Yes</button>
                    <button onClick={handleCancel}>No</button>
                </div>
            )}
        </div>
    );
}

export default SuperAdminAbout;
