import React from 'react';
import { ShoppingBag, Menu, User, Shirt } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">
                Style<span className="text-indigo-600">Snap</span>
              </span>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Fitting Room
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                New Arrivals
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Collections
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
              <User className="h-6 w-6" />
            </button>
            <button className="sm:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
