import { Component,PureComponent, version} from "react";


class Hero extends PureComponent{
 
    state = {
        title : "Default Title",
        power : 0,
        version : 0
    }
    
    increasePower = ()=>{
        this.setState(function(currentState, currentProp){
            return {
                power : currentState.power + 1
            }
        },
        function(){
            console.log(this.state.power)
        }
        )
    }
    setVersion100 = ()=>{
        this.setState(function(currentState, currentProp){
            return {
                version : 100
            }
        },
        function(){
            console.log(this.state.power)
        }
        )
    }
    
    render(){
        return <div className="container">
           <h1>Child Component | power is {this.state.power} | Version : {this.state.version}</h1>
           <button onClick={this.increasePower}>Increase Power</button>
           <button onClick={this.setVersion100}>Increase Power</button>
        </div>
    }
}


export default Hero