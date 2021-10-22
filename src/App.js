import React from 'react';

import './css/App.css';

import Header from './components/Header';
import SideBar from  './components/SideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
      <MainContent />
      <Footer />
    </div>
  );
}



export default App;
