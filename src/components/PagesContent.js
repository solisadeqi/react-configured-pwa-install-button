import React from 'react'
import { Route, Switch } from 'react-router'
import routes from '../routes'
import '../css/nav.css' 

// const Home = React.lazy(()=>import('./pages/Home'))
// const Services = React.lazy(()=>import('./pages/Services'))
// const Portfolio = React.lazy(()=>import('./pages/Portfolio'))
// const About = React.lazy(()=>import('./pages/About'))
// const Contact = React.lazy(()=>import('./pages/Contact'))


const PagesContent = () => {
    return (
        <div className="page-content">
            <React.Suspense fallback=" Loading ... ">
                <Switch>
                    {
                        routes.map((route, index) => {
                        return (
                        route.component && (
                            <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={(props) => ( <> < route.component {...props} /> </> )}
                            />
                        )
                        )
                    })}
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default PagesContent
