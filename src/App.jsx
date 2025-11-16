import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Login from "./pages/login";
import Register from "./pages/Register";
import Confirm from "./pages/Confirm";
import GoogleCallback from "./pages/GoogleCallback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
