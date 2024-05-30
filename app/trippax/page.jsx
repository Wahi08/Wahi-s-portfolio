import React from 'react'
import MainHeader from '@/components/MainHeader'
import TitleHeader from './components/title-header'
import Details from './components/details'

const trippax = () => {
    return (
        <div className='Container'>
            <MainHeader></MainHeader>
            <TitleHeader></TitleHeader>
            <Details></Details>
        </div>
    );
};

export default trippax;