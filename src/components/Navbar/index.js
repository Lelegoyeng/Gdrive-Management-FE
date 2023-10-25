import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="bg-black text-white p-4 flex flex-col md:flex-row items-center justify-between">
                <div>
                    <Link
                        className="flex items-center mb-4 md:mb-0"
                        to={{
                            pathname: '/',

                        }}
                    >
                        <img src={logo} alt="Logo" className="h-8 w-8" />
                        <span className="ml-2 text-lg font-bold">Grive Management</span>
                    </Link>

                </div>

                {/* Centered Search Input */}
                <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full md:w-auto bg-gray-800 text-white p-2 rounded focus:outline-none"
                    />
                </div>

                {/* Options in the Top Right Corner */}
                <div className="flex items-center space-x-4 relative">
                    <div className='font-semibold text-gray-600 hover:text-gray-300 cursor-pointer'>Setting</div>
                    <div className='font-semibold text-gray-600 hover:text-gray-300 cursor-pointer'>Storage</div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
