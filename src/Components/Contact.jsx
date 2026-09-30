import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { siteData } from "../data/siteData";

const emailConfig = {
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const contactCards = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: siteData.phone,
    href: `tel:${siteData.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: siteData.location,
    href: null,
  },
];

const socials = [
  { label: "GitHub", icon: <FaGithub />, href: siteData.socials.github },
  { label: "LinkedIn", icon: <FaLinkedin />, href: siteData.socials.linkedin },
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: siteData.socials.instagram,
  },
];

const inputClass =
  "w-full rounded-xl bg-[#101010]/80 border border-gray-600/50 px-4 py-3 text-white placeholder-gray-500 " +
  "focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();

    // Spam protection: insaan ye chhupi field nahi bharte, bots bharte hain
    if (form.current.elements.website.value) {
      setStatus("success");
      form.current.reset();
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(
        emailConfig.serviceID,
        emailConfig.templateID,
        form.current,
        emailConfig.publicKey,
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
      className="relative overflow-hidden bg-[#101010] text-white py-24 px-6 md:px-16 pb-32 lg:pb-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-purple-400 mb-3">
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Let’s build something great together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind, a question, or an opportunity? Send me a
            message and I’ll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Open to new projects and opportunities
            </span>

            {contactCards.map((card) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-600/20 text-lg text-purple-400">
                    {card.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-gray-500">
                      {card.label}
                    </span>
                    <span className="block font-medium text-gray-100 break-words">
                      {card.value}
                    </span>
                  </span>
                </>
              );
              const base =
                "flex items-center gap-4 rounded-2xl border border-gray-500/20 bg-[#1a1a1a]/70 p-4 transition";

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className={`${base} hover:border-purple-500/50 hover:bg-[#1f1a2e]`}
                >
                  {content}
                </a>
              ) : (
                <div key={card.label} className={base}>
                  {content}
                </div>
              );
            })}

            <div className="flex gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-500/30 bg-[#1a1a1a]/70 text-xl text-gray-300 transition hover:border-purple-500/60 hover:text-purple-400 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right column: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-3xl border border-gray-500/20 bg-[#1a1a1a]/70 backdrop-blur-md p-6 md:p-10 shadow-[0_8px_40px_#00000070] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="user_name"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="user_phone"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Phone <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  id="user_phone"
                  name="user_phone"
                  type="tel"
                  placeholder="+92 300 0000000"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or question..."
                  required
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              {/* Honeypot: chhupi hui spam-protection field */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:from-purple-500 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div role="status" aria-live="polite" className="min-h-6">
                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm text-green-400">
                    <FaCheckCircle /> Message sent! I’ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <FaExclamationCircle /> Something went wrong. Please try
                    again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
