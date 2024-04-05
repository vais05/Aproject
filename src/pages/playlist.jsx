import React from 'react'

function contact(){
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

<section className="playlist-details">

   <h1 className="heading">playlist details</h1>

   <div className="row">

      <div className="column">
         <form action="" method="post" className="save-playlist">
            <button type="submit"><i className="far fa-bookmark"></i> <span>save playlist</span></button>
         </form>
   
         <div className="thumb">
            <img src="images/thumb-1.png" alt=""/>
            <span>10 videos</span>
         </div>
      </div>
      <div className="column">
         <div className="tutor">
            <img src="images/pic-2.jpg" alt=""/>
            <div>
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
   
         <div className="details">
            <h3>complete tutorial</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
            <a href="/teacher_profile" className="inline-btn">view profile</a>
         </div>
      </div>
   </div>

</section>

<section className="playlist-videos">

   <h1 className="heading">playlist videos</h1>

   <div className="box-container">

      <a className="box" href="/watch-video">
         <i className="fas fa-play"></i>
         <img src="images/post-1-1.png" alt=""/>
         <h3>Basic - B1, B2</h3>
      </a>

      <a className="box" href="/watch-video">
         <i className="fas fa-play"></i>
         <img src="images/post-1-2.png" alt=""/>
         <h3>Level 1 </h3>
      </a>

      <a className="box" href="/watch-video">
         <i className="fas fa-play"></i>
         <img src="images/post-1-3.png" alt=""/>
         <h3>Level 2</h3>
      </a>

      <a className="box" href="/watch-video">
         <i className="fas fa-play"></i>
         <img src="images/post-1-4.png" alt=""/>
         <h3>Level 3</h3>
      </a>

      <a className="box" href="/watch-video">
         <i className="fas fa-play"></i>
         <img src="images/post-1-5.png" alt=""/>
         <h3>Level 4</h3>
      </a>

      <a className="box" href="/watch-video">
         <i className="fas fa-play"></i>
         <img src="images/post-1-6.png" alt=""/>
         <h3>Level 5</h3>
      </a>

      <a className="box" href="/watch-video">
         <i className="fas fa-play"></i>
         <img src="images/post-1-6.png" alt=""/>
         <h3>Level 6</h3>
      </a>
   </div>

</section>














</div>
    )
}

export default contact;