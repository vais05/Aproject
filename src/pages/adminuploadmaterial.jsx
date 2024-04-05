import React, { useState } from 'react';

function AdminUploadMaterial() {

  return (
    <div>

<header className="header">
   
   <section className="flex">


      <div className="profile">
         <img src="images/pic-1.jpg" className="image" alt=""/>
         <h3 className="name">Raj</h3>
         <p className="role">Admin</p>
         <a href="/adminprofile" className="btn">view profile</a>
         <div className="flex-btn">
            <a href="/adminlogin" className="option-btn">login</a>
            <a href="/adminregister" className="option-btn">register</a>
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
      <a href="/adminprofile" className="btn">view profile</a>
   </div>

   <nav className="navbar">
      <a href="/adminabout"><i className="fas fa-home"></i><span>home</span></a>
      <a href="/adminAddStudent"><i className="fas fa-question"></i><span>Add/Remove Students</span></a>
      <a href="/adminuploadmaterial"><i className="fas fa-graduation-cap"></i><span>upload material</span></a>
      
   </nav>

</div>




<section className="uploads">

    <div className="container">
        <div className="file-upload">
          <input type="file" id="fileInput" accept=".pdf,.doc,.docx,.txt"/>
          <label for="fileInput">Upload File</label>
        </div>
      
        <ul className="file-list">
          <li><a href="#">ExampleFile1.pdf</a></li>
          <li><a href="#">ExampleFile2.docx</a></li>
        </ul>
      </div>
      

</section>




</div>
  );
}

export default AdminUploadMaterial;
