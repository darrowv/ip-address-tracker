import WorldMap from "./components/WorldMap";
import UpperPart from "./components/UpperPart";
import "./App.scss";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("")

  const getLocationTwo = (location: String) => {
    // @ts-ignore
    setLocation(location)
  }

  return (
    <main className="App">
      <UpperPart getLocationTwo={getLocationTwo} />
      <WorldMap searchValue={location} />
    </main>
  );
  
}

export default App;
