import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Browse from './Browse';


function App() {
  return (
     <>
        <Header />

         <Router>
            <Routes>
               <Route path="/" Component={Main}></Route>
               <Route path="/Browse" Component={Browse} ></Route>
            </Routes>
         </Router>

     </>
  ); 
}

export default App;