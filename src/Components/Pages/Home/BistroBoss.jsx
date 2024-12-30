import React from 'react';
import bg from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`}} className='py-16 mt-10 mb-20'>
            <div className='text-center bg-white text-black w-10/12 px-24 py-16 mx-auto my-10'>
                <h2 className='text-4xl font'>BISTRO BOSS</h2>
                <p className='my-3 text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nobis distinctio molestias sit non officia unde odio provident dignissimos doloremque qui asperiores dolorem, porro saepe voluptas in veniam praesentium esse beatae aut quas laboriosam consectetur. Maxime nisi ducimus id non accusantium tempore blanditiis et qui impedit omnis quibusdam, dolore sunt.</p>
            </div>
        </div>
    );
};

export default BistroBoss;