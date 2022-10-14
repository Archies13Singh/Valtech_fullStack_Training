import { Component } from "react";
import { BrowserRouter , Routes, Route, Link, NavLink } from 'react-router-dom';
import Aquaman from "./components/aquaman.components";
import Home from "./components/home.components";
import Notfound from "./components/notfound.components";
import Superman from "./components/superman.components";
import Wonderwomen from "./components/wonderwomen.components";
import Batman from "./components/batman.components";


class App extends Component{
    render(){
        return<div className="container">
            <BrowserRouter>
            {/* <ul><Link to="/">Home Component</Link></ul>
            <ul><Link to="batman">Batman Component</Link></ul>
            <ul><Link to="superman">Superman Component</Link></ul>
            <ul><Link to="wonderwomen">Wonderwomen Component</Link></ul>
            <ul><Link to="aquaman">Aquaman Component</Link></ul>
            <ul><Link to="flash">Not Found Component</Link></ul> */}
            <ul><NavLink className={({isActive})=>isActive? 'box':''} to="/">Home Component</NavLink></ul>
            <ul><NavLink className={({isActive})=>isActive? 'box':''} to="batman">Batman Component</NavLink></ul>
            <ul><NavLink className={({isActive})=>isActive? 'box':''} to="superman">Superman Component</NavLink></ul>
            <ul><NavLink className={({isActive})=>isActive? 'box':''} to="wonderwomen">Wonderwomen Component</NavLink></ul>
            <ul><NavLink className={({isActive})=>isActive? 'box':''} to="aquaman">Aquaman Component</NavLink></ul>
            <ul><NavLink className={({isActive})=>isActive? 'box':''} to="flash">Not Found Component</NavLink></ul>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="/aquaman" element={<Aquaman/>}/>
                    <Route path="/batman" element={<Batman/>}/>
                    <Route path="/superman" element={<Superman/>}/>
                    <Route path="/wonderwomen" element={<Wonderwomen/>}/>
                    <Route path="*" element={<Notfound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    }
}



export default App

// npm i react-router-dom
// BrowserRouter
    // Routes
        //  Route
            // Component
            // Link