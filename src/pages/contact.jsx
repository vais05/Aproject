import React from 'react';

function Contact() {
    return (
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

<section className="contact">
                <div className="row">
                    <div className="image">
                        <img src="images/contact-img.svg" alt="" />
                    </div>
                    <form action="" method="post">
                        <h3>get in touch</h3>
                        <input type="text" placeholder="enter your name" name="name" required maxLength="50" className="box" />
                        <input type="email" placeholder="enter your email" name="email" required maxLength="50" className="box" />
                        <input type="number" placeholder="enter your number" name="number" required maxLength="50" className="box" />
                        <textarea name="msg" className="box" placeholder="enter your message" required maxLength="1000" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" className="inline-btn" name="submit" />
                    </form>
                </div>

                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-phone"></i>
                        <h3>phone number</h3>
                        <a href="tel:1234567890">123-456-7890</a>
                        <a href="tel:1112223333">111-222-3333</a>
                    </div>

                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <h3>email address</h3>
                        <a href="mailto:shaikhanas@gmail.com">shaikhanas@gmail.com</a>
                        <a href="mailto:anasbhai@gmail.com">anasbhai@gmail.com</a>
                    </div>

                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>office address</h3>
                        <a href="#">flat no. 1, a-1 building, jogeshwari, mumbai, india - 400104</a>
                    </div>
                </div>
            </section>
















</div>
    );
}

export default Contact;
