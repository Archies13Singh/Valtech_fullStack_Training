import { Component } from "react";
 
class ChildComp extends Component{
    logs = [];
    state = {
        childPower : 0
    }
    constructor(){
        super();
        console.log(" ChildComp's constructor was called ");
        // this.state.childPower = 10
    }
    static getDerivedStateFromProps(currentProp, currentState){
        console.log(" ChildComp's getDerivedStateFromProps was called ")
        return {
            childPower : currentState.childPower + Number(currentProp.power) * 10
        }
    }
    componentDidMount(){
        console.log(" ChildComp's componentDidMount was called ");
    }
    shouldComponentUpdate(){
        console.log(" ChildComp's shouldComponentUpdate was called ")
       return true
    }
    getSnapshotBeforeUpdate(currentProps, currentState){
        console.log(" ChildComp's getSnapshotBeforeUpdate was called ")
        return {
            oldProps : currentProps,
            oldState : currentState
        }
    }
    componentDidUpdate(...args){
        console.log(arguments.length,args[0],args[1],args[2]);
        this.logs.push(args[2]);
        //
        console.log(" ChildComp's componentDidUpdate was called ")
    }
    componentWillUnmount(){
        console.log(" ChildComp's componentWillUnmount was called ")
    }        
    render(){
        console.log(" ChildComp's render was called ")
        return <div style={ { border : "2px solid red", padding : "10px", margin : "10px"} }>
                    <h3>Child Component</h3>
                    <h1>Parent's Power : { this.props.power }</h1>
                    <h1>Child's Power : { this.state.childPower }</h1>
                </div>
    }
}
 
export default ChildComp;