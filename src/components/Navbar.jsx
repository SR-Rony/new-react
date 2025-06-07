import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [menu,setMenu]= useState([

    {name:"Home",href:"/"},
    {name:"About",href:"/about"},
    {name:"Count",href:"/count"},
    {name:"Dashboard",href:"/dashboard"},
    {name:"Todo",href:"/todo"},

  ])

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">Brand</div>
          <div className="hidden md:flex space-x-6">
            {menu.map((item,index)=>(
              <Link key={index} to={item.href} >{item.name}</Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          {menu.map((item,index)=>(
              <Link className="block py-2" key={index} to={item.href} >{item.name}</Link>
            ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar