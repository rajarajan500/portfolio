import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-[#233142] h-screen flex  justify-center font-["lemon"]'>
      <h1
        className="tracking-wider  animate-in  fade-in duration-1000 delay-200 py-5 text-8xl font-semibold text-white   "
        style={{}}
      >
        WELCOME
      </h1>
      
      
    </div>
  );
}

export default App;
