

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import CorePython from './Components/CorePython';
import AdvancePython from './Components/AdvancePython';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
// import Introduction from './Components/Introduction';

function App() {
    return (
        <BrowserRouter>
        <div>
        <Menu />
        <Switch>
        <Route path="/" exact component= {Home} />
        <Route path="/CorePython" exact component= {CorePython} />
        <Route path="/AdvancePython" exact component= {AdvancePython} />
        <Route path="/Project" exact component= {Project} />
        <Route path="/About" component= {About} />
        <Route path="/Contact" component= {Contact} />
        {/* <Introduction /> */}
        </Switch>
        <Footer />
        </div>
        </BrowserRouter>
      )
}

export default App;
