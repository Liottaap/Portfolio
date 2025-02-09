import { BrowserRouter , Routes , Route } from "react-router-dom";

import Works  from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Header from "./pages/Header";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>  
    );
}

export default App;
