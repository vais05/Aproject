import React from 'react'

function update(){
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
                    <h3>update profile</h3>
                    <p>update name</p>
                    <input type="text" name="name" placeholder="shaikh anas" maxLength="50" className="box" />
                    <p>update email</p>
                    <input type="email" name="email" placeholder="shaikh@gmail.com" maxLength="50" className="box" />
                    <p>previous password</p>
                    <input type="password" name="old_pass" placeholder="enter your old password" maxLength="20" className="box" />
                    <p>new password</p>
                    <input type="password" name="new_pass" placeholder="enter your new password" maxLength="20" className="box" />
                    <p>confirm password</p>
                    <input type="password" name="c_pass" placeholder="confirm your new password" maxLength="20" className="box" />
                    <p>update pic</p>
                    <input type="file" accept="image/*" className="box" />
                    <input type="submit" value="update profile" name="submit" className="btn" />
                </form>
            </section>


















   
</div>
    )
}

export default update