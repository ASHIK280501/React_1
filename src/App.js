import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Resturant from './pages/Basics/Resturant.js';
import Weather from "./pages/Basics/weather/weather.js";


const App = () => {
  return (
    <>     
    <Router> 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand text-primary pl-2" to="/">RESTURANT</Link>
  <Link class="navbar-brand text-primary" to="/weather ">WEATHER</Link>

</nav>  
  <Routes>
    <Route exact path='/' element={<Resturant/>}></Route>
    <Route exact path="/weather" element={<Weather/>}></Route>
  </Routes>
  </Router> 
  
  </> 
    
  )
}
export default App;
