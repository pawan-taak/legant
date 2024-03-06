import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/page/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/page/signin';
import SignUp from './components/page/signup';

function App(){
  return (
    <>

<BrowserRouter>

<Routes>
  <Route element={<Home/>} path="/" />
  <Route element={<SignIn/>} path="/signin" />
  <Route element={<SignUp/>} path="/signup" />

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
