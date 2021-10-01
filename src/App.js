import { LinearProgress } from '@material-ui/core';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 


const Layout = React.lazy(()=>import('./components/Layout'))

 
const loading = () => { return( <LinearProgress/> ) }

function App() {
  return (
    <BrowserRouter>
        <React.Suspense fallback = { loading }>
            <Switch>
                <Route path="/"     render={(props) => <Layout {...props} />} />
                {/* <Route exact path="/home"      name="Home"      render={(props) => <Home {...props} />} />
                <Route exact path="/services"  name="services"  render={(props) => <Services {...props} />} />
                <Route exact path="/portfolio" name="portfolio" render={(props) => <Portfolio {...props} />} />
                <Route exact path="/about"     name="about"     render={(props) => <About {...props} />} />
                <Route exact path="/contact"   name="contact"   render={(props) => <Contact {...props} />} /> */}
            </Switch>
        </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
