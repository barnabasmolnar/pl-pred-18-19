import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { submitUserPrediction, changeView } from "../actions";
import axios from "axios";
import InfoDiv from '../components/InfoDiv';
import SVG_TableChart from '../components/svgIcons/SVG_TableChart';

// InfoDiv data:
const info = {
    title: "Send your prediction!",
    text: `
        Just type in your username and while you're at it,
        you might as well predict which team will score and concede the most goals respectively.
        If you want to double check your predictions, just press the show/hide predictions button.
        If you want to change something, just go back and rearrange the teams.
        Once you're satisfied everything's all right, just go ahead and press the submit your prediction button.
    `
}

class UserPrediction extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userName: "",
            mostGoalsScored: this.props.teams[0].teamName,
            mostGoalsConceded: this.props.teams[19].teamName,
            showTeamsOrder: false
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleMostGoalsScoredChange = this.handleMostGoalsScoredChange.bind(this);
        this.handleMostGoalsConcededChange = this.handleMostGoalsConcededChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleViewChange = this.handleViewChange.bind(this);
        this.handleTeamsOrderVisibility = this.handleTeamsOrderVisibility.bind(this);
    }

    handleUserNameChange(event) {
        this.setState({userName: event.target.value});
    }

    handleMostGoalsScoredChange(event) {
        this.setState({mostGoalsScored: event.target.value});
    }

    handleMostGoalsConcededChange(event) {
        this.setState({mostGoalsConceded: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const predictionObj = {
            userName: this.state.userName,
            predictedTable: this.props.teams.map(team => team.teamName),
            mostGoalsScored: this.state.mostGoalsScored,
            mostGoalsConceded: this.state.mostGoalsConceded
        }

        axios.post('/api/prediction', predictionObj)
            .then(() => this.props.history.push("/predictions"))
            .catch(err => {
                console.log(err.response);
                if (err.response.data.code === 11000) {
                    alert("A prediction has already been made with this username. Please choose a different name.");
                } else {
                    alert("An unknown error occured. Please try again later.");
                }
            });
    }

    handleViewChange() {
        this.props.changeView();
    }

    handleTeamsOrderVisibility() {
        this.setState({ showTeamsOrder: !this.state.showTeamsOrder });
    }
    
    render() {
        return (
            <div className="container mx-auto absolute pin">

                <InfoDiv title={info.title} text={info.text} svgIcon={SVG_TableChart} />

                <form
                    className="bg-purple-lightest px-8 pt-6 pb-8 my-4"
                    onSubmit={this.handleSubmit}
                >

                    <div className="md:flex flex-wrap">
                        <div className="mb-4 md:mr-4 flex-1">
                            <label
                                className="block text-grey-darker text-sm font-bold mb-2"
                                htmlFor="user-name"
                            >
                                Username:
                            </label>
                            <input
                                className="appearance-none border rounded w-full max-w-sm py-2 px-3 text-grey-darker leading-tight"
                                type="text"
                                id="user-name"
                                value={this.state.userName}
                                onChange={this.handleUserNameChange}
                            />
                        </div>
    
                        <div className="mb-4 md:mr-4 flex-1">
                            <label
                                className="block text-grey-darker text-sm font-bold mb-2"
                                htmlFor="most-goals-scored"
                            >
                                Most goals scored:
                            </label>
                            <select
                                className="border rounded w-full max-w-sm py-2 px-3 text-grey-darker leading-tight"
                                id="most-goals-scored"
                                value={this.state.mostGoalsScored}
                                onChange={this.handleMostGoalsScoredChange}
                            >
                                { this.props.teams.map(team => <option key={team.teamName} value={team.teamName}>{team.teamName}</option>) }
                            </select>
                        </div>

                        <div className="flex-1">
                            <label
                                className="block text-grey-darker text-sm font-bold mb-2"
                                htmlFor="most-goals-conceded"
                            >
                                Most goals conceded:
                            </label>
                            <select
                                className="border rounded w-full max-w-sm py-2 px-3 text-grey-darker leading-tight"
                                id="most-goals-conceded"
                                value={this.state.mostGoalsConceded}
                                onChange={this.handleMostGoalsConcededChange}
                            >
                                { this.props.teams.map(team => <option key={team.teamName} value={team.teamName}>{team.teamName}</option>) }
                            </select>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary mt-4"
                        type="submit"
                    >
                        Submit prediction
                    </button>
                </form>

                <div className="my-4 px-6 py-6 bg-purple-lightest">
                    <div className="inline-block pr-4 py-2">
                    	<button
                    	    className="btn btn-secondary align-middle"
                    	    onClick={this.handleViewChange}
                    	>
                    	    Go back
                    	</button>
                    </div>
    
                    
                    <div className="inline-block py-2">
                    	<button
                    	    className="btn btn-primary align-middle"
                    	    onClick={this.handleTeamsOrderVisibility}
                    	>
                    	    Show/Hide predictions
                    	</button>
                    </div>
                </div>

                {
                    this.state.showTeamsOrder
                        ?
                            <ul
                                className="list-reset bg-purple-lightest p-4"
                            >
                                {
                                    this.props.teams.map((team, idx) =>
                                        <li
                                            key={team.teamName}
                                            className="flex bg-white mb-4"
                                        >
                                            <div
                                                className="team-position"
                                            >
                                                {idx+1}.
                                            </div>

                                            <div className="team">
                                                <div className="w-10 mr-4 flex-no-shrink">
                                                    <img
                                                        className="block"
                                                        src={team.teamBadge}
                                                        alt={`${team.teamName} badge`}
                                                    />
                                                </div>
    
                                                <span className="uppercase block text-sm tracking-wide">
                                                    {team.teamName}
                                                </span>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        :
                            null
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({ teams: state.teamsReducer });

const mapDispatchToProps = dispatch => bindActionCreators({
    submitUserPrediction,
    changeView
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(UserPrediction);