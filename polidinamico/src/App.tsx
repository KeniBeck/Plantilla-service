import { Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Recover from "./view/Recover";
import Register from "./view/Register";
import LoginView from "./view/LoginView";
import ViewPrincipalStuden from "./view/ViewPrincipalStudent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/register" element={<Register />} />
        <Route path="/principalStudent" element={<ViewPrincipalStuden />} />
      </Routes>
    </div>
  );
}

export default App;
