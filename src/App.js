import logo from './logo.svg';
import './App.css';

import First from './components/First';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import StateEg from './components/StateEg';
import Table1 from './components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<StateEg/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/table' element={<Table1/>}/>
        <Route path='/axios' element={<ApiGet/>}/>
      </Routes>
      { /*<First/> */} 
     


    </div>

  );
}

export default App;
