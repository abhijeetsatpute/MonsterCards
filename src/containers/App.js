import React, {Component} from "react";
import CardList from "../components/CardList";
import Searchbox from '../components//Searchbox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            monsters : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({monsters: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }
    
    render(){
        const { monsters, searchfield } = this.state;
        const filteredMonsters= monsters.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!monsters.length){
            return <h1 className="tc">Loading</h1>
        } else {
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
}

export default App;