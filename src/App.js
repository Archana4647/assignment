import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import Addblog from './components/Addblog';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
  
        <Route path='/add' element={<Addblog/>}/> 
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      
       

    </div>
  );
}

export default App;
