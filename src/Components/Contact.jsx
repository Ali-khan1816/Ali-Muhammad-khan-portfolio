import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import mail_icon from '../assets/mail-icon.png';
import phone_icon from '../assets/phone-icon.png';
import location_icon from '../assets/location-icon.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fm5jda2',     
        'template_nyvd11b',  
        form.current,
        'WoQ9lg413YYlwg9vQ'      
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Failed to send message. Try again.');
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#101010] text-white py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="bg-[#1a1a1a]/70 shadow-[0_4px_20px_#00000070] rounded-3xl p-8 md:p-10 max-w-md mx-auto w-full">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Have a question or want to collaborate? Fill out the form below, and I’ll get back to you soon!
          </p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <input
              name="user_name"
              className="bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl p-4 text-white placeholder-gray-300"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              name="user_email"
              className="bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl p-4 text-white placeholder-gray-300"
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              name="user_phone"
              className="bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl p-4 text-white placeholder-gray-300"
              type="tel"
              placeholder="+92..."
              required
            />
            <textarea
              name="message"
              className="bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl p-4 text-white placeholder-gray-300"
              rows="4"
              placeholder="Write your message..."
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition rounded-2xl py-3 px-6 font-semibold text-white shadow-lg"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="text-left md:text-left space-y-6">
          <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
          <div className="flex items-center gap-3">
            <img src={mail_icon} alt="Mail" className="w-6 h-6" />
            <p>alimuhammadk360@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={phone_icon} alt="Phone" className="w-6 h-6" />
            <p>+92 317 5585860</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={location_icon} alt="Location" className="w-6 h-6" />
            <p>Chakwal, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
