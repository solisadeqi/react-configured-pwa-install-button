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
            </Switch>
        </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
