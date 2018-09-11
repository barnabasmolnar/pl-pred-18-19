import React, { Component } from 'react';
import axios from "axios";
import PredictionListItem from "./PredictionListItem";
import classnames from "classnames";
import { LOADING, SUCCESS, ERROR } from "../ajaxReqStateConstants";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import InfoDiv from '../components/InfoDiv';
import SVG_List from './svgIcons/SVG_List';

// InfoDiv data:
const info = {
    title: "A list of everyone's predictions!",
    text: `
        Aren't you a little bit curious what others guessed? Of course you are! So why not have a look at
        everyone's predictions. Just click or tap on one of the list items below and you will be taken
        to that user's predictions.
    `
}

class PredictionList extends Component {
    constructor(props) {
        super(props);

        axios.get('/api/prediction')
            .then(response => {
                const preds = response.data.map(predObj => Object.assign({}, predObj, {createdAt: new Date(predObj.createdAt)}));
                this.setState({ajaxReqState: SUCCESS, predictions: preds});
            })
            .catch(err => {
                console.log(err);
                this.setState({ajaxReqState: ERROR});
            })

        this.state = {
            ajaxReqState: LOADING,
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
            (
                {
                    sortState: {
                        prop: "dateSent",
                        isDesc: !prevState.sortState.isDesc
                    },
                    predictions: prevState.predictions.slice().sort((a, b) =>
                        {
                            if (!prevState.sortState.isDesc) {
                                [a, b] = [b, a];
                            }

                            return a.createdAt - b.createdAt;
                        }
                    )
                }
            )
        )
    }

    renderPredictionList() {
        return (
            <div>

                <InfoDiv title={info.title} text={info.text} svgIcon={SVG_List} />

                <div className="container mx-auto my-4">
                    <div className="bg-purple-lightest p-4 text-grey-darker">
                        <button
                            className={ classnames("btn btn-secondary inline-block align-middle m-2", {"btn-inactive": this.state.sortState.prop !== "userName"}) }
                            onClick={this.handleUserNameSort}
                        >
                            <span className="inline-block align-bottom">Sort by username</span>
                            <svg
                                className={ classnames("w-4 h-4 ml-2 fill-current text-pink-dark inline-block align-bottom", {"invisible": this.state.sortState.prop !== "userName", "icon--desc": this.state.sortState.isDesc}) }
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
                                className={ classnames("w-4 h-4 ml-2 fill-current text-pink-dark align-bottom", {"invisible": this.state.sortState.prop !== "dateSent", "icon--desc": this.state.sortState.isDesc}) }
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

    renderBasedOnState() {
        switch (this.state.ajaxReqState) {
            case SUCCESS:
                return this.renderPredictionList();
            case ERROR:
                return <ErrorScreen msg={"No predictions were found."}/>
            default:
                return <LoadingScreen />
        }
    }

    render() {
        return (
            <div className="relative">
                <div className="container mx-auto mb-4 absolute pin-x w-full">
                    { this.renderBasedOnState() }
                </div>
            </div>
        )
    }
}

export default PredictionList;