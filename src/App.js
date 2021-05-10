import "./App.css";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import LoginForm from "./Forms/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isloginRequired, setIsLoginRequired] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "True") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn === false) {
      localStorage.removeItem("isLoggedIn");
    } else {
      localStorage.setItem("isLoggedIn", "True");
    }
  }, [isLoggedIn]);

  function loginHandler() {
    setIsLoginRequired(true);
  }

  function logoutHandler() {
    setIsLoggedIn(false);
  }

  function loginCloseHandler(loginStatus) {
    setIsLoginRequired(false);
    if (loginStatus === "Success") {
      setIsLoggedIn(true);
    }
  }

  return (
    <div className="App">
      <Navigation
        loggedIn={isLoggedIn}
        onLogin={loginHandler}
        onLogout={logoutHandler}
      ></Navigation>
      {isloginRequired && <LoginForm onClose={loginCloseHandler}></LoginForm>}
    </div>
  );
}

export default App;
