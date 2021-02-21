import React, { Component } from 'react';
import { Map } from 'immutable';
import Penguin from './Penguin'; 
class Igloo extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            penguins: Map(), 
            pengID: 0,
            newPengName: '',
            newPengImage: ''
        }
    }
    //setter functions for pengui creation
    newPengNameFunction = (event) => {
        this.setState({ newPengName: event.target.value });
    }

    newPengImageFunction = (event) => {
        this.setState({ newPengImage: event.target.value });
    }

    //Adding penguin to list 
    savePengInfo = () => {
        let pengData = {
            name: this.state.newPengName,
            image: this.state.newPengImage
        }

        this.setState({
            penguins: this.state.penguins.set(this.state.pengID, pengData),
            pengID: this.state.pengID + 1,
        })
    }

    //callback function
    delete = (id) => {
        this.setState({penguins: this.state.penguins.delete(id)})
    }

    //initiates savePengInfo() after entering name in input field 
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.savePengInfo();
            document.getElementById('nameInput').value = "";
        }
    }
    render() {
        const allPengs = this.state.penguins.entrySeq().map(
            ([id, penguin]) => {
                return(
                    <div>
                        <Penguin 
                        delete = {this.delete}
                        name = {penguin.name}
                        pengURL = {penguin.image}
                        id = {id}
                        key = {id}
                    />
                    </div>
                    
                )
            }
        )
        return (
            <div>
                <p className="synthwave">I am an igloo. Add penguins to me!</p>
                <div className="penguins">
                    {allPengs}
                </div>
                <button onClick={this.savePengInfo}>Add Penguin!</button>
                <input id='nameInput' type='text' onChange={this.newPengNameFunction} onKeyPress={this.handleKeyPress}/>
            </div>
            
        )
    }
}

export default Igloo;