import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./pages/MainPage";
import { DWPortfolio } from "./pages/DWPortfolio";
import { UXPortfolio } from "./pages/UXPortfolio";
import UXProjectsItem from './pages/UXProjectsItem'
function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/DWPortfolio" element={<DWPortfolio />} />

        {/* UX/UI */}
        <Route path="/UXPortfolio" element={<UXPortfolio />} />
        <Route path="/UXPortfolio/:id" element={<UXProjectsItem />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
