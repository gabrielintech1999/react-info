import { useState } from "react";
import Toggle from "./components/toggle";

function App() {
  const [toggle, setToggle] = useState(false);

  const styles = {
    background: toggle ? "#000" : "#fff",
    color: toggle ? "#fff" : "#000",
    //transition: "all 1s linear"
  };

  function handleToggle(e) {
    console.log(e.target.checked);
    setToggle(e.target.checked);
  }
  return (
    <>
      <nav style={styles}>
        <div>ReactFacts</div>
        <p>React Course - Project 1</p>
        <Toggle onToggle={handleToggle} />
      </nav>

      <main style={styles}>
        <h1>Fun facts about React</h1>

        <ul>
          <li>Was first released in 2013 </li>
          <li>Was originally created by Jordan Walke</li>
          <li> Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook Powers</li>
          <li>thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </>
  );
}

export default App;
