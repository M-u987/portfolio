import AboutImg from "../assets/About.jpg";

export default function About() {
    return <section className="flex flex-col md:flex-row px-5" >
        <div className="py-2 md:w-1/2">
            <img src={AboutImg} alt="About Me"/>
        </div>
        <div className="md:w-1/2 flex flex-center ">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-hero-font border-b-2 mb-5 w-[180px] flex justify-center ">About Me!</h2>
                <p className="pb-5">I am Murugesh, a dedicated and passionate full-stack developer with a strong foundation in both front-end and back-end technologies.</p>
                <p className="pb-5">I thrive on creating dynamic and responsive web applications that provide seamless user experiences. </p>
                <p className="pb-5">With a keen eye for detail and a commitment to writing clean, efficient code, I continuously seek to enhance my skills .</p>
            </div>
        </div>
    </section>
}
