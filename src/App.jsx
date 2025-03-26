import { BrowserRouter , Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>  
    );
}

export default App;
