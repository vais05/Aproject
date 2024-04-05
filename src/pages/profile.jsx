import React from 'react'

function profile(){
    return(
        <div>



<div className="side-bar">

   <div id="close-btn">
      <i className="fas fa-times"></i>
   </div>

   <div className="profile">
      <img src="images/pic-1.jpg" className="image" alt=""/>
      <h3 className="name">shaikh anas</h3>
      <p className="role">studen</p>
      <a href="/profile
      " className="btn">view profile</a>
   </div>

   <nav className="navbar">
      <a href="/
      "><i className="fas fa-home"></i><span>home</span></a>
      <a href="/about
      "><i className="fas fa-question"></i><span>about</span></a>
      <a href="/courses
      "><i className="fas fa-graduation-cap"></i><span>courses</span></a>
      <a href="/teachers
      "><i className="fas fa-chalkboard-user"></i><span>teachers</span></a>
      <a href="/contact
      "><i className="fas fa-headset"></i><span>contact us</span></a>
   </nav>

</div>

<section className="user-profile">

   <h1 className="heading">your profile</h1>

   <div className="info">

      <div className="user">
         <img src="images/pic-1.jpg" alt=""/>
         <h3>shaikh anas</h3>
         <p>student</p>
         <a href="/update
         " className="inline-btn">update profile</a>
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
                  <span>4</span>
                  <p>Courses opted</p>
               </div>
            </div>
            <a href="#" className="inline-btn">view liked</a>
         </div>
   
         <div className="box">
            <div className="flex">
               <i className="fas fa-comment"></i>
               <div>
                  <span>1</span>
                  <p>Courses completed</p>
               </div>
            </div>
            <a href="#" className="inline-btn">view comments</a>
         </div>
   
      </div>
   </div>

</section>

















</div>
    )
}

export default profile