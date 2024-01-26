import React, { useState } from 'react';
import './Home.css';

import Navbarr from '../../components/Home/Navbarr';
import CarouselHome from '../../components/Home/CarouselHome';
import OurService from '../../components/Home/OurService';
import Feedback from '../../components/Home/Feedback';
import Videos from '../../components/Home/Videos';
import Footer from '../../components/Home/Footer';
import CoursesList from './../../components/Home/CoursesList';
import Chatbot from './../Chatbot/Chatbot';

const Home = () => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div>
            <Navbarr />
            <CarouselHome />
            <OurService />
            <CoursesList />
            <Feedback />
            <Videos />
            <Footer />

            {/* Chat Support Button */}
            <div
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 100,
                }}
            >
                <button className="chat-support-button" onClick={toggleChat}>Chat Support</button>
            </div>

            {/* Chatbot */}
            {showChat && <Chatbot onClose={toggleChat} />}
        </div>
    );
};

export default Home;
