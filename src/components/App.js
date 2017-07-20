import React, {Component} from 'react';
import '../styles/App.css';
import Cards from './Cards.js'
import Form from './Form.js'
import Header from './Header.js'

export default class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="App">
                <Header terrible="Star Wars Episode 1"/>
                <Form />
                <Cards />
            </div>
        );
    }
}
