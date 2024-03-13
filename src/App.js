import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/page/home';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import SignIn from './components/page/signin';
import SignUp from './components/page/signup';
<<<<<<< HEAD
import Table from './components/about_tables';
import CheckOut from './components/chekout_section';
=======
import { useEffect, useState } from 'react';
>>>>>>> 28c706b9f67a3712ad0aefc01780af8846847339

function App() {
  const location = useLocation();
  return (
    <>
<<<<<<< HEAD

<BrowserRouter>
{window.location.pathname !=='/signin' && window.location.pathname !=='/signup' && <Header/>}
<Routes>
  <Route element={<Home/>} path="/" />
  <Route element={<SignIn/>} path="/signin" />
  <Route element={<SignUp/>} path="/signup" />
  <Route element={<Table/>} path='/table'/>
  <Route element={<CheckOut/>} path='/chekout'/>

</Routes>
{window.location.pathname !=='/signin' && window.location.pathname !=='/signup' && <Footer/>}
</BrowserRouter>
=======
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
>>>>>>> 28c706b9f67a3712ad0aefc01780af8846847339
    </>
  );
}

export default App;
