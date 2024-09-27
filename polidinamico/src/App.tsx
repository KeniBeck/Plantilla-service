import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Recover from "./view/Recover";
import Register from "./view/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
