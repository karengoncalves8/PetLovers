import { BrowserRouter, Route, Routes } from "react-router-dom";

import '../style/global.css';

import Produtos from "../pages/Produtos";
import Login from "../pages/Login";
import Layout from "./layoult";

function MainRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Rota de Login */}
                <Route path="/" element={<Login />} />

                <Route element={<Layout />}>
                    <Route path="/Produtos" element={<Produtos />} />
                </Route>

            
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes