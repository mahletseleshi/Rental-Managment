import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Shops from "./pages/shops/Shops"
import Movies from "./pages/movies/Movies"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Register from "./components/Register/Register"
import LogIn from "./components/LogIn/LogIn"
 
function App() {
  return (
    <BrowserRouter>
       {/* <Navbar /> */}
       {/* <LogIn/> */}
      <Routes>
        <Route index element={<Home />}/>
        <Route path="shops" element= {<Shops />}/>
        <Route path="movies" element= {<Movies />}/>
        <Route path="about" element= {<About />}/>
        <Route path="contact" element= {<Contact />}/>
        <Route path="/login" element= {<LogIn />}/>
        <Route path="/signup" element= {<Register />}/>
     </Routes>
     {/* <Footer /> */}
   </BrowserRouter>
  );
}

export default App;
