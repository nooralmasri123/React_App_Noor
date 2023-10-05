
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Profile from './profile';


function App() {
  return (
     <>
        <Header />

         <Router>
            <Routes>
               <Route path="/" Component={Main}></Route>
               <Route path="/Browse" Component={Browse} ></Route>
               <Route path="/profile" Component={Profile} ></Route>

            </Routes>
         </Router>

     </>
  ); 
}

export default App;