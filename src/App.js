import React,{useState} from 'react';
import "./App.css"
import SignupContainar from "./components/form/SignupContainar";
import Benefits from './components/benefits/Benefits';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Signin from './components/signin/Signin';
import Steps from './components/steps/Steps';
import Teamworking from './components/teamworking/Teamworking';


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      {modalOpen && <SignupContainar setOpenModal={() => setModalOpen(false)} />}
      <Navbar/>
      <Signin setOpenModal={() => setModalOpen(true)}/>
      <Benefits/>
      <Teamworking/>
      <Steps/>
      <Footer/>
    </div>
  );
}

export default App;