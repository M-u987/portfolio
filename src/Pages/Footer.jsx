import FooterLinks from "../components/footer/FooterSocial";
import { FooterData } from "../data/FooterData";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold ">{FooterData.heading}</h2>
          <p className=" text-sm leading-relaxed">
            {FooterData.description}
          </p>
        </div>

          <FooterLinks links={FooterData.FooterLinks}/>
        

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold  mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About</a></li>
            <li><a href="#education" className="">Eduction</a></li>
            <li><a href="#project" className="">Projects</a></li>
            <li><a href="#skills" className="">Skills</a></li>
            <li><a href="#contact" className="">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold  mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/" className="">Help Center</a></li>
            <li><a href="/" className="">Privacy Policy</a></li>
            <li><a href="/" className="">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Sazs Apps. All rights reserved.
      </div>
    </footer>
  );
}
