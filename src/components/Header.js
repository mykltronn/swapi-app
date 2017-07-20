import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="jumbotron">
              <h1 className="display-3">Star Wars</h1>
              <hr/>
              <p className="lead">The vehicles of Star Wars</p>
              <h1>{this.props.terrible}</h1>
            </div>
        )
    }
}
