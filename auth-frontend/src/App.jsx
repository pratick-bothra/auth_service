import { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("access_token")
  );

  const logout = () => {
    localStorage.removeItem("access_token");
    setLoggedIn(false);
  };

  return (
    <>
      {loggedIn ? (
        <Profile onLogout={logout} />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
