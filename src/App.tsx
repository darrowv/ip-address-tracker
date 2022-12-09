import WorldMap from "./components/WorldMap";
import UpperPart from "./components/UpperPart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInitialGeolocation } from "./redux/geo.slice";
import { AppDispatch } from "./redux/store";
import "./App.scss";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialGeolocation())
  }, [])

  return (
    <main className="App">
      <UpperPart />
      <WorldMap />
    </main>
  );
}

export default App;
