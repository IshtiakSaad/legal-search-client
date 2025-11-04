import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { BsFillSuitSpadeFill } from "react-icons/bs";

const navbar = () => {
    return (
        <div className='flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200'>
            <div className='flex items-center gap-2 text-2xl font-bold text-gray-900'><BsFillSuitSpadeFill />HARVEY</div>
            <div className='flex flex-row gap-4'>
                <FiSettings className='text-2xl text-gray-600 cursor-pointer hover:text-gray-900 transition-colors'/>
                <CgProfile className='text-2xl text-gray-600 cursor-pointer hover:text-gray-900 transition-colors'/>
            </div>
        </div>
    );
};

export default navbar;