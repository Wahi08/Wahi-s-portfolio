import React from 'react';
import MainHeader from "@/components/MainHeader"
import Header from '@/components/Header'
import Project from '@/components/Project'
import Footer from '@/components/Footer'

const HomePage = () => {
    return (
        <div className='Homepage'>
            <MainHeader></MainHeader>
            <Header></Header>
            <Project></Project>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
