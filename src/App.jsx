import { BrowserRouter , Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Layout } from "./components/";
import MainPage from "./pages/MainPage";
import { DWPortfolio } from "./pages/DWPortfolio";
import { UXPortfolio } from "./pages/UXPortfolio";
import WorksItem from './pages/WorksItem'
function App() {

  return (

    <BrowserRouter basename="/Portfolio">
      <Routes>
        {/* <Route path="/" element={<Layout/>}/> */}
        <Route index element={<MainPage/>}/>
        <Route path='UXPortfolio' element={<UXPortfolio/>}/>
        <Route path='/DWPortfolio' element={<DWPortfolio/>}/>
        <Route path="/UXPortfolio/:id" element={<WorksItem/>} />
      </Routes>
    </BrowserRouter>  
    );
}

export default App;
