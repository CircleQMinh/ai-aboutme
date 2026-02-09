import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { MainLayout } from "./layouts/MainLayout";
import Chat from "./pages/Chat";
import { baseRepoName } from "./shared/types";

const base = baseRepoName

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={`/`} element={<Home />} />

          <Route path={`${base}/`} element={<Home />} />
          <Route path={`${base}/home`} element={<Home />} />
          <Route path={`${base}/chat`} element={<Chat />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        
      </Routes>
    </>
  );
}

export default App;
