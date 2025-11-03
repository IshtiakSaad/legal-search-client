import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center py-6'>
            <div className='w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
            <p className='ml-3 text-gray-600'>Fetching Document Summary...</p>
        </div>
    );
};

export default Loader;