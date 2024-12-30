import React, { useEffect, useState } from 'react';
import Heading from '../../Shared/Heading';

const ChefRecommends = () => {
    const [recommend,setRecommend] = useState([])
    useEffect(()=>{
fetch('menu.json')
.then(res => res.json())
.then(data => setRecommend(data.slice(10,13)))
    },[])
    return (
        <div className='mb-24'>
            <Heading heading={'CHEF RECOMMENDS'} subHeading={'---Should Try---'}></Heading>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10'>
                {
                    recommend.map(reco => <div key={reco._id} className='bg-base-200'>
                        <div>
                            <img className='w-full' src={reco.image} alt="" />
                            <div className='text-center text-black'>
                                <h2 className='my-3 font '>{reco.name}</h2>
                                <p className='my-2 font text-xs'>{reco.recipe}</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'><button className='rounded-xl border-b-2 border-yellow-700 px-5 py-2 text-yellow-700 my-4 bg-base-300 hover:bg-slate-800'>Add to card</button></div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;