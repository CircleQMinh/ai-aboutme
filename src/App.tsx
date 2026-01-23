import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./layouts/MainLayout";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        
      </Routes>
    </>
  );
}

export default App;
