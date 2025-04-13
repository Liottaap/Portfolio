import { BrowserRouter , Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Works } from "./pages/Works";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/works" element={<Works />} />
        {/* <Route path="/works/:id" element={<ProjectDetail />} /> */}
      </Routes>
    </BrowserRouter>  
    );
}

export default App;
