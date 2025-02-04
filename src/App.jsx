import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Works } from "./components/Works";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/works" element={<Works/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
    );
}

export default App;
