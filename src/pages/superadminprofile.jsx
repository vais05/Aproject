import React from 'react'

function SuperAdminProfile(){
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

   <nav className="navbar"> <a href="/superadminabout"><i className="fas fa-home"></i><span>home</span></a>
    <a href="/superadminAddStudent"><i className="fa fa-plus"></i><span>Add/Remove Students</span></a>
    <a href="/superadminAddadmin"><i className="fa fa-plus"></i><span>Add/Remove Admin</span></a>
    <a href="/superadminuploadmaterial"><i className="fa-solid fa-upload"></i><span>upload material</span></a>
   </nav>

</div>

<section className="user-profile">

   <h1 className="heading">your profile</h1>

   <div className="info">

      <div className="user">
         <img src="images/pic-1.jpg" alt=""/>
         <h3>Ram</h3>
         <p>Super Admin</p>
         <a href="/superadminupdate" className="inline-btn">update profile</a>
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
                  <p>videos liked</p>
               </div>
            </div>
            <a href="#" className="inline-btn">view liked</a>
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
    )
}

export default SuperAdminProfile
