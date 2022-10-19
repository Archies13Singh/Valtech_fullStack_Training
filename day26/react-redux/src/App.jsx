import { Component } from "react"
import HeroComponent from "./component/hero.component"
import HeroHookComp from "./component/hero.hook.component"
import MovieHookComp from "./component/movie.hook.component"
import MovieComponent from "./component/movie.component"


class App extends Component{
    render(){
        return<div>
            <h2>React Redux</h2>
            <HeroComponent/>
            <HeroHookComp/>
            <MovieComponent/>
            <MovieHookComp/>
        </div>
    }
}

export default App