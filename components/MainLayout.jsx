import React from 'react'
import MainHeader from "./MainHeader"

const MainLayout = ({children}) => {
    return (
        <div className='MainLayout'>
            <MainHeader></MainHeader>          
        </div>
    )
}

export default MainLayout;