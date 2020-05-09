import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar-2'
import Home from './components/Home'
import Cart from './components/Cart'
import AkGallery from './components/AkGallery'
import About from './components/RestData'

function App() {
  return (
    <BrowserRouter>
            <div className="App">
            
              <Navbar/>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/about" component={About}/>
                    <Route path="/AkGallery" component={AkGallery}/>

                  </Switch>
             </div>
       </BrowserRouter>
  );
}

export default App;
