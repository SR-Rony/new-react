import { useState } from 'react';
import { FiMenu, FiHome, FiUser, FiSettings, FiShoppingCart, FiX } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', to: '/', icon: <FiHome /> },
  { name: 'Contatos', to: '/contatos', icon: <FiUser /> },
  { name: 'Chat', to: '/chat', icon: <FiShoppingCart /> },
  { name: 'CRM', to: '/crm', icon: <FiSettings /> },
  { name: 'Agenda', to: '/agenda', icon: <FiSettings /> },
  { name: 'Assistentes', to: '/assistentes', icon: <FiSettings /> },
  { name: 'Campanhas', to: '/campanhas', icon: <FiSettings /> },
  { name: 'Configurações', to: '/configurações', icon: <FiSettings /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useParams();

  return (
    <>
      {/* Top-left menu icon (mobile only) */}
      <div className="md:hidden fixed top-4 left-4 z-40">
        <button className={`${isOpen !==true ?"":"hidden"} p-2 text-white bg-[#1c1c22] rounded-md shadow`} onClick={() => setIsOpen(true)}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-[#0e0e12] text-white shadow-md z-30 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:relative md:flex md:w-64
        `}
      >
        <div className="flex flex-col h-full w-64 bg-[#0e0e12] text-white p-4 border-r">
          {/* Close button (mobile only) */}
          <div className="flex justify-between items-center md:hidden mb-4">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <FiX size={24} />
            </button>
          </div>

          <input className='border border-gray-800 p-1 rounded-md mb-3 w-3/4' type="text" />

          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={index}
                  to={item.to}
                  className={`p-2 rounded hover:bg-gradient-to-r from-[#0e0e12] to-red-800 cursor-pointer flex items-center gap-3 ${isActive ? "bg-gradient-to-r from-red-900 to-transparent" : ""}`}
                  onClick={() => setIsOpen(false)} // close on click (optional)
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom section */}
          <div className="mt-auto pt-6 border-t">
            <Link className="p-2 rounded hover:bg-gradient-to-r from-[#0e0e12] to-red-800 cursor-pointer flex items-center gap-3 ">
              <FiSettings />
              Configurações
            </Link>
            <Link className="p-2 rounded hover:bg-gradient-to-r from-[#0e0e12] to-red-800 cursor-pointer flex items-center gap-3 ">
              <FiUser />
              Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
