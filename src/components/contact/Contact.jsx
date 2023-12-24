import './Contact.css';
import { SiGmail } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [showSentMessage, setShowSentMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sb3796l', 'template_nz38gpp', form.current, 'W2NPSifb7SQh5ndPj')
      .then(
        (result) => {
          console.log(result.text);
          setShowSentMessage(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleOKClick = () => {
    setShowSentMessage(false);
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <SiGmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>vincentotiskisia@gmail.com</h5>
            <a href='mailto:vincentotiskisia@gmail.com' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <a href='https://wa.me/254769212618' target='_blank' rel='noreferrer'>
              Send a WhatsApp message
            </a>
          </article>
        </div>

        {showSentMessage && (
          <div >
            <p>Sent Successfully</p>
            <button  onClick={handleOKClick}>OK</button>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Type your message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
