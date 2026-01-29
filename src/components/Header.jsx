import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header() {
    const[toggleMenu,settoggleMenu]=useState(false);
  return (
      <header className="flex justify-between  px-1 py-2 bg-secondary">
        <a className="font-bold text-black" href="#">Murugesh</a>
        <nav className="hidden md:block"> 
            {/* hidden ->Defauld Mobile view hide 
            md- Medium Device show */}
            <ul className="flex text-white">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <nav className="block md:hidden mobile-nav"> 
            {toggleMenu && <ul className="flex flex-col text-white">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
            </ul>}
        </nav>
        <button onClick={()=>settoggleMenu(!toggleMenu)} className='block md:hidden' ><Bars3Icon className="text-white h-4"/></button>
      </header>
  );
}