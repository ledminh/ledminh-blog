import React from 'react';
import { useState } from 'react';

import './css/App.css';

import MainArea from './components/MainArea';

import NavBar from './components/NavBar';

import PageTitle from './components/PageTitle';

import SideBar from  './components/SideBar';
import AboutMeBlock from './components/AboutMeBlock';

import MainContent from './components/MainContent';
import Home from './components/Home';

import Footer from './components/Footer';


function App() {
  const [sideBarOut, setSideBarOut] = useState(false);

  return (
    <div className={"App" + (sideBarOut? " side-bar-out": "")}>
      <NavBar sideBarOut={sideBarOut}  />
      <MainArea>
        <PageTitle sideBarOut={sideBarOut} setSideBarOut={setSideBarOut}/> 
        <MainContent>
          <Home />
        </MainContent>
        <Footer />
      </MainArea>
      <SideBar setSideBarOut={setSideBarOut}>
        <AboutMeBlock />  
      </SideBar>  
    </div>
  );
}



export default App;
