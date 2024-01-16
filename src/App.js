import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Navbar } from "./components/Navbar"; 
import { useState } from "react";
import { Contact } from "./pages/Contact";




function App() {
  const id="courses";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className=" bg-[#2C1F4A] w-screen h-screen relative ">
     


    <Navbar  isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses id="courses"/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contact" element={<Contact/>}/>
        
        

        </Routes>
        
        
        
    </div>
  );
}

export default App;
