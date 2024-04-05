import React from 'react';

function SuperAdminAbout() {
    function handleStartClass() {
        var confirmStart = window.confirm("Do you want to start the class?");
        if (confirmStart) {
            alert("Class started!");
        } else {
            alert("Class not started.");
        }
    }

    return (
        <div>
            <header className="header">
                <section className="flex">
                    
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
                    <a href="/superadminbout"><i className="fas fa-home"></i><span>home</span></a>
                    <a href="/superadminAddStudent"><i className="fa fa-plus"></i><span>Add/Remove Students</span></a>
                    <a href="/superadminAddadmin"><i className="fa fa-plus"></i><span>Add/Remove Admin</span></a>
                    <a href="/superadminuploadmaterial"><i className="fas fa-graduation-cap"></i><span>upload material</span></a>
                </nav>
            </div>

            <section className="home-grid">
                <h1 className="heading">quick options</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="schedule">
                            <h2 className="heading">Upcoming Schedule</h2>
                            <div className="event">
                                <p className="name">Math Class</p>
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
                        <h3 className="title">My Classes</h3>
                        <div className="flex">
                            <a href="#"><i className="fab fa5"></i><span></span></a>
                            <a href="#"><i className="fab fa-css3"></i><span>CSS</span></a>
                            <a href="#"><i className="fab fa-js"></i><span>javascript</span></a>
                            <a href="#"><i className="fab fa-react"></i><span>react</span></a>
                            <a href="#"><i className="fab fa-php"></i><span>PHP</span></a>
                            <a href="#"><i className="fab fa-bootstrap"></i><span>bootstrap</span></a>
                        </div>
                    </div>
                    <div className="meetclass">
                        <h3 className="title">Start Class</h3>
                        <p className="tutor">Begin Your Classes</p>
                        <button id="startClassBtn" onClick={handleStartClass}>Start Class</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SuperAdminAbout;
