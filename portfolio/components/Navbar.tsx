import React, { FunctionComponent } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)}
        className="hover:text-green"
        >{name}</span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);
  return (
    <div className='flex justify-between px-5 py-3 my-3'>
      <span className='text-xl font-bold border-b-4 b border-green md:text-2xl text-green'>
        {activeItem}
      </span>
      <div className='flex space-x-3 text-red-400 font-lg'>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='About'
          route='/'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Projects'
          route='/projects'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Resume'
          route='/resume'
        />
      </div>
    </div>
  );
};

export default Navbar;

// {
//   activeItem !== "About" && (
//     <Link href='/'>
//       <a>
//         <span onClick={() => setActiveItem("About")}>About</span>
//       </a>
//     </Link>
//   )
// }
// {
//   activeItem !== "projects" && (
//     <Link href='/projects'>
//       <a>
//         <span onClick={() => setActiveItem("Projects")}>Projects</span>
//       </a>
//     </Link>
//   )
// }
// {
//   activeItem !== "Resume" && (
//     <Link href='/resume'>
//       <a>
//         <span onClick={() => setActiveItem("Resume")}>Resume</span>
//       </a>
//     </Link>
//   )
// }
