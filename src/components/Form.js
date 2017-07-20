import React, {Component} from 'react';

export default class Form extends Component {
    constructor(){
        super()

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            pilot: ''
        }
    }

    handleNameChange(event){
        this.setState({name: event.target.value});
    }

    handleSubmit(event){

        event.preventDefault();
        this.setState({pilot: this.state.name})
        this.setState({name: ''});
    }

    render(){
        return(
            <div className="form">
                <div className="card">
                  <div className="card-header">
                    What's your name, pilot?
                  </div>
                  <div className="card-block">
                      <form onSubmit={this.handleSubmit}>
                          <input onChange={this.handleNameChange} name="name" type="text" value={this.state.name}/>
                          <input type="submit" value="Submit" />
                      </form>
                    <h1>{this.state.pilot}</h1>
                  </div>
                </div>
            </div>
        )
    }
}
