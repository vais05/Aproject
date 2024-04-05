import React, { useState } from 'react';

function AdminProfile() {

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
    
       <nav className="navbar"> <a href="/adminabout"><i className="fas fa-home"></i><span>home</span></a>
        <a href="/adminAddStudent"><i className="fas fa-question"></i><span>Add/Remove Students</span></a>
        <a href="/adminuploadmaterial"><i className="fas fa-graduation-cap"></i><span>upload material</span></a>
       </nav>
    
    </div>
    
    <section className="user-profile">
    
       <h1 className="heading">your profile</h1>
    
       <div className="info">
    
          <div className="user">
             <img src="images/pic-1.jpg" alt=""/>
             <h3>Raj</h3>
             <p>Admin</p>
             <a href="/adminupdate" className="inline-btn">update profile</a>
          </div>
       
          <div className="box-container">
       
             <div className="box">
                <div className="flex">
                   <i className="fas fa-bookmark"></i>
                   <div>
                      <span>4</span>
                      <p>saved playlist</p>
                   </div>
                </div>
                <a href="#" className="inline-btn">view playlists</a>
             </div>
       
             <div className="box">
                <div className="flex">
                   <i className="fas fa-heart"></i>
                   <div>
                      <span>33</span>
                      <p>videos courses</p>
                   </div>
                </div>
                <a href="#" className="inline-btn">view student</a>
             </div>
       
             <div className="box">
                <div className="flex">
                   <i className="fas fa-comment"></i>
                   <div>
                      <span>12</span>
                      <p>videos comments</p>
                   </div>
                </div>
                <a href="#" className="inline-btn">view comments</a>
             </div>
       
          </div>
       </div>
    
    </section>
    
       
    </div>
  );
}

export default AdminProfile;
