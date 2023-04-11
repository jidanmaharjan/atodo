import { useEffect, useState } from "react";
import "./App.css";

//component imports
import Login from "./components/Login";
import List from "./components/List";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (user !== "admin") {
      localStorage.removeItem("user");
    }
  }, [user]);
  if (!user) {
    return <Login setUser={setUser} />;
  } else {
    return <List setUser={setUser} />;
  }
}

export default App;
