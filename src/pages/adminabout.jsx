import React from 'react';

function AdminAbout() {
    // Function to handle the click event
    const handleStartclassName = () => {
        const confirmStart = window.confirm("Do you want to start the className?");
        if (confirmStart) {
            alert("className started!");
        } else {
            alert("className not started.");
        }
    };

    return (
        <div>


<div className="side-bar">

   <div id="close-btn">
      <i className="fas fa-times"></i>
   </div>

   <div className="profile">
      <img src="images/pic-1.jpg" className="image" alt=""/>
      <h3 className="name">Raj</h3>
      <p className="role">Admin</p>
      <a href="/adminprofile" className="btn">view profile</a>
   </div>

   <nav className="navbar"> <a href="/adminabout"><i className="fas fa-home"></i><span>home</span></a>
      <a href="/adminAddStudent"><i className="fas fa-question"></i><span>Add/Remove Students</span></a>
      <a href="/adminuploadmaterial"><i className="fas fa-graduation-cap"></i><span>upload material</span></a>
   </nav>

</div>

<section className="home-grid">

   <h1 className="heading">quick options</h1>

   <div className="box-container">

      <div className="box" >
        <div className="schedule">
            <h2 className="heading">Upcoming Schedule</h2>
            <div className="event">
                <p className="name">Math className</p>
                <p className="datetime">4th March | 19:20</p>
            </div>
            
        </div>
        
      </div>

      <div className="box">
         <h3 className="title">top categories</h3>
         <div className="flex">
            <a href="#"><i className="fas fa-code"></i><span>development</span></a>
            <a href="#"><i className="fas fa-chart-simple"></i><span>business</span></a>
            <a href="#"><i className="fas fa-pen"></i><span>design</span></a>
            <a href="#"><i className="fas fa-chart-line"></i><span>marketing</span></a>
            <a href="#"><i className="fas fa-music"></i><span>music</span></a>
            <a href="#"><i className="fas fa-camera"></i><span>photography</span></a>
            <a href="#"><i className="fas fa-cog"></i><span>software</span></a>
            <a href="#"><i className="fas fa-vial"></i><span>science</span></a>
         </div>
      </div>

      <div className="box">
         <h3 className="title">My classNamees</h3>
         <div className="flex">
            <a href="#"><i className="fab fa-html5"></i><span>HTML</span></a>
            <a href="#"><i className="fab fa-css3"></i><span>CSS</span></a>
            <a href="#"><i className="fab fa-js"></i><span>javascript</span></a>
            <a href="#"><i className="fab fa-react"></i><span>react</span></a>
            <a href="#"><i className="fab fa-php"></i><span>PHP</span></a>
            <a href="#"><i className="fab fa-bootstrap"></i><span>bootstrap</span></a>
         </div>
      </div>

      <div className="meetclass">
        <h3 className="title">Start Class </h3>
        <p className="tutor">Begin Your Classes</p>
        <button id="startClassBtn">Start Class</button>
    </div>
    

   </div>


</section>
</div>
);
}

export default AdminAbout;