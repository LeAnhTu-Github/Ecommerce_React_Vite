import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Terms1 from "./pages/Terms1";
import Terms2 from "./pages/Terms2";
import Terms3 from "./pages/Terms3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="terms1" element={<Terms1 />} />
        <Route path="terms2" element={<Terms2 />} />
        <Route path="terms3" element={<Terms3 />} />
      </Route>
    </Routes>
  );
}

export default App;
