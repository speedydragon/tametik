import React from 'react';
import "./App.css"
import Benefits from './components/benefits/Benefits';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Signin from './components/signin/Signin';
import Steps from './components/steps/Steps';
import Teamworking from './components/teamworking/Teamworking';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signin/>
      <Benefits/>
      <Steps/>
      <Teamworking/>
      <Footer/>
    </div>
  );
}

export default App;