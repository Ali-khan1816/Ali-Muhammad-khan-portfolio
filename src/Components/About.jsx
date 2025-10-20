import about_pic from '../assets/about-pic.jpg'
import alikhan from '../assets/alikhan.png'
import profile from '../assets/profile.png'
import TextType from './TextType.jsx'
import InfiniteMenu from "./InfiniteMenu.jsx";

const aboutData={
                name:"Ali Muhammad",
                age:24,
                address:"Abbottabad",
                email: "alimuhammadk360@gmail.com",
                heading: "I'm Ali Muhammad — turning ideas into functional and elegant web applications",
                description:"Passionate web developer with expertise in building responsive and user-friendly websites. Skilled in modern front-end and back-end technologies to deliver efficient digital solutions. Driven by problem-solving and creativity to transform ideas into functional products. Committed to continuous learning and staying updated with the latest industry trends.",
                images:[
                  {image: alikhan, title:"About me", description: 'Ali Muhammad — web developer' },
                  {image: about_pic, title:"Creative side", description: 'Passionate about UI/UX' },
                  {image: profile, title:"Learning", description: 'Always improving' }
                ],
                cvLink: '/AliMuhammadCV.pdf'
                }


const About = () => {
  return (
    <>
      <div id='about' className="bg-[#101010] text-white py-20 px-6 md:px-16 lg:px-28 flex flex-col md:flex-row items-center md:items-start md:gap-12">
        <div className="flex justify-center md:justify-start hover:scale-105 transition-transform duration-300">
          <div style={{ height: 550, position: 'relative' }} className="rounded-3xl overflow-hidden
                      h-[400px] w-[300px] mx-auto
                      sm:w-[450px] sm:h-[450px]
                      md:w-[500px] md:h-[600px]
                      lg:w-[500px] lg:h-[450px]">
            <InfiniteMenu items={aboutData.images} />
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:ml-8 max-w-2xl bg-[#1a1a1a]/60 shadow-[0_4px_20px_#101010] rounded-2xl p-4">
          <h3 className="pb-4 text-2xl font-bold text-green-700">Who am I?</h3>
          <h1 className="text-2xl md:text-3xl font-bold pb-6">
            {aboutData.heading}
          </h1>
          <p className="opacity-70 pb-6 leading-relaxed text-lg">
            <TextType 
              text={[aboutData.description]}
              typingSpeed={50}
              pauseDuration={1800}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>

          <hr className="opacity-70 pb-8" />

          <div className="flex justify-between text-sm flex-wrap gap-y-2 pb-6">
            <div>
              <h5 className="opacity-80">Name: <span className="pl-2 opacity-60">{aboutData.name}</span></h5>
              <h5 className="opacity-80">Age: <span className="pl-2 opacity-60">{aboutData.age}</span></h5>
            </div>
            <div>
              <h5 className="opacity-80">From: <span className="pl-2 opacity-60">{aboutData.address}</span></h5>
              <h5 className="opacity-80">Email: <span className="pl-2 opacity-60">{aboutData.email}</span></h5>
            </div>
          </div>
          <a
            href={aboutData.cvLink}
            download="AliMuhammadCV.pdf"
            className="bg-green-700 px-5 py-2 rounded-3xl hover:font-bold transition"
            >
            Download CV
          </a>
        </div>
      </div>
    </>
  )
}

export default About
