import {Home} from "./pages/Home";
import {Header} from "./components/Navbar/NavigataionBar";
import {Route, Routes} from "react-router-dom";
import {AddUser} from "./pages/AddUser";
import {NotFound} from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import {About} from "./pages/AboutDevelopers";
import AboutProject from "./pages/AboutProject";
import Contact from "./pages/contact";
import {Footer} from "./pages/Footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/addUser"} element={<AddUser/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/aboutProject"} element={<AboutProject/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;