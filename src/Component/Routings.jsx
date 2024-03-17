import React from "react";
import { Homes } from "./Home-page";
import { BrowserRouter, Routes, Route } from "react-router-dom"
export const Routings = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/new-project" element={<Homes />}></Route>
            </Routes>
        </BrowserRouter>
    </>)
}