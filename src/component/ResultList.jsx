import React from 'react';

const ResultList = ({summary, document}) => {
    return (
        <div className='bg-base-50 shadow-lg mt-6 rounded-lg'>
            <div className='p-6'>
                <h2 className='text-xl font-bold whitespace-pre-line mb-2 text-green-500'>{summary}</h2>
                <p className='text-gray-700 whitespace-pre-line text-sm'>
                    {document}
                </p>
            </div>
        </div>
    );
};

export default ResultList;