import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import RegisterStudent from "./view/RegisterStudent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerStudent" element={<RegisterStudent />} />
      </Routes>
    </div>
  );
}

export default App;
