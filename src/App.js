import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Playit from './components/Playit/Playit';
import SecondNavbar from './components/SecondNavbar/SecondNavbar';
import Categories from './components/Categories/Categoriges';
import { useState } from 'react';

function App() {

  const [openCategories, setOpenCategories] = useState(false)

  return (
   <div className='app-container'>
    {/* <Login/> */}
     {!openCategories &&  <Playit setOpenCategories={setOpenCategories} /> }
      {openCategories && <Categories />}


    
   
   </div>
)}
export default App;
