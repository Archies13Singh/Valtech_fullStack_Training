import { Component } from "react"
import {connect} from "react-redux"
import {addMovie, removeMovie} from "../redux"


class MovieComponent extends Component{
    render(){
        return<div>
            <h2>Movie Component</h2>
            <h3>Total Ticket Booked : {this.props.numTickets}</h3>
            <button onClick={this.props.addMovie}>Add Ticket</button>
            <button onClick={this.props.removeMovie}>Remove Ticket</button>
        </div>
    }
}


const myStatetoProps = (state)=>{
    return{
        numTickets : state.movies.numTickets
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addMovie : ()=>dispatch(addMovie()),
        removeMovie : ()=>dispatch(removeMovie())
    }
    
}

export default connect(myStatetoProps,mapDispatchToProps)(MovieComponent)