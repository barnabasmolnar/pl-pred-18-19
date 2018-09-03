import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { submitUserPrediction, changeView } from "../actions";
import axios from "axios";

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

        axios.post('http://localhost:3001/api/prediction', predictionObj)
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

                <div className="container mx-auto">
                    <div className="bg-purple-lightest p-4 text-grey-darker">
                        <svg className="inline-block align-middle w-10 h-10 fill-current text-pink-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.343 6.35" height="23.999" width="16.415">
                            <path className="fill-current text-pink-dark" d="M2.046 1.448l.16.69.69.16.902-.903-.85-.85zm.213-.53a.3.3 0 1 0-.425-.426.3.3 0 0 0 .425.425zM3.85 2.084a.3.3 0 1 0-.424.425.3.3 0 0 0 .424-.425zM2.661.512c.326-.06.66.044.893.278.23.229.334.558.28.879a.21.21 0 0 0 .414.07A1.427 1.427 0 0 0 2.585.098a.21.21 0 0 0 .076.413zm.35 1.98A1.008 1.008 0 0 1 1.853 1.32a.21.21 0 0 0-.414-.075 1.427 1.427 0 0 0 1.64 1.663.21.21 0 0 0-.07-.415z" fill="none" strokeWidth=".15"/>
                            <path d="M.265 1.59h.529c.146 0 .264.118.264.264V6.35H0V1.854c0-.146.118-.265.265-.265zm1.587 1.587h.53c.145 0 .264.118.264.264V6.35H1.587V3.44c0-.146.119-.264.265-.264zM3.44 4.764h.529c.146 0 .264.119.264.265v1.32H3.175V5.03c0-.146.118-.265.265-.265z"/>
                            <path className="fill-current text-white" d="M2.783 1.652l-.149-.149.02-.02q.034-.034.074-.046.04-.013.123-.01l.05.003q.045.002.075-.006t.049-.027q.029-.029.025-.064-.003-.037-.039-.072-.033-.033-.085-.058-.053-.025-.122-.04l.13-.129q.066.033.116.065.05.033.087.072.1.1.112.194.012.093-.066.172-.04.04-.089.056-.048.015-.123.013l-.05-.002q-.053-.003-.077.004t-.043.025zm-.21-.088l.149.149-.146.146-.149-.148z" aria-label="?" fontWeight="400" fontSize="1.191" fontFamily="sans-serif" letterSpacing="0" wordSpacing="0" strokeWidth=".03"/>
                            <path d="M.145 1.26h.254V.536L.138.59V.394L.398.34h.274v.92h.255v.199H.145z" aria-label="1" fontWeight="400" fontSize="1.535" fontFamily="sans-serif" letterSpacing="0" wordSpacing="0" strokeWidth=".038"/>
                            <path d="M3.906 4.031q.113.03.172.102.059.072.059.184 0 .166-.127.253-.128.086-.372.086-.086 0-.173-.014-.086-.013-.171-.041v-.223q.08.04.16.062.08.02.158.02.114 0 .175-.04.061-.04.061-.114 0-.076-.063-.115-.062-.04-.184-.04h-.115v-.186h.121q.109 0 .162-.033.053-.035.053-.104 0-.065-.051-.1-.052-.035-.147-.035-.07 0-.14.015-.072.016-.142.047v-.212q.085-.024.17-.036.083-.012.164-.012.218 0 .326.072.109.072.109.216 0 .098-.052.16-.052.063-.153.088z" aria-label="3" fontWeight="400" fontSize="1.535" fontFamily="sans-serif" letterSpacing="0" wordSpacing="0" strokeWidth=".038"/>
                        </svg>
                        <div className="inline-block align-middle p-2 uppercase text-pink font-semibold tracking-wide">
                            Send your prediction!
                        </div>
                        <p className="px-2 pt-4">
                            Just type in your username and while you're at it,
                            you might as well predict which team will score and concede the most goals respectively.
                            If you want to double check your predictions, just press the show/hide predictions button.
                            If you want to change something, just go back and rearrange the teams.
                            Once you're satisfied everything's all right, just go ahead and press the submit your prediction button.
                        </p>
                    </div>
                </div>

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
                                                    <img className="block" src={team.teamBadge} />
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