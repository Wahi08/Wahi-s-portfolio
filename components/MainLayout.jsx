import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div>
            <h1>MainLayout</h1>
            <hr/>
            <main>{children}</main>
        </div>
    )
}

export default MainLayout;