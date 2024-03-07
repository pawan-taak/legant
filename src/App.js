import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/page/home';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import SignIn from './components/page/signin';
import SignUp from './components/page/signup';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <>
<<<<<<< HEAD
      {
        !location.pathname?.includes('/signup') && !location.pathname?.includes('/signin') && <Header />
      }
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<SignIn />} path="/signin" />
      </Routes>
      {
        !location.pathname?.includes('/signup') && !location.pathname?.includes('/signin') && <Footer />
      }
=======

<BrowserRouter>
{window.location.pathname !=='/signin' && window.location.pathname !=='/signup' && <Header/>}
<Routes>
  <Route element={<Home/>} path="/" />
  <Route element={<SignIn/>} path="/signin" />
  <Route element={<SignUp/>} path="/signup" />

</Routes>
{window.location.pathname !=='/signin' && window.location.pathname !=='/signup' && <Footer/>}
</BrowserRouter>
>>>>>>> 76ecbe6a1cd07bf761117a8857ee782a980a1cf3
    </>
  );
}

export default App;
