import React, {Component} from 'react';

export default class Cards extends Component  {
    constructor() {
        super()
        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/vehicles/')
          .then (response => response.json())
          .then (response => {

              console.log(response);

              let vehicleCards = response.results.map(vehicle => {
                  return (
                      <div className="col-sm-6" key={vehicle.name}>
                        <div className="card">
                          <div className="card-block">
                            <h4 className="card-title">Vehicle: {vehicle.name}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Model:  {vehicle.model}</h6>
                            <ul>
                                <h6 className="card-subtitle mb-2 text-muted">Specs</h6>
                                <li>Manufacturer: {vehicle.manufacturer}</li>
                                <li>Class: {vehicle.vehicle_class}</li>
                                <li>Passengers: {vehicle.passengers}</li>
                                <li>Crew: {vehicle.crew}</li>
                                <li>Length: {vehicle.length}</li>
                                <li>Max Speed: {vehicle.max_atmosphering_speed}</li>
                                <li>Cargo Capacity: {vehicle.cargo_capacity}</li>
                            </ul>

                          </div>
                        </div>
                      </div>
                  )
              })
              this.setState({vehicles: vehicleCards})
              console.log(this.state.vehicles);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return(
            <div className="cards">
                {this.state.vehicles}
            </div>
        )
    }
}
