import Home from "./Components/Home";
import Blog from "./Components/Blog";
import About from "./Components/About";
import ContactUs from "./Components/Contact Us";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";


const App = () =>{
    return(
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Blog" element={<Blog />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/ContactUs" element={<ContactUs />}/>
        </Routes>
    </div>
    )
}




export default App;