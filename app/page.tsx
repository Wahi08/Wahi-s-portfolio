import React from 'react';
import MainHeader from "@/components/MainHeader"
import Header from '@/components/Header'
import Project from '@/components/Project'

const HomePage = () => {
    return (
        <div className='Homepage'>
            <MainHeader></MainHeader>
            <Header></Header>
            <Project></Project>
        </div>
    );
};

export default HomePage;
