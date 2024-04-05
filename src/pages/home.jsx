import React from 'react'

function home(){
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
      <a href="profile" className="btn">view profile</a>
   </div>

   <nav className="navbar">
      <a href="/"><i className="fas fa-home"></i><span>home</span></a>
      <a href="/about"><i className="fas fa-question"></i><span>about</span></a>
      <a href="/courses"><i className="fas fa-graduation-cap"></i><span>courses</span></a>
      <a href="/teachers"><i className="fas fa-chalkboard-user"></i><span>teachers</span></a>
      <a href="/contact"><i className="fas fa-headset"></i><span>contact us</span></a>
   </nav>

</div>

<section className="home-grid">

   <h1 className="heading">quick options</h1>

   <div className="box-container">

      <div className="box" >
        <div className="schedule">
            <h2 className="heading">Upcoming Schedule</h2>
            <div className="event">
                <h1>Cursive writing</h1>
                <h1>John deo</h1>
                <h1>4th March | 19:20</h1>
            </div>
            
        </div>
        
      </div>

      <div className="box">
   <h3 className="title">Top Categories</h3>
   <div className="flex">
      <a href="#"><i className="fas fa-calculator"></i><span>Arithmetic</span></a>
      <a href="#"><i className="fas fa-chart-line"></i><span>Activeness</span></a>
      <a href="#"><i className="fas fa-feather-alt"></i><span>Imagination</span></a>
      <a href="#"><i className="fas fa-brain"></i><span>Memory Power</span></a>
      <a href="#"><i className="fas fa-laptop-code"></i><span>Self-Confidence</span></a>
      <a href="#"><i className="fas fa-microchip"></i><span>Concentration</span></a>
      <a href="#"><i className="fas fa-tachometer-alt"></i><span>Creativity</span></a>
   </div>
</div>

      <div className="box">
   <h3 className="title">My Classes</h3>
   <div className="flex">
      <a href="#"><i className="fas fa-calculator"></i><span>Abacus</span></a>
      <a href="#"><i className="fas fa-square-root-alt"></i><span>Vedic Math</span></a>
      <a href="#"><i className="fas fa-pen-nib"></i><span>Cursive writing</span></a>
      <a href="#"><i className="fas fa-brain"></i><span>Memory techniques</span></a>
      <a href="#"><i className="fas fa-robot"></i><span>E-Kids</span></a>
   </div>
</div>


      <div className="meetclass">
        <h3 className="title">Start Class </h3>
        <p className="tutor">Begin Your Classes</p>
        <button id="startClassBtn">Start Class</button>
    </div>
    

   </div>

</section>



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
         <h3 className="title"> Abacus </h3>
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
         <a href="/playlist" className="inline-btn">view playlist</a>
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
         <a href="/playlist" className="inline-btn">view playlist</a>
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
         <a href="/playlist" className="inline-btn">view playlist</a>
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
         <a href="/playlist" className="inline-btn">view playlist</a>
      </div>

      

   </div>

   <div className="more-btn">
      <a href="/courses" className="inline-option-btn">view all courses</a>
   </div>

</section>



</div>
    )
}

export default home