import { useState } from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isAuth, setIsAuth] = useState(false)
  const context = {
    users,
    setUsers,
    posts,
    setPosts,
    isAuth,
    setIsAuth
  };

  return (
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
