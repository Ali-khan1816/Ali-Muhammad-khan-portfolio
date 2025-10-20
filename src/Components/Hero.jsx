import ali from '../assets/ali.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import TextTrail from './TextTrail';
import Galaxy from './Galaxy';

const heroData={
                name: "Ali Muhammad",
                title: "a programmer",
                description: "Transforming complex ideas into simple, stunning designs that make innovation look effortless.",
                img: ali,
                socialLinks:[
                  {id: 1, icon:<FaEnvelope className="w-8 h-8" />, link:"mailto:alimuhammadk360@gmail.com" },
                  {id: 2, icon:<FaGithub className="w-8 h-8" />, link:"https://github.com/Ali-khan1816" },
                  {id: 2, icon:<FaLinkedin className="w-8 h-8" />, link:"https://www.linkedin.com/in/ali-muhammad-khan/" },
                  {id: 3, icon:<FaInstagram className="w-8 h-8" />, link:"https://www.instagram.com/ali_muhammad_khan_official"  }
                ]
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0d]"
    >

      <div className="absolute inset-0 z-0">
        <Galaxy
          density={0.0018}        
          glowIntensity={0.75}
          hueShift={260}
          saturation={0.9}
          mouseInteraction={true}
        />
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-12 gap-12 max-w-7xl w-full">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-white md:mb-6 font-bold text-3xl md:text-5xl">
            <span className="block text-3xl md:pt-15">Hi, I’m</span>
            <span className="block mt-2 text-5xl md:text-6xl">
              <TextTrail
                text={heroData.name}
                fontFamily="Figtree"
                fontWeight="1000"
                noiseFactor={1.2}
                noiseScale={0.001}
                rgbPersistFactor={0.95}
                alphaPersistFactor={0.92}
                animateColor={true}
                startColor="#ff6b6b"
                textColor="#4ecdc4"
                backgroundColor="transparent"
                colorCycleInterval={2000}
                supersample={2}
              />
            </span>
            <span className="block mt-3 text-3xl pt-">{heroData.title}</span>
          </h1>

          <p className="text-gray-200 max-w-lg mb-6">  {heroData.description}  </p>

          <div className="flex gap-4 text-2xl text-gray-300">
          {heroData.socialLinks.map((social)=>(
            <a 
              key={social.id}
              href={social.link}
              target='_blank'
              rel='noreferrer'
              className="hover:text-blue-500 transition"
              >
                {social.icon}
              </a>
          ))}
            </div>
        </div>
            {/* <a href="mailto:alimuhammadk360@gmail.com" className="hover:text-blue-500 transition"><FaEnvelope className="w-8 h-8" /></a>
            <a href="https://github.com/Ali-khan1816" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"><FaGithub className="w-8 h-8" /></a>
            <a href="https://www.linkedin.com/in/ali-muhammad-khan/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"><FaLinkedin className="w-8 h-8" /></a>
            <a href="https://www.instagram.com/ali_muhammad_khan_official?igsh=MTl1bWZtZGx5ZGt5NA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"><FaInstagram className="w-8 h-8" /></a> */}
 

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroData.img}
            alt={heroData.name}
            className="w-96 md:w-80 lg:w-[500px] xl:w-[650px] object-contain"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
