import React, { useEffect, useState } from "react";
import { AuthContext } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import './static/styles/styles.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
      <BrowserRouter>
        {isAuth && <Navbar/>}
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;