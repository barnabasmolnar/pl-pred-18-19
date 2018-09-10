import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LOADING, SUCCESS, ERROR } from "../ajaxReqStateConstants";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import InfoDiv from '../components/InfoDiv';
import SVG_TableChart from "./svgIcons/SVG_TableChart";

class Prediction extends Component {
    constructor(props) {
        super(props)

        axios.get(`/api/prediction/${props.match.params._id}`)
            .then(response => {
                response.data.predictedTable = response.data.predictedTable.map(team => ({
                    teamName: team,
                    teamBadge: `/img/${team.toLowerCase().replace(/\s+/g, "-")}.png`,
                }));
                response.data.createdAt = new Date(response.data.createdAt);
                this.setState({ajaxReqState: SUCCESS, ...response.data})
            })
            .catch(err => {
                console.log(err);
                this.setState({ajaxReqState: ERROR});
            })

        this.state = {
            ajaxReqState: LOADING,
            userName: '',
            predictedTable: [],
            mostGoalsScored: '',
            mostGoalsConceded: '',
            createdAt: ''
        }
    }

   
    renderPrediction() {
        const mostGoalsScoredBadge = this.state.predictedTable.find(team => team.teamName === this.state.mostGoalsScored).teamBadge;
        const mostGoalsConcededBadge = this.state.predictedTable.find(team => team.teamName === this.state.mostGoalsConceded).teamBadge;

        return (
            <div>

                <InfoDiv title={`Check out ${this.state.userName}'s prediction`} svgIcon={SVG_TableChart}/>

                <div className="bg-purple-lightest p-4 my-4 text-grey-darker">
                    <div className="md:flex flex-wrap">
                        <div className="mb-4 md:mr-4 flex-1 border-b border-pink-dark md:border-0 pb-4 md:pb-0">
                            <div className="text-xs uppercase font-bold text-pink-dark mb-1">Most goals scored</div>
                            <div className="p-2 pl-0 inline-flex items-center">
                                <div className="w-8 mr-2 flex-no-shrink">
                                    <img 
                                        className="block"
                                        src={mostGoalsScoredBadge}
                                        alt={ `${this.state.mostGoalsScored} badge` }
                                    />
                                </div>

                                <span className="uppercase font-bold tracking-wide">
                                    {this.state.mostGoalsScored}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4 md:mr-4 flex-1 border-b border-pink-dark md:border-0 pb-4 md:pb-0">
                            <div className="text-xs uppercase font-bold text-pink-dark mb-1">Most goals conceded</div>
                            <div className="p-2 pl-0 inline-flex items-center">
                                <div className="w-8 mr-2 flex-no-shrink">
                                    <img
                                        className="block"
                                        src={mostGoalsConcededBadge}
                                        alt={ `${this.state.mostGoalsConceded} badge` }
                                    />
                                </div>

                                <span className="uppercase font-bold tracking-wide">
                                    {this.state.mostGoalsConceded}
                                </span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs uppercase font-bold text-pink-dark mb-1">Prediction date</div>
                            <div className="p-2 pl-0 inline-flex items-center">
                                <div className="w-8 mr-2 flex-no-shrink">
                                    <svg className="fill-current text-grey-darker" version="1.1" id="Calendar" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
                                        <path className="" d="M17,3h-1v2h-3V3H7v2H4V3H3C1.899,3,1,3.9,1,5v12c0,1.1,0.899,2,2,2h14c1.1,0,2-0.9,2-2V5C19,3.9,18.1,3,17,3
                                            z M17,17H3V9h14V17z M6.5,1h-2v3.5h2V1z M15.5,1h-2v3.5h2V1z" />
                                    </svg>
                                </div>

                                <span className="uppercase font-bold tracking-wide">
                                    { this.state.createdAt.toLocaleDateString("en-GB") }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-lightest p-4 my-4 text-grey-darker">
                    { this.state.predictedTable.map((team, idx) => (
                        <div key={team.teamName} className="flex mb-4">
                            <div className="team-position">
                                { idx + 1 }
                            </div>
                        
                            <div className="team">
                                <div className="w-10 mr-4 flex-no-shrink">
                                    <img 
                                        className="block"
                                        src={ team.teamBadge }
                                        alt={ `${team.teamName} badge` }
                                    />
                                </div>

                                <span className="uppercase text-sm tracking-wide">
                                    { team.teamName }
                                </span>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        )
    }

    renderBasedOnState() {
        switch (this.state.ajaxReqState) {
            case SUCCESS:
                return this.renderPrediction();
            case ERROR:
                return <ErrorScreen msg={"The prediction could not be loaded or does not exist."}/>
            default:
                return <LoadingScreen />
        }
    }

    render() {
        return (
            <div className="relative">
                <div className="container mx-auto mb-4 absolute pin-x w-full">

                    { this.renderBasedOnState() }

                    <div className="bg-purple-lightest p-4 my-4 text-grey-darker">
                        <Link
                            className="btn btn-secondary inline-block no-underline"
                            to="/predictions"
                        >
                            Go back
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prediction;