import React, { useRef } from "react";
import emailjs from "emailjs-com";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";

const Contact = () => {
  const form = useRef();

  const contactInfo = {
    heading: "Get In Touch",
    description:
      "Have a question or want to collaborate? Fill out the form below, and I’ll get back to you soon!",
    serviceID: "service_fm5jda2",
    templateID: "template_nyvd11b",
    publicKey: "WoQ9lg413YYlwg9vQ",
  };

  const contactDetails = [
    { icon: mail_icon, label: "Email", value: "alimuhammadk360@gmail.com" },
    { icon: phone_icon, label: "Phone", value: "+92 317 5585860" },
    { icon: location_icon, label: "Location", value: "Chakwal, Pakistan" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        contactInfo.serviceID,
        contactInfo.templateID,
        form.current,
        contactInfo.publicKey
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#101010] text-white py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="bg-[#1a1a1a]/70 shadow-[0_4px_20px_#00000070] rounded-3xl p-8 md:p-10 max-w-md mx-auto w-full">
          <h2 className="text-3xl font-bold mb-4">{contactInfo.heading}</h2>
          <p className="text-gray-300 mb-6">{contactInfo.description}</p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            {["user_name", "user_email", "user_phone"].map((field, i) => {
              const placeholders = ["Your Name", "Your Email", "+92..."];
              const types = ["text", "email", "tel"];
              return (
                <input
                  key={i}
                  name={field}
                  type={types[i]}
                  placeholder={placeholders[i]}
                  required
                  className="bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl p-4 text-white placeholder-gray-300"
                />
              );
            })}
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              required
              className="bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl p-4 text-white placeholder-gray-300"
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
          {contactDetails.map((info, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={info.icon} alt={info.label} className="w-6 h-6" />
              <p>{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
