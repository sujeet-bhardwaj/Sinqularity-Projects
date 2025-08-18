import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Register from './Authentication/Register'
import Login from "./Authentication/login";
import Profile from "./Authentication/Profile";
import { createContext, useState } from 'react';
export const AuthContext = createContext();
export default function App() {
   const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
<AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
      <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
             <Route path="/profile" element={< Profile/>} />
      </Routes>
</AuthContext.Provider>

   

      
  
    </>
  );
}
