import React from 'react';
import Navbarr from '../../components/Home/Navbarr';
import CarouselHome from '../../components/Home/CarouselHome';
import OurService from '../../components/Home/OurService';
import Feedback from '../../components/Home/Feedback';
import Videos from '../../components/Home/Videos';
import Footer from '../../components/Home/Footer';
import CoursesList from './../../components/Home/CoursesList';

const Home = () => {
    return (
        <div>
            <Navbarr></Navbarr>
            <CarouselHome></CarouselHome>
            <OurService></OurService>
            <CoursesList></CoursesList>
            <Feedback></Feedback>
            <Videos></Videos>
            <Footer></Footer>
        </div>
    );
};

export default Home;