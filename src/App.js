import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components /Home";
import PlaceToStay from "./components /PlaceToStay";

const App = () => {
  const [dimension, setDimension] = useState({
    width: 0,
  });

  const handleResize = () => {
    setDimension({
        width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home dimension={dimension}/>}/>
      <Route path="placetostay" element={<PlaceToStay dimension={dimension}/>} />
    </Routes>
  );
}

export default App;
