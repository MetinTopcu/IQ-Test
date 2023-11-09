import './App.css'
import React, { useEffect } from "react";
import Home from './components/Home';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Start from './components/Start';

import Loading from './components/Loading'

import { useContext } from "react"; //1.adım eski
import StartContext from './Context/Context'; //2.adım eski
import Finish from './components/Finish';
import NotFound from './components/NotFound';


function App() {
  const {loading,LoadingAct,navbar} = useContext(StartContext); //3.adım eski

  useEffect(() =>{
    LoadingAct();
  },[])

  return (
    <div className='App'>
      <Navbar />
      {loading ? <Loading /> : 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/finish' element={<Finish />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      }
      {navbar && <Footer />}
    </div>
  )
}

export default App
