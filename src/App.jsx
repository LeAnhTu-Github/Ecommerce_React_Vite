import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Terms1 from "./pages/Terms1";
import Terms2 from "./pages/Terms2";
import Terms3 from "./pages/Terms3";
import Login from "./pages/login";
import Register from "./pages/Register";
import Confirm from "./pages/Confirm";
import GoogleCallback from "./pages/GoogleCallback";
import ConfirmEmail from "./pages/ConfirmEmail";
import Myprofile from "./pages/Myprofile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/auth/confirm-email" element={<ConfirmEmail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="about" element={<About />} />
        <Route path="terms1" element={<Terms1 />} />
        <Route path="terms2" element={<Terms2 />} />
        <Route path="terms3" element={<Terms3 />} />
      </Route>
    </Routes>
  );
}

export default App;
