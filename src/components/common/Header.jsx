
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header({theme,toggleTheme}) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-1xl font-bold text-white">
          Murugesan IMC
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white font-medium">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#education" className="hover:text-blue-400">Eduction</a></li>
            <li><a href="#project" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
        <button onClick={toggleTheme} className="ml-4">
        {theme === "light" ? "🌙" : "☀️"}
      </button>

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
            <li><a href="#education" onClick={() => setToggleMenu(false)}>Eduction</a></li>
            <li><a href="#project" onClick={() => setToggleMenu(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
