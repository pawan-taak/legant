import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/page/home';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import SignIn from './components/page/signin';
import SignUp from './components/page/signup';
import Table from './components/about_tables';
import CheckOut from './components/chekout_section';

function App(){
  return (
    <>

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
    </>
  );
}

export default App;
