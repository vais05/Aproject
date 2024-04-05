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

<section className="form-container">

                <form action="" method="post" encType="multipart/form-data">
                    <h3>register now</h3>
                    <p>your name <span>*</span></p>
                    <input type="text" name="name" placeholder="enter your name" required maxLength="50" className="box" />
                    <p>your email <span>*</span></p>
                    <input type="email" name="email" placeholder="enter your email" required maxLength="50" className="box" />
                    <p>your password <span>*</span></p>
                    <input type="password" name="pass" placeholder="enter your password" required maxLength="20" className="box" />
                    <p>confirm password <span>*</span></p>
                    <input type="password" name="c_pass" placeholder="confirm your password" required maxLength="20" className="box" />
                    <p>select profile <span>*</span></p>
                    <input type="file" name="profile_image" accept="image/*" required className="box" />
                    <input type="submit" value="register new" name="submit" className="btn" />
                </form>

            </section>

















</div>
    )
}
export default contact;