import React, { useEffect, useState } from 'react';
import Heading from '../../Shared/Heading';

const OurMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.slice(0, 6))); // Apply slice to data before passing to setMenu
    }, []);
    return (
        <div className='mb-14'>
            <Heading heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></Heading>
           
            <div className='grid grid-cols-2 gap-7 my-10'>
                {
                    menu.map(item => <div key={item._id} className='flex gap-4 items-center'>
                        <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[105px]' src={item.image} alt="" />
                        <div>
                            <p className='font text-gray-700'>{item.name}-------------</p>
                            <p className='text-xs text-gray-500 my-3'>{item.recipe}</p>
                        </div>
                        <p className='text-yellow-600 text-x;'>${item.price}</p>
                    </div>)
                }
            </div>
           <div className='flex justify-center items-center my-4'> <button className='text-xl font py-2 px-3 border-b-2 border-black rounded-xl'>View Full Menu</button></div>
        </div>
    );
};

export default OurMenu;