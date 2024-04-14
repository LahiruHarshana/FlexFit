// Contact.tsx
import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-form">
              <h1>Contact Us</h1>
        <div className='sub-contact-form'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Name</label>
        </div>
        <div className="form-group">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Email</label>
        </div>
        <div className="form-group">
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          <label>Message</label>
        </div>
        <button type="submit">Submit</button>
      </form>

        </div>
      <hr />

    </div>
  );
};

export default Contact;
