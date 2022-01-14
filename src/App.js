import React from 'react';
import { useState } from 'react';

import './css/App.css';

import Structure from './structure-components';


import NavBar from './components/NavBar';

import PageTitle from './components/PageTitle';

import AboutMeBlock from './components/AboutMeBlock';

import Home from './components/home';

import Copyright from './components/Copyright';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './components/blog';



function App() {
  const [sideBarOut, setSideBarOut] = useState(false);  


  return (
    <Router>
      <div className={"App" + (sideBarOut? " side-bar-out": "")}>
        <NavBar sideBarOut={sideBarOut}  />
        <Structure.MainArea>
          <PageTitle sideBarOut={sideBarOut} setSideBarOut={setSideBarOut}/> 
          <Structure.MainContent>
            <Switch>
            <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Structure.MainContent>
          <Structure.Footer>
            <Copyright />
          </Structure.Footer>
        </Structure.MainArea>
        <Structure.SideBar setSideBarOut={setSideBarOut}>
          <AboutMeBlock />  
        </Structure.SideBar>  
      </div>
    </Router>
    
  );
}



export default App;
