import { Suspense, useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import HomeComp from "./components/home.components";
/* import AquamanComp from "./components/aquaman.components";
import BatmanComp from "./components/batman.components";
import NotFound from "./components/notfound.components";
import SupermanComp from "./components/superman.components";
import WonderWomenComp from "./components/wonderwomen.components"; */


let AquamanComp = React.lazy(()=> import('./components/aquaman.components'))
let BatmanComp = React.lazy(()=> import('./components/batman.components'))
let BatMovie1Comp = React.lazy(()=> import('./components/batmovie1'))
let BatMovie2Comp = React.lazy(()=> import('./components/batmovie2'))
let BatMovie3Comp = React.lazy(()=> import('./components/batmovie3'))
let NotFound = React.lazy(()=> import('./components/notfound.components'))
let SupermanComp = React.lazy(()=> import('./components/superman.components'))
let WonderWomenComp = React.lazy(()=> import('./components/wonderwomen.components'))


function App() {
  let [quanity, setQuantity] = useState(0)
  let activeFun1 = ({isActive})=> isActive ? 'box' : 'plainBox';
  let activeFun2 = ({isActive})=> {
    return {
      width: "200px",
      display: "inline-block",
      backgroundColor: isActive ? "crimson" : "darkorange",
      color:  "black",
      textAlign: "center",
      padding: "5px",
    }
  };
 
  return (
    <div>
      <h1>React Routing 101</h1>
      <BrowserRouter>
       {/*  <ul>
          <li><Link to="/">Home Component</Link></li>
          <li><Link to="batman">Batman Component</Link></li>
          <li><Link to="superman">Superman Component</Link></li>
          <li><Link to="wonderwomen">Wonder Women Component</Link></li>
          <li><Link to="aquaman">Aquaman Component</Link></li>
          <li><Link to="flash">Flash Component</Link></li>
          <li><Link to="cyborg">Cyborg Component</Link></li>
        </ul> */}
        <label htmlFor="qty"></label>
        <input type="range" id="qty" value={quanity} onChange={(evt)=>setQuantity(evt.target.value)}/>
        <b>{quanity}</b>
        <ul>
          <li><NavLink end className={activeFun1} to="/">Home Component</NavLink></li>
          <li><NavLink style={ activeFun2 } to="/batman">Batman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box brdr' : 'plainBox' } to="/superman">Superman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/wonderwomen">Wonder Women Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to={"/wonderwomen"+quanity}>Wonder Women Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/aquaman">Aquaman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/flash">Flash Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/cyborg">Cyborg Component</NavLink></li>
        </ul>
        
        <Routes>
            {/* <Route path="" element={<h1>welcome home</h1>}/> */}
            <Route path="/" element={<HomeComp/>}/>
            <Route path="/batman" element={ <Suspense fallback={<>Loading....</>}><BatmanComp/></Suspense> }>
                <Route path="/batman/movie1" element={ <Suspense fallback={<>Loading....</>}><BatMovie1Comp/></Suspense> }></Route>
                <Route path="/batman/movie2" element={ <Suspense fallback={<>Loading....</>}><BatMovie2Comp/></Suspense>  }></Route>
                <Route path="/batman/movie3" element={ <Suspense fallback={<>Loading....</>}> <BatMovie3Comp/></Suspense> }></Route>
            </Route>
            <Route path="/superman" element={ <Suspense fallback={<>Loading....</>}><SupermanComp/></Suspense>  }/>
            <Route path="/wonderwomen" element={ <Suspense fallback={<>Loading....</>}><WonderWomenComp/></Suspense>  }/>
            <Route path="/aquaman" element={ <Suspense fallback={<>Loading....</>}><AquamanComp/></Suspense>  }/>
            <Route path="/flash" element={ <Suspense fallback={<>Loading....</>}><SupermanComp/></Suspense>  } />
            <Route path="*" element={ <Suspense fallback={<>Loading....</>}> <NotFound/></Suspense> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;




// npm i react-router-dom
// BrowserRouter
    // Routes
        //  Route
            // Component
            // Link