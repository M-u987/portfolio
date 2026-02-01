// import { Bars3Icon } from '@heroicons/react/24/solid'
// import { useState } from 'react';
// export default function Header() {
//     const[toggleMenu,settoggleMenu]=useState(false);
//   return (
//       <header className="flex justify-between  px-1 py-2 bg-secondary">
//         <a className="font-bold text-white" href="#">Murugesh</a>
//         <nav className="hidden md:block"> 
//             {/* hidden ->Defauld Mobile view hide 
//             md- Medium Device show */}
//             <ul className="flex text-white">
//                 <li><a href="/">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#project">Projects</a></li>
//                 <li><a href="#skills">Skills</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </nav>

//         <nav className="block md:hidden mobile-nav"> 
//             {toggleMenu && <ul className="flex flex-col text-white">
//                 <li><a href="/">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#project">Projects</a></li>
//                 <li><a href="#skills">Skills</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>}
//         </nav>
//         <button onClick={()=>settoggleMenu(!toggleMenu)} className='block md:hidden' ><Bars3Icon className="text-white h-4"/></button>
//       </header>
//   );
// }



import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-white">
          Murugesh
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white font-medium">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#project" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="md:hidden text-white"
        >
          {toggleMenu ? <XMarkIcon className="h-6" /> : <Bars3Icon className="h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="md:hidden bg-secondary px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li><a href="#project" onClick={() => setToggleMenu(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
