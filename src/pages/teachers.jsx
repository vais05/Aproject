import React from 'react'

function teacher(){
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
      <a href="/profile" className="btn">view profile</a>
   </div>

   <nav className="navbar">
      <a href="/"><i className="fas fa-home"></i><span>home</span></a>
      <a href="/about"><i className="fas fa-question"></i><span>about</span></a>
      <a href="/courses"><i className="fas fa-graduation-cap"></i><span>courses</span></a>
      <a href="/teachers"><i className="fas fa-chalkboard-user"></i><span>teachers</span></a>
      <a href="/contact"><i className="fas fa-headset"></i><span>contact us</span></a>
   </nav>

</div>

<section className="teachers">

   <h1 className="heading">expert teachers</h1>

   <form action="" method="post" className="search-tutor">
      <input type="text" name="search_box" placeholder="search tutors..." required maxlength="100"/>
      <button type="submit" className="fas fa-search" name="search_tutor"></button>
   </form>

   <div className="box-container">

      

      <div className="box">
         <div className="tutor">
            <img src="images/pic-2.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>Abacus Teacher</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <a href="/teacher_profile" className="inline-btn">view profile</a>
      </div>

      <div className="box">
         <div className="tutor">
            <img src="images/pic-3.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>Vedic Math Teacher</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <a href="/teacher_profile" className="inline-btn">view profile</a>
      </div>

      <div className="box">
         <div className="tutor">
            <img src="images/pic-4.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>Memory techniques Teacher</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <a href="/teacher_profile" className="inline-btn">view profile</a>
      </div>

      <div className="box">
         <div className="tutor">
            <img src="images/pic-5.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>E-Kids Teacher</span>
            </div>
         </div>
         <p>total playlists : <span>4</span></p>
         <p>total videos : <span>18</span></p>
         <a href="/teacher_profile" className="inline-btn">view profile</a>
      </div>


   </div>

</section>
















   
</div>
    )
}

export default teacher