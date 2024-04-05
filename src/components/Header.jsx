import React from 'react'

function Header(){
    return(
        <header className="header">
   
   <section className="flex">

      <a href="/" className="logo">RES</a>

      <form action="search" method="post" className="search-form">
         <input type="text" name="search_box" required placeholder="search courses..." maxlength="100"/>
         <button type="submit" className="fas fa-search"></button>
      </form>

      <div className="icons">
         <div id="search-btn" className="fas fa-search"></div>
         <div  id="user-btn" className="fas fa-user"></div>
      </div>

      <div className="profile">
         <img src="images/pic-1.jpg" className="image" alt=""/>
         <h3 className="name">shaikh anas</h3>
         <p className="role">studen</p>
         <a href="profile" className="btn">view profile</a>
         <div className="flex-btn">
            <a href="login" className="option-btn">login</a>
            <a href="register" className="option-btn">register</a>
         </div>
      </div>

   </section>

</header>  
    )
}
export default Header;