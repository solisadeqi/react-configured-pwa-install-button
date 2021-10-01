import React from 'react'
 
const Home = React.lazy(()=>import('./components/pages/Home' ))
const Services = React.lazy(()=>import('./components/pages/Services'))
const Portfolio = React.lazy(()=>import('./components/pages/Portfolio'))
const About = React.lazy(()=>import('./components/pages/About'))
const Contact = React.lazy(()=>import('./components/pages/Contact'))


const routes = [

  { path: "/",          exact: true,    name: "Home",         component:  Home       },  
  { path: "/home",      exact: true,    name: "Home",         component:  Home       },  
  { path: "/services",  exact: true,    name: "Services",     component: Services    },
  { path: "/portfolio", exact: true,    name: "Portfolio",    component: Portfolio   },
  { path: "/about",     exact: true,    name: "About",        component: About       },
  { path: "/contact",   exact: true,    name: "Contact",      component: Contact     }
  
]

export default routes
