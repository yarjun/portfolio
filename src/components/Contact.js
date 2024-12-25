import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaRegComment } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import animationData from '../assets/images/Animation.json'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import L from 'leaflet'; 
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    emailjs.send(
      'your_service_id', 
      'your_template_id',
      formData,
      'your_user_id' 
    )
    .then((response) => {
      setIsSending(false);
      setStatusMessage('Your message has been sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    })
    .catch((error) => {
      setIsSending(false);
      setStatusMessage('Something went wrong. Please try again!');
    });
  };

  
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="contact-section" className="contact-container">
      <div className="contact-form">
        <h2 className="contact-title">Contact Me</h2>
        <div className="lottie-animation">
          <Lottie options={lottieOptions} height={100} width={100} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <FaRegComment className="icon" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              />
            </div>
          </div>

          <button type="submit" className="send-btn" disabled={isSending}>
            {isSending ? 'Sending...' : <><FaPaperPlane /> Send</>}
          </button>
        </form>

        {statusMessage && <p className={`status-message ${isSending ? 'loading' : ''}`}>{statusMessage}</p>}
      </div>

      <div className="leaflet-map">
        <h3>Find Me Here</h3>
        <MapContainer center={[45.4215, -75.6972]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[45.5017, -73.5673]}>
            <Popup>
              <span>My Location</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
