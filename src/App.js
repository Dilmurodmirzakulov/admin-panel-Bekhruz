import React, { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Login from "./components/Login";
import Cookies from "js-cookie";

function App() {
  function removeFromCookie() {
    Cookies.remove("success", { path: "/" });
    Cookies.remove("username", { path: "/" });
    console.log("Deletedd");
  }
  function addToCookie(x) {
    Cookies.set("success", true);
    Cookies.set("username", x);
  }
  const cookieState = Cookies.get("success");
  const username = Cookies.get("username");

  const [success, setSuccess] = useState(cookieState);

  // const [username, setUsername] = useState("");

  console.log("success", success);
  return (
    <div className="App">
      {!success && (
        <Login
          setSuccess={setSuccess}
          // setUsername={setUsername}
          addToCookie={addToCookie}
        />
      )}
      {success && (
        <>
          <Header
            setSuccess={setSuccess}
            username={username}
            removeFromCookie={removeFromCookie}
          />
          <Content />
        </>
      )}
    </div>
  );
}

export default App;
