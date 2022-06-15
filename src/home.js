import { useEffect, useState } from "react";

import Login from "./login";
import Trains from "./trains";

import { loginApiCall } from "./utils";

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  const handleLogin = async (userName, password) => {
    setErrorMessage("");
    const resData = await loginApiCall(userName, password);
    if (resData.access_token) {
      setIsLogged(true);
      localStorage["token"] = resData.access_token;
    } else {
      setIsLogged(false);
      resData.status
        ? setErrorMessage("Invalid Username or Password")
        : setErrorMessage("Login failed");
    }
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.clear();
  };

  return (
    <>
      {!isLogged && (
        <Login handleLogin={handleLogin} errorMessage={errorMessage} />
      )}
      {isLogged && <Trains handleLogout={handleLogout} />}
    </>
  );
};

export default Home;
