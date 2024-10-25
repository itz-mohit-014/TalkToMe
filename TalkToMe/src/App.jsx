import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./component/Home";
import HomePage from "./component/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
   <HomePage/>
  );
}

export default App;
