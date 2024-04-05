import React from 'react'

function courses(){
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
      <a href="/"><i className="fas fa-home"></i><span>home</span></a>
      <a href="/about"><i className="fas fa-question"></i><span>about</span></a>
      <a href="/courses"><i className="fas fa-graduation-cap"></i><span>courses</span></a>
      <a href="/teachers"><i className="fas fa-chalkboard-user"></i><span>teachers</span></a>
      <a href="/contact"><i className="fas fa-headset"></i><span>contact us</span></a>
   </nav>

</div>

<section className="courses">

   <h1 className="heading">our courses</h1>

   <div className="box-container">

      <div className="box">
         <div className="tutor">
            <img src="images/pic-2.jpg" alt=""/>
            <div className="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div className="thumb">
            <img src="images/thumb-1.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Junior Abacus</h3>
         <a href="/playlist" className="inline-btn">view playlist</a>
      </div>

      <div className="box">
         <div className="tutor">
            <img src="images/pic-3.jpg" alt=""/>
            <div className="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div className="thumb">
            <img src="images/thumb-2.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Vedic Math</h3>
         <a href="/playlist
         " className="inline-btn">view playlist</a>
      </div>

      <div className="box">
         <div className="tutor">
            <img src="images/pic-4.jpg" alt=""/>
            <div className="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div className="thumb">
            <img src="images/thumb-3.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Cursive writing</h3>
         <a href="/playlist
         " className="inline-btn">view playlist</a>
      </div>

      <div className="box">
         <div className="tutor">
            <img src="images/pic-5.jpg" alt=""/>
            <div className="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div className="thumb">
            <img src="images/thumb-4.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">Memory techniques</h3>
         <a href="/playlist
         " className="inline-btn">view playlist</a>
      </div>

      <div className="box">
         <div className="tutor">
            <img src="images/pic-6.jpg" alt=""/>
            <div className="info">
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
         <div className="thumb">
            <img src="images/thumb-5.png" alt=""/>
            <span>10 videos</span>
         </div>
         <h3 className="title">E-Kids</h3>
         <a href="/playlist
         " className="inline-btn">view playlist</a>
      </div>

      

      
      

   </div>

</section>

















   
</div>
    )
}

export default courses