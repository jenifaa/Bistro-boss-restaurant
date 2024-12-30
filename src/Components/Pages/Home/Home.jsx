import React from 'react';
import Banner from './Banner';
import OnlineOrder from './OnlineOrder';
import BistroBoss from './BistroBoss';
import OurMenu from './OurMenu';
import CallUs from './CallUs';
import ChefRecommends from './ChefRecommends';
import Feature from './Feature';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <BistroBoss></BistroBoss>
            <OurMenu></OurMenu>
            <CallUs></CallUs>
           <ChefRecommends></ChefRecommends>
           <Feature></Feature>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;