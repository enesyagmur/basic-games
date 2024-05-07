import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import Xox from "./games/xox/Xox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xox" element={<Xox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
