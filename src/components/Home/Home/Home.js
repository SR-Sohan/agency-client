import React from 'react';
import Client from '../Client/Client';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Headers from '../Headers/Headers';
import ProvideServices from '../ProvideServices/ProvideServices';
import WorkSlider from '../WorkSlider/WorkSlider';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Client></Client>
            <ProvideServices></ProvideServices>
            <WorkSlider></WorkSlider>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;