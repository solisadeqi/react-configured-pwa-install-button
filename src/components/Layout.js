import React from 'react'
 
const Navbar = React.lazy(()=>import('./navbar/Navbar'))
const PagesContent = React.lazy(()=>import('./PagesContent'))
 

const Layout = () => {
    return (
        <>
         <Navbar/>   
         <PagesContent/>
        </>
    )
}

export default Layout
