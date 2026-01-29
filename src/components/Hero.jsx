import HeroImg from "../assets/Muru.png";
import { FaLinkedin,FaGithub,FaYoutube} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Hero() {
    return <section className="flex flex-col md:flex-row px-20 py-32 justify-center items-center">
        <div className="md:w-1/2 flex flex-col" >
            <h1 className=" text-6xl font-hero-font text-black">Hi,<br/>I'm <span className="text-black hover:text-blue-600">Murugesh</span>
                <p className="text-2xl text-black">
                    A Passionate Full-Stack Developer
                </p>
            </h1>
            <div className="flex ">
                <a href="#" className="pr-3 hover:text-blue-600"><FaLinkedin size={30}/></a>
                <a href="#" className="pr-3 hover:text-blue-600"><FaGithub size={30}/></a>
                <a href="#"  className="pr-3 hover:text-blue-600"><RiInstagramFill size={30}/></a>
                <a href="#" className=" hover:text-blue-600"><FaYoutube size={30}/></a>
            </div>
        </div>
        <img src={HeroImg} className="md:w-1/2" alt="Murugesh Profile" />
    </section>
}