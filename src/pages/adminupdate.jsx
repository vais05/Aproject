import React, { useState } from 'react';

function AdminUpdate() {
  // Define state for form values
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Here you can perform form submission logic
    console.log('Form submitted:', formValues);
    // Reset form values after submission
    setFormValues({
      name: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  }

  // Function to handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  return (
    <div>
        <header className="header">
       
       <section className="flex">
    
          
    
          <div className="profile">
             <img src="images/pic-1.jpg" className="image" alt=""/>
             <h3 className="name">Raj</h3>
             <p className="role">Admin</p>
             <a href="/adminprofile" className="btn">view profile</a>
             <div className="flex-btn">
                <a href="/adminlogin" className="option-btn">login</a>
                <a href="/adminregister" className="option-btn">register</a>
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
          <h3 className="name">Raj</h3>
          <p className="role">Admin</p>
          <a href="/adminprofile" className="btn">view profile</a>
       </div>
    
       <nav className="navbar"> <a href="/adminabout"><i className="fas fa-home"></i><span>home</span></a>
        <a href="/adminAddStudent"><i className="fas fa-question"></i><span>Add/Remove Students</span></a>
        <a href="/adminuploadmaterial"><i className="fas fa-graduation-cap"></i><span>upload material</span></a>
       </nav>
    
    </div>
      {/* Your header and side bar code */}
      <section className="form-container">
        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
          <h3>update profile</h3>
          <p>update name</p>
          <input
            type="text"
            name="name"
            placeholder="Raj"
            maxLength="50"
            className="box"
            value={formValues.name}
            onChange={handleChange}
          />
          {/* Repeat similar input elements for other fields */}
          <input type="submit" value="update profile" name="submit" className="btn" />
        </form>
      </section>
    </div>
  );
}

export default AdminUpdate;
