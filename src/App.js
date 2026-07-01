//import logo from './logo.svg';
import './App.css';
import Header from './Header';
//import Carousel from './Carousel';
import AboutUS from './AboutUS';
import Services from './Services';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import Signup from './Signup';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
             <Route path='/*'  element={
              <>
                <Header/>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/aboutus' element={<AboutUS/>}/>
                  <Route path='/services' element={<Services/>}/>
                 {/* <Route path='/Footer' element={<Footer/>}/>*/}
                                 </Routes>
                <Footer/>
              </>
             }/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>

     {/* <Footer/> */}               {/*
      <Router>
         <Routes>
            <Route  path='/' element={<>
            <Header/>
            <Routes>
            <Route  path='/ ' element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUS/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes>
            </> }/>
              <Route path='/login' element={<Login/>}/>
            <Route path='/siginup'  element={<Signup/>}/>
         </Routes>
      </Router>
                     */}


    </div>
  );
}

export default App;