import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SevenDayCalendar from './calendar';
import Wishlist from "../src/wishlist.js"
import Addtocart from "../src/addTocart.js"
import Login from "../src/auth/login.js"
import NavbarHeader from "../src/auth/Navbar.js"
import Signup from './auth/signup';
import ForgotPassword from './auth/forgotPassword';
import NewPassword from './auth/newpassword';

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
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/new-password' element={<NewPassword/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
