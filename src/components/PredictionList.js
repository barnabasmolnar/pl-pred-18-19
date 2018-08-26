import React, { Component } from 'react';
import axios from "axios";
import Prediction from "./Prediction";

class PredictionList extends Component {
    constructor(props) {
        super(props);

        axios.get('http://localhost:3001/api/prediction')
            .then(response => this.setState({predictions: response.data}))
            .catch(err => console.log(err))

        this.state = {
            predictions: []
        }
    }

    render() {
        return (
            <ul>
                { this.state.predictions.map(prediction => <Prediction {...prediction} key={prediction._id} />) }
            </ul>
        )
    }
}

export default PredictionList;