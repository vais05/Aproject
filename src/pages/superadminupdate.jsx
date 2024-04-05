import React from 'react'

function SuperAdminUpdate(){
    return(
        <div>
            
<header className="header">
   
   <section className="flex">

      <a href="/superadminhome" className="logo">REC</a>

      <form action="/superadminsearch" method="post" className="search-form">
         <input type="text" name="search_box" required placeholder="search courses..." maxlength="100"/>
         <button type="submit" className="fas fa-search"></button>
      </form>

      <div className="icons">
         <div id="menu-btn" className="fas fa-bars"></div>
         <div id="search-btn" className="fas fa-search"></div>
         <div id="user-btn" className="fas fa-user"></div>
         <div id="toggle-btn" className="fas fa-sun"></div>
      </div>

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
    <a href="/superadminadminabout"><i className="fas fa-home"></i><span>home</span></a>
    <a href="/superadminAddStudent"><i className="fa fa-plus"></i><span>Add/Remove Students</span></a>
    <a href="/superadminAddadmin"><i className="fa fa-plus"></i><span>Add/Remove Admin</span></a>
    <a href="/superadminuploadmaterial"><i className="fa-solid fa-upload"></i><span>upload material</span></a>
    
   </nav>

</div>

<section className="form-container">
      <form action="" method="post" encType="multipart/form-data">
        <h3>update profile</h3>
        <p>update name</p>
        <input type="text" name="name" placeholder="Ram" maxLength="50" className="box" />
        <p>update email</p>
        <input type="email" name="email" placeholder="ram@gmail.com" maxLength="50" className="box" />
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

export default SuperAdminUpdate
