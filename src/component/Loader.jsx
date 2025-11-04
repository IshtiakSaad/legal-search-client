import React from 'react';

const Loader = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center py-16'>
            <div className='w-5 h-5 border-4 border-amber-500 border-t-transparent rounded-full animate-spin'></div>
            <p className='mt-4 fond-medium tracking-wide text-sm text-gray-600'>Analyzing document summary...</p>
        </div>
    );
};

export default Loader;