import React from 'react';
import { useState } from 'react';

import './css/App.css';

import Structure from './structure-components';


import NavBar from './components/NavBar';

import PageTitle from './components/PageTitle';

import AboutMeBlock from './components/AboutMeBlock';

import Home from './components/Home';

import Copyright from './components/Copyright';


function App() {
  const [sideBarOut, setSideBarOut] = useState(false);

  return (
    <div className={"App" + (sideBarOut? " side-bar-out": "")}>
      <NavBar sideBarOut={sideBarOut}  />
      <Structure.MainArea>
        <PageTitle sideBarOut={sideBarOut} setSideBarOut={setSideBarOut}/> 
        <Structure.MainContent>
          <Home />
        </Structure.MainContent>
        <Structure.Footer>
          <Copyright />
        </Structure.Footer>
      </Structure.MainArea>
      <Structure.SideBar setSideBarOut={setSideBarOut}>
        <AboutMeBlock />  
      </Structure.SideBar>  
    </div>
  );
}



export default App;
