import React, {Component} from "react";
import {monsters} from './monsters';
import CardList from "./CardList";
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            monsters : monsters,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }
    
    render(){
        const filteredMonsters= this.state.monsters.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1 dim">Monster Cards</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList monsters={filteredMonsters} />
                </Scroll>
            </div>
        );
    }
}

export default App;