import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/page/home';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import SignIn from './components/page/signin';
import SignUp from './components/page/signup';
import Shop from './components/page/shop';
import CheckOut from './components/chekout_section';
import Table from './components/about_tables';
import YourCart from './components/cart_section';

function App() {
  const location = useLocation();
  return (
    <>
      {
        !location.pathname?.includes('/signup') && !location.pathname?.includes('/signin') && <Header />
      }
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Shop/>} path='/shop'/>
        <Route element={<YourCart/>} path='/yourcart'/>
        <Route element={<CheckOut/>} path='/checkout'/>
        <Route element={<Table/>} path='/table'/>
        {/* <Route element={<Shop/>} path='/product/:id'/> */}
        <Route element={<SignUp />} path="/signup" />
        <Route element={<SignIn />} path="/signin" />
      </Routes>
      {
        !location.pathname?.includes('/signup') && !location.pathname?.includes('/signin') && <Footer />
      }
    </>
  );
}

export default App;
