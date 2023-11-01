import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SevenDayCalendar from './calendar';
import Wishlist from "../src/wishlist.js"
import Addtocart from "../src/addTocart.js"
import Login from "../src/auth/login.js"
import NavbarHeader from "../src/auth/Navbar.js"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Calendar' element={<SevenDayCalendar />} />
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/addtocart' element={<Addtocart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
