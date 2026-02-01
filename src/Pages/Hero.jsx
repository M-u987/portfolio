// // import HeroImg from "../assets/Muru.png";
// // import { FaLinkedin,FaGithub,FaYoutube} from "react-icons/fa6";
// // import { RiInstagramFill } from "react-icons/ri";

// // export default function Hero() {
// //     return <section className="flex flex-col md:flex-row px-20 py-32 justify-center items-center ">
// //         <div className="md:w-1/2 flex flex-col " >
// //             <h1 className=" text-7xl font-hero-font text-Black">Hi,<br/>I'm <span className="text-black hover:text-blue-600">Murugesh</span>
            
// //                 <p className="text-2xl mt-5 text-black">
// //                     A Passionate <span className='text-blue-600'>Full-Stack Developer</span>
// //                 </p>
// //             </h1>
            
// //             <p className="body-font text-black text-align:justify text-lg pb-5">
// //                 Welcome to my portfolio! I'm Murugesh, a dedicated full-stack developer with a passion for creating dynamic and responsive web applications. Explore my work and connect with me through the links below.
// //             </p>
    
// //             <br/>
// //             <div className="flex ">
// //                 <a href="#" target='blank' className="pr-3 text-blue hover:text-blue-600"><FaLinkedin size={30}/></a>
// //                 <a href="#" className="pr-3 text-blue hover:text-blue-600"><FaGithub size={30}/></a>
// //                 <a href="#"  className="pr-3 text-blue hover:text-blue-600"><RiInstagramFill size={30}/></a>
// //                 <a href="#" className=" text-blue hover:text-blue-600"><FaYoutube size={30}/></a>
// //                 <p className="text-Black font-body-font font-bold hover:text-blue-600 px-10">
// //                     <a className="btn" href="#">Download My CV</a>
// //                 </p>
// //             </div>
// //         </div>
// //         <div className="md:w-1/2">       
// //         <img src={HeroImg} alt="Murugesh Profile " className="w-100" />
// //         </div>
// //     </section>
// // }

// import HeroImg from "../assets/Muru.png";
// import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";
// import { RiInstagramFill } from "react-icons/ri";

// export default function Hero() {
//   return (
//     <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-24 gap-10">
      
//       {/* Text */}
//       <div className="md:w-1/2">
//         <h1 className="text-5xl md:text-7xl font-hero-font text-black leading-tight">
//           Hi, <br />
//           I'm <span className="text-blue-600">Murugesh</span>
//         </h1>

//         <p className="text-2xl mt-4 text-black">
//           A Passionate <span className="text-blue-600 font-semibold">Full-Stack Developer</span>
//         </p>

//         <p className="mt-6 text-lg text-gray-700 text-justify">
//           Welcome to my portfolio! I'm Murugesh, a dedicated full-stack developer
//           passionate about building scalable, responsive, and user-friendly web applications.
//         </p>

//         {/* Social Icons */}

//         <div className="flex items-center gap-5 mt-8 animate-trending">
//             <a href="https://www.linkedin.com/in/murugesan-s" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 animate-bounce"><FaLinkedin size={28} /></a>
//             <a href="https://github.com/M-u987" target="_blank"  rel="noopener noreferrer" className="hover:text-blue-600 animate-bounce" ><FaGithub size={28} /></a>
//             <a href="https://www.instagram.com/im_muru?igsh=a3Roem51amR1YTIy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 animate-bounce"><RiInstagramFill size={28} /></a>
//             <a href="https://www.youtube.com/@Ilandhaimurugeshcreation" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 animate-bounce"><FaYoutube size={28} /></a>
//         </div>

//         {/* CV Button */}
//         <a
//         href="/Murugesh_Resume.pdf"
//         download="Murugesh_Resume.pdf"
//         className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition animate-trending"
//         >
//             Download My CV
//         </a>


//         {/* CV Button */}
        
//       </div>

//       {/* Image */}
//       <div className="md:w-1/2 flex justify-center">
//         <img
//           src={HeroImg}
//           alt="Murugesh Profile"
//           className="w-[300px] md:w-[700px] 
//            hover:scale-105 transition duration-300"
//         />
//       </div>
//     </section>
//   );
// }


import HeroImg from "../components/Hero/Muru.png";
import SocialLinks from "../components/Hero/SocialLinks.jsx";
import Button from "../components/common/Button.jsx";
import { personalData } from "../Data/PersonalData.jsx";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-24 gap-10">
      
      {/* Text */}
      <div className="md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-hero-font text-black leading-tight">
          Hi, <br />
          I'm <span className="text-blue-600">{personalData.name}</span>
        </h1>

        <p className="text-2xl mt-4 text-black">
          A Passionate <span className="text-blue-600 font-semibold">{personalData.role}</span>
        </p>

        <p className="mt-6 text-lg text-gray-700 text-justify">
          {personalData.description}
        </p>

        <SocialLinks links={personalData.socialLinks} />

        <Button
          text="Download My CV"
          href={personalData.resume}
          download="Murugesh_Resume.pdf"
        />
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImg}
          alt="Murugesh Profile"
          className="w-[300px] md:w-[700px] hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}
