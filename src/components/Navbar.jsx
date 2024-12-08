import { NavLink } from "react-router-dom";
import { Bot } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full lg:w-1/3 h-12 p-2 border-b-[1px] border-gray-400 dark:border-gray-800 bg-gray-100 dark:bg-gray-950 opacity-85 z-50">
      <ul className="flex gap-4 items-center text-gray-400 font-bold">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-black dark:text-white" : "hover:text-black dark:hover:text-white"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        {/* Icons aligned to the right */}
        <div className="ml-auto flex gap-3">
          <li className="hover:text-black dark:hover:text-white">
            <Bot />
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </div>
      </ul>
    </nav>
  );
}
