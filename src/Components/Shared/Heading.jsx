import React from 'react';

const Heading = ({heading,subHeading}) => {
    return (
        <div className='text-center md:w-3/12 mx-auto mb-14'>
            <p className='text-yellow-600 mb-3'>{subHeading}</p>
            <h2 className='text-3xl font-semibold my-3 border-t-2 border-b-2 py-4'>{heading}</h2>
        </div>
    );
};

export default Heading;