// Last edited by you@example.com @ 30/09/26 22:58.
import {
  FaGraduationCap,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  education,
  certifications,
  recommendationLetters,
} from "../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#101010] text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-center text-6xl font-bold mb-4">Education</h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        My academic journey and the certifications I have earned along the way.
      </p>

      <div className="max-w-3xl mx-auto">
        <ol className="relative border-l-2 border-purple-600/60 ml-4 space-y-10">
          {education.map((item) => (
            <li key={item.id} className="ml-8 relative">
              <span className="absolute -left-[49px] top-2 flex items-center justify-center w-8 h-8 rounded-full bg-purple-700 ring-4 ring-[#101010]">
                <FaGraduationCap className="text-sm" />
              </span>

              <div className="bg-[#1a1a1a]/70 border border-gray-500/20 rounded-2xl p-5 hover:border-purple-500/50 transition">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-700/30 text-purple-300">
                    {item.period}
                  </span>
                  <span className="text-xs text-gray-500">{item.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.institution}</p>
                {item.result && (
                  <p className="text-gray-300 text-sm mt-2">{item.result}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="max-w-5xl mx-auto mt-20">
        <h3 className="text-center text-3xl font-bold mb-10">Certifications</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col bg-[#1a1a1a]/70 border border-gray-500/20 rounded-2xl p-5 hover:border-purple-500/50 transition"
            >
              <FaCertificate className="text-3xl text-amber-400 mb-3" />
              <h4 className="font-semibold text-gray-100 flex-1">
                {cert.title}
              </h4>
              {cert.issuer && (
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
              )}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mt-3"
                >
                  <FaExternalLinkAlt /> View certificate
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          {recommendationLetters} recommendation letters available on request.
        </p>
      </div>
    </section>
  );
};

export default Education;
