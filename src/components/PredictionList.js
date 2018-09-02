import React, { Component } from 'react';
import axios from "axios";
import PredictionListItem from "./PredictionListItem";
import classnames from "classnames";

class PredictionList extends Component {
    constructor(props) {
        super(props);

        axios.get('http://localhost:3001/api/prediction')
            .then(response => this.setState({predictions: response.data}))
            .catch(err => console.log(err))

        this.state = {
            predictions: [],
            sortState: {
                prop: "dateSent",
                isDesc: true
            }
        }

        this.handleUserNameSort = this.handleUserNameSort.bind(this);
        this.handleDateSentSort = this.handleDateSentSort.bind(this);
    }

    handleUserNameSort() {
        this.setState(prevState =>
            (
                {
                    sortState: {
                        prop: "userName",
                        isDesc: !prevState.sortState.isDesc
                    },
                    predictions: prevState.predictions.slice().sort((a, b) =>
                        {
                            if (!prevState.sortState.isDesc) {
                                [a, b] = [b, a];
                            }
                            
                            return a.userName.localeCompare(b.userName);
                        }
                    )
                }
            )
        )
    }

    handleDateSentSort() {
        this.setState(prevState => 
            ({sortState: {
                prop: "dateSent",
                isDesc: !prevState.sortState.isDesc
            }})
        )
    }

    render() {
        return (
            <div>
                <div className="container mx-auto">
                    <div className="bg-purple-lightest p-4 text-grey-darker">
                        <svg className="inline-block align-middle w-10 h-10 fill-current text-pink-dark" version="1.1" id="List" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
                            <path d="M14.4,9H8.6C8.048,9,8,9.447,8,10s0.048,1,0.6,1h5.8c0.552,0,0.6-0.447,0.6-1S14.952,9,14.4,9z M16.4,14H8.6
                            C8.048,14,8,14.447,8,15s0.048,1,0.6,1h7.8c0.552,0,0.6-0.447,0.6-1S16.952,14,16.4,14z M8.6,6h7.8C16.952,6,17,5.553,17,5
                            s-0.048-1-0.6-1H8.6C8.048,4,8,4.447,8,5S8.048,6,8.6,6z M5.4,9H3.6C3.048,9,3,9.447,3,10s0.048,1,0.6,1h1.8C5.952,11,6,10.553,6,10
                            S5.952,9,5.4,9z M5.4,14H3.6C3.048,14,3,14.447,3,15s0.048,1,0.6,1h1.8C5.952,16,6,15.553,6,15S5.952,14,5.4,14z M5.4,4H3.6
                            C3.048,4,3,4.447,3,5s0.048,1,0.6,1h1.8C5.952,6,6,5.553,6,5S5.952,4,5.4,4z"/>
                        </svg>
                        <div className="inline-block align-middle p-2 uppercase text-pink font-semibold tracking-wide">
                            A list of everyone's predictions!
                        </div>
                        <p className="px-2 pt-4">
                            Aren't you a little bit curious what others guessed? Of course you are! So why not have a look at
                            everyone's predictions. Just click or tap on one of the list items below and you will be taken
                            to that user's predictions.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto my-4">
                    <div className="bg-purple-lightest p-4 text-grey-darker">
                        <button
                            className={ classnames("btn btn-secondary inline-block align-middle m-2", {"btn-inactive": this.state.sortState.prop !== "userName"}) }
                            onClick={this.handleUserNameSort}
                        >
                            <span className="inline-block align-bottom">Sort by username</span>
                            <svg
                                className={ classnames("w-4 ml-2 fill-current text-pink-dark inline-block align-bottom", {"invisible": this.state.sortState.prop !== "userName", "icon--desc": this.state.sortState.isDesc}) }
                                version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20"
                            >
                                <path d="M17,1h-2c-0.552,0-1,0.447-1,1v16.992h4V2C18,1.447,17.553,1,17,1z M11,7H9C8.448,7,8,7.447,8,8v10.992h4V8
                                    C12,7.447,11.553,7,11,7z M5,13H3c-0.552,0-1,0.447-1,1v4.992h4V14C6,13.447,5.553,13,5,13z"/>
                            </svg>
                        </button>

                        <button
                            className={ classnames("btn btn-secondary inline-block align-middle m-2", {"btn-inactive": this.state.sortState.prop !== "dateSent"}) }
                            onClick={this.handleDateSentSort}
                        >
                            <span className="inline-block align-bottom">Sort by date</span>
                            <svg
                                className={ classnames("w-4 ml-2 fill-current text-pink-dark align-bottom", {"invisible": this.state.sortState.prop !== "dateSent", "icon--desc": this.state.sortState.isDesc}) }
                                version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20"
                            >
                                <path d="M17,1h-2c-0.552,0-1,0.447-1,1v16.992h4V2C18,1.447,17.553,1,17,1z M11,7H9C8.448,7,8,7.447,8,8v10.992h4V8
                                    C12,7.447,11.553,7,11,7z M5,13H3c-0.552,0-1,0.447-1,1v4.992h4V14C6,13.447,5.553,13,5,13z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="container mx-auto bg-purple-lightest p-4 my-4">
                    <ul className="list-reset">
                        { this.state.predictions.map(predictionListItem => <PredictionListItem {...predictionListItem} key={predictionListItem._id} />) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default PredictionList;