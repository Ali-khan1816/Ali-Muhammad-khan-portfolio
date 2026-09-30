// Last edited by you@example.com @ 30/09/26 15:48.
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import { siteData } from "../data/siteData";

const contactInfo = {
  heading: "Get In Touch",
  description:
    "Have a question or want to collaborate? Fill out the form below, and I’ll get back to you soon!",
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const contactDetails = [
  { icon: mail_icon, label: "Email", value: siteData.email },
  { icon: phone_icon, label: "Phone", value: siteData.phone },
  { icon: location_icon, label: "Location", value: siteData.location },
];

const fields = [
  { name: "user_name", type: "text", placeholder: "Your Name" },
  { name: "user_email", type: "email", placeholder: "Your Email" },
  { name: "user_phone", type: "tel", placeholder: "+92..." },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        contactInfo.serviceID,
        contactInfo.templateID,
        form.current,
        contactInfo.publicKey,
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#101010] text-white py-20 px-6 md:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#1a1a1a]/70 shadow-[0_4px_20px_#00000070] rounded-3xl p-8 md:p-10 max-w-md mx-auto w-full">
          <h2 className="text-3xl font-bold mb-4">{contactInfo.heading}</h2>
          <p className="text-gray-300 mb-6">{contactInfo.description}</p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            {fields.map((field) => (
              <input
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl p-4 text-white placeholder-gray-300"
              />
            ))}
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              required
              className="bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl p-4 text-white placeholder-gray-300"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition rounded-2xl py-3 px-6 font-semibold text-white shadow-lg"
            >
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
            </button>

            <p role="status" aria-live="polite" className="text-sm min-h-5">
              {status === "success" && (
                <span className="text-green-400">
                  ✅ Message sent! I’ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  ❌ Something went wrong. Please try again.
                </span>
              )}
            </p>
          </form>
        </div>

        <div className="text-left space-y-6">
          <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
          {contactDetails.map((info) => (
            <div key={info.label} className="flex items-center gap-3">
              <img src={info.icon} alt="" className="w-6 h-6" />
              <p>{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
