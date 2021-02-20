import React, { Component } from 'react';
import pengImg from "./images/penguin.png"

class Penguin extends Component {
    constructor(props){
        super(props);
    }

    deletePenguin = () => {
        this.props.delete(this.props.id)
    }
    render(){

        return(
            <div>
                <p id="penguinName">{this.props.name}</p>
                <button onClick={this.deletePenguin}>Delete</button>
                <img src = {pengImg} width = {100} height = {100}/>
            </div>
        )
    }
}

export default Penguin;