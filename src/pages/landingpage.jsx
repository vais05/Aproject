import React from 'react';
import './css/style1.css';
import './js/script1.js';

// Import SVG (use it as a component)
import { ReactComponent as MySVG } from '../pages/faxicon.svg';

const LandingPage = () => {
  React.useEffect(() => {
    const element = document.getElementById('yourElementId');
    if (element !== null) {
      element.classList.add('className');
    }
  });
    return (
        <div id="top">
<header className="header" data-header>
  <div className="container">

    <h1>
      <a href="#" className="logo">REA</a>
    </h1>

    <nav className="navbar" data-navbar>

      <div className="navbar-top">
        <a href="#" className="logo">Raju Education Academy</a>

        <button className="nav-close-btn" aria-label="Close menu" data-nav-toggler>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <ul className="navbar-list">

        <li className="navbar-item">
          <a href="#home" className="navbar-link" data-nav-toggler>Home</a>
        </li>

        <li className="navbar-item">
          <a href="#about" className="navbar-link" data-nav-toggler>About</a>
        </li>

        <li className="navbar-item">
          <a href="#courses" className="navbar-link" data-nav-toggler>Courses</a>
        </li>

        <li className="navbar-item">
          <a href="#event" className="navbar-link" data-nav-toggler>Teacher</a>
        </li>

        <li className="navbar-item">
          <a href="#" className="navbar-link" data-nav-toggler>Contact</a>
        </li>

      </ul>

    </nav>

    <div className="header-actions">

      <button className="header-action-btn" aria-label="Open search" data-search-toggler>
        <ion-icon name="search-outline"></ion-icon>
      </button>

      <a href="#" className="header-action-btn login-btn">
        <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

        <span className="span">Login / Register</span>
      </a>

      <button className="header-action-btn nav-open-btn" aria-label="Open menu" data-nav-toggler>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

    </div>

    <div className="overlay" data-nav-toggler data-overlay></div>

  </div>
</header>

<div className="search-container" data-search-box>
  <div className="container">

    <button className="search-close-btn" aria-label="Close search" data-search-toggler>
      <ion-icon name="close-outline"></ion-icon>
    </button>

    <div className="search-wrapper">
      <input type="search" name="search" placeholder="Search Here..." aria-label="Search" className="search-field"/>

      <button className="search-submit" aria-label="Submit" data-search-toggler>
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>

  </div>
</div>

<main>
  <article>

  <section className="hero" id="home" aria-label="hero"
   style={{ backgroundImage: 'url("./images/hero-bg.jpg")' }}>
  <div className="container">
    <div className="hero-content">
      <p className="section-subtitle">Better Learning Future With Us</p>
      <h2 className="h1 hero-title">Raja Educational Academy (REA) </h2>
      <p className="hero-text">
        Complete brain Development
      </p>
      <a href="#" className="btn btn-primary">
        <span className="span">Get Started Today</span>
        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </div>
    <figure className="hero-banner">
      <img src="./images/hero-banner.png" width="500" height="500" loading="lazy" alt="hero image" className="w-100" />
      <img src="./images/hero-abs-1.png" width="318" height="352" loading="lazy" aria-hidden="true" className="abs-img abs-img-1" />
      <img src="./images/hero-abs-2.png" width="160" height="160" loading="lazy" aria-hidden="true" className="abs-img abs-img-2" />
    </figure>
  </div>
</section>

<section className="section category" aria-label="category">
  <div className="container">
    <p className="section-subtitle">Course Categories</p>
    <h2 className="h2 section-title">Programs</h2>
    <ul className="grid-list">
      <li>
        <div className="category-card">
          <div className="card-icon">
            <ion-icon name="apps-outline"></ion-icon>
          </div>
          <div>
            <h3 className="h3 card-title">
              <a href="#">Abacus</a>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="category-card">
          <div className="card-icon">
            <ion-icon name="file-tray-full-outline"></ion-icon>
          </div>
          <div>
            <h3 className="h3 card-title">
              <a href="#">Vedic Math</a>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="category-card">
          <div className="card-icon">
            <ion-icon name="pencil-outline"></ion-icon>
          </div>
          <div>
            <h3 className="h3 card-title">
              <a href="#">Hand Writing</a>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="category-card">
          <div className="card-icon">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div>
            <h3 className="h3 card-title">
              <a href="#">E-Kids</a>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="category-card">
          <div className="card-icon">
            <ion-icon name="laptop-outline"></ion-icon>
          </div>
          <div>
            <h3 className="h3 card-title">
              <a href="#">Memory Techniques</a>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="category-card">
          <div className="card-icon">
            <ion-icon name="cube-outline"></ion-icon>
          </div>
          <div>
            <h3 className="h3 card-title">
              <a href="#">Rubic Cube</a>
            </h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>






  

<section className="section about" id="about" aria-label="about">
  <div className="container">
    <figure className="about-banner">
      <img src="./images/about-banner.jpg" width="450" height="590" loading="lazy" alt="about banner" className="w-100 about-img" />
      <img src="./images/about-abs-1.jpg" width="188" height="242" loading="lazy" aria-hidden="true" className="abs-img abs-img-1" />
      <img src="./images/about-abs-2.jpg" width="150" height="200" loading="lazy" aria-hidden="true" className="abs-img abs-img-2" />
    </figure>
    <div className="about-content">
      <p style={{fontSize: "35px"}}>
        Raja Educational Academy (REA) is a women’s organization, dealing with various children based concepts like Abacus, Vedic Math’s, Memory Techniques, Cursive Writing, etc.,. It has a talented team of various experts and is headed by dynamic leaders with years of experience in the education arena. REA team has trained hundreds of teachers in Various Concepts.
      </p>
    </div>
  </div>
</section>






    <section className="section course" id="courses" aria-label="course"
         style={{ backgroundImage: "url('./images/course-bg.jpg')" }}>
      <div className="container">

        <p className="section-subtitle">Popular Courses</p>

        <h2 className="h2 section-title">Our Courses</h2>

        <ul className="grid-list">

          <li>
            <div className="course-card">

              <figure className="card-banner">
                <img src="./images/course-1.jpg" width="370" height="270" loading="lazy"
                  alt="Competitive Strategy law for all students" className="img-cover"/>
              </figure>

              <div className="card-actions">

                <span className="badge">Junior</span>

                <button className="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                  <ion-icon name="heart"></ion-icon>
                </button>

              </div>

              <div className="card-content">

                <ul className="card-meta-list">

                  <li className="card-meta-item">
                    <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                    <span className="card-meta-text">6 Level</span>
                  </li>

                  

                </ul>

                <h3 className="h3">
                  <a href="#" className="card-title">Abacus Course</a>
                </h3>

                <div className="rating-wrapper">

                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>


                </div>

                

              </div>

            </div>
          </li>

          <li>
            <div className="course-card">

              <figure className="card-banner">
                <img src="./images/course-2.jpg" width="370" height="270" loading="lazy"
                  alt="Machine Learning A-Z: Hands-On Python and java" className="img-cover"/>
              </figure>

              <div className="card-actions">

                <span className="badge">Senior</span>

                <button className="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                  <ion-icon name="heart"></ion-icon>
                </button>

              </div>

              <div className="card-content">

                <ul className="card-meta-list">

                  <li className="card-meta-item">
                    <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                    <span className="card-meta-text">10 Level</span>
                  </li>

                  

                </ul>

                <h3 className="h3">
                  <a href="#" className="card-title">Abacus Course</a>
                </h3>

                <div className="rating-wrapper">

                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>


                </div>

                

              </div>

            </div>
          </li>

          <li>
            <div className="course-card">

              <figure className="card-banner">
                <img src="./images/course-3.jpg" width="370" height="270" loading="lazy"
                  alt="Achieving Advanced in Insights with Big" className="img-cover"/>
              </figure>

              <div className="card-actions">


                <button className="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                  <ion-icon name="heart"></ion-icon>
                </button>

              </div>

              <div className="card-content">

                <ul className="card-meta-list">

                  <li className="card-meta-item">
                    <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                    <span className="card-meta-text">6 Level</span>
                  </li>

                  

                </ul>

                <h3 className="h3">
                  <a href="#" className="card-title">Vedic Maths Course</a>
                </h3>

                <div className="rating-wrapper">

                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>


                </div>

                

              </div>

            </div>
          </li>

          <li>
            <div className="course-card">

              <figure className="card-banner">
                <img src="./images/course-4.jpg" width="370" height="270" loading="lazy"
                  alt="Education Makes A Person A Responsible Citizen" className="img-cover"/>
              </figure>

              <div className="card-actions">


                <button className="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                  <ion-icon name="heart"></ion-icon>
                </button>

              </div>

              <div className="card-content">

                <ul className="card-meta-list">

                  <li className="card-meta-item">
                    <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                  </li>

                  

                </ul>

                <h3 className="h3">
                  <a href="#" className="card-title">Cursive Writing</a>
                </h3>

                <div className="rating-wrapper">

                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>


                </div>

                

              </div>

            </div>
          </li>

          <li>
            <div className="course-card">

              <figure className="card-banner">
                <img src="./images/course-5.jpg" width="370" height="270" loading="lazy"
                  alt="Building A Better World One Student At A Time" className="img-cover"/>
              </figure>

              <div className="card-actions">


                <button className="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                  <ion-icon name="heart"></ion-icon>
                </button>

              </div>

              <div className="card-content">

                <ul className="card-meta-list">

                  <li className="card-meta-item">
                    <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                    <span className="card-meta-text"></span>
                  </li>

                  

                </ul>

                <h3 className="h3">
                  <a href="#" className="card-title">Memory Techniques</a>
                </h3>

                <div className="rating-wrapper">

                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>


                </div>

                

              </div>

            </div>
          </li>

          <li>
            <div className="course-card">

              <figure className="card-banner">
                <img src="./images/course-6.jpg" width="370" height="270" loading="lazy"
                  alt="Education is About Forming Faithful Disciples" className="img-cover"/>
              </figure>

              <div className="card-actions">


                <button className="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                  <ion-icon name="heart"></ion-icon>
                </button>

              </div>

              <div className="card-content">

                <ul className="card-meta-list">

                  <li className="card-meta-item">
                    <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                    <span className="card-meta-text"></span>
                  </li>

                 

                </ul>

                <h3 className="h3">
                  <a href="#" className="card-title">Rubik's Cube</a>
                </h3>

                <div className="rating-wrapper">

                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>


                </div>

                

              </div>

            </div>
          </li>
          <li>
            <div className="course-card">

              <figure className="card-banner">
                <img src="./images/course-7.jpg" width="370" height="270" loading="lazy"
                  alt="Education is About Forming Faithful Disciples" className="img-cover"/>
              </figure>

              <div className="card-actions">


                <button className="whishlist-btn" aria-label="Add to whishlist" data-whish-btn>
                  <ion-icon name="heart"></ion-icon>
                </button>

              </div>

              <div className="card-content">

                <ul className="card-meta-list">

                  <li className="card-meta-item">
                    <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                    <span className="card-meta-text"></span>
                  </li>

                 

                </ul>

                <h3 className="h3">
                  <a href="#" className="card-title">E-Kids</a>
                </h3>

                <div className="rating-wrapper">

                  <div className="rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>


                </div>

                

              </div>

            </div>
          </li>
          

        </ul>

        <a href="#" className="btn btn-primary">
          <span className="span">View All Courses</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>

      </div>
      
    </section>






    <section className="section cta" aria-label="workshop" 
                 style={{ backgroundImage: "url('./images/cta-bg.jpg')" }}>

      <div className="container">

        <figure className="cta-banner">
          <img src="./images/cta-banner.jpg" width="580" height="380" loading="lazy" alt="cta banner"
            className="img-cover"/>
        </figure>

        <div className="cta-content">

          <p className="section-subtitle">Free Demo</p>

          <h2 className="h2 section-title">Demo sections</h2>

          <p className="section-text">
            
"Get ready to explore our upcoming features firsthand with our free demo. Sign up now to be the first to try it out. Don't miss this exclusive opportunity!" </p>

          <a href="#" className="btn btn-secondary">
            <span className="span">Upcomming Demo sections</span>

            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>

        </div>

      </div>
    </section>






    <section className="section event" id="event" aria-label="event">
      <div className="container">

        <p className="section-subtitle">Teacher's</p>

        <h2 className="h2 section-title">Let’s Start the journey</h2>

        <ul className="grid-list">

          <li>
            <div className="event-card">

              <figure className="card-banner">
                <img src="./images/event-1.jpg" width="370" height="250" loading="lazy"
                  alt="Innovation & Technological Entrepreneurship Team" className="img-cover"/>
              </figure>


              <div className="card-content">

                

                <h3 className="h3">
                  <a href="#" className="card-title">Amit kumar</a>
                </h3>

                

              </div>

            </div>
          </li>

          <li>
            <div className="event-card">

              <figure className="card-banner">
                <img src="./images/event-2.jpg" width="370" height="250" loading="lazy"
                  alt="Virtual Spring Part-time Jobs Fair for Student" className="img-cover"/>
              </figure>


              <div className="card-content">

                

                <h3 className="h3">
                  <a href="#" className="card-title">Ashi arora</a>
                </h3>

                

              </div>

            </div>
          </li>

          <li>
            <div className="event-card">

              <figure className="card-banner">
                <img src="./images/event-3.jpg" width="370" height="250" loading="lazy"
                  alt="Explorations of Regional Chief Executive Network" className="img-cover"/>
              </figure>


              <div className="card-content">


                <h3 className="h3">
                  <a href="#" className="card-title">Guru shrewas</a>
                </h3>

               

              </div>

            </div>
          </li>

        </ul>

      </div>
    </section>






    <section className="section newsletter" aria-label="newsletter"
              style={{ backgroundImage: "url('./images/newsletter-bg.jpg')" }}>

      <div className="container">

        <p className="section-subtitle">Subscribe Newsletter</p>

        <h2 className="h2 section-title">Get Every Latest News</h2>

        <form action="" className="newsletter-form">

          <div className="input-wrapper">
            <input type="email" name="email_address" aria-label="email" placeholder="Enter your mail address" required
              className="email-field"/>

            <ion-icon name="mail-open-outline" aria-hidden="true"></ion-icon>
          </div>

          <button type="submit" className="btn btn-primary">
            <span className="span">Subscribe</span>

            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </button>

        </form>

      </div>
    </section>

  </article>
</main>













<a href="#top" className="back-top-btn" aria-label="Back to top" data-back-top-btn>
  <ion-icon name="arrow-up"></ion-icon>
</a>





</div>
    );
}

export default LandingPage;
