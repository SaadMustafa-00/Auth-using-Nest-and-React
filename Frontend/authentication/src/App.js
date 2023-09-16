import './App.css';
import 'flowbite';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login/login'
import Signup from './Components/Login/Signup';
import EmailVerification from './Components/Login/EmailVerification';
import FourDigitVerification from './Components/Login/FourDigitVerification';
import NewPassword from './Components/Login/NewPassword';
import Dashboard from './Components/Dashboard/Main/Dashboard';
function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
        {/* Login Modules */}
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/ForgetPassword' element={<EmailVerification/>}/>
        <Route path='/Digitverify' element={<FourDigitVerification/>}/>
        <Route path="/NewPassword/:id" element={<NewPassword />} />

        {/* Dashboard */}
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

