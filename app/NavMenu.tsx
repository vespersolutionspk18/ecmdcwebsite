import { useRouter } from 'next/router';
import { useState } from 'react';

const NavMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close submenu after navigation
  };

  return (
    <div className="relative">
      {/* Main Menu Item */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-600 text-white cursor-pointer"
      >
        Menu
      </div>

      {/* Submenu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
          <a
            onClick={() => handleNavigate('/page1')}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
          >
            Link 1
          </a>
          <a
            onClick={() => handleNavigate('/page2')}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
          >
            Link 2
          </a>
          <a
            onClick={() => handleNavigate('/page3')}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
          >
            Link 3
          </a>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
