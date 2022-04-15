import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Categories from "./pages/Home/Categories/Categories";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/categories" element={<Categories></Categories>}></Route>
            </Routes>
        </div>
    );
}

export default App;
