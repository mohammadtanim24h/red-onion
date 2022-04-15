import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Categories from "./pages/Home/Categories/Categories";
import Login from "./pages/Login/Login/Login";
import SignUp from "./pages/Login/SignUp/SignUp";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/categories" element={<Categories></Categories>}></Route>
            </Routes>
        </div>
    );
}

export default App;
