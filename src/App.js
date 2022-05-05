import React, { useEffect, useState } from "react";
import { AuthContext, BookmarksContext } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import './static/styles/styles.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
      <BookmarksContext.Provider value={{bookmarks, setBookmarks}}>
        <BrowserRouter>
          {isAuth && <Navbar/>}
          <AppRouter/>
        </BrowserRouter>
      </BookmarksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;