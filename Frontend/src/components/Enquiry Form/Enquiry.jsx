import React, { useState } from 'react';
import './Enquiry.css'; // Import your CSS file

function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    enquiry: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log(formData);
    // Reset form after submission if needed
    setFormData({
      name: '',
      contactNumber: '',
      enquiry: '',
      email: ''
    });
  };

  return (
    <div className="form-container">
      <h1>How We Can Help You</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            placeholder="Contact Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="enquiry"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleInputChange}
            placeholder="Enquiry"
            required
          />
        </div>
       
        <div className="form-group-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Enquiry;
