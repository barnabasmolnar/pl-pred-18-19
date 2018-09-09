import React from 'react';
import { connect } from "react-redux";
import DraggableTeams from "./DraggableTeams";
import UserPrediction from "./UserPrediction";
import { CSSTransition } from 'react-transition-group';
import "./renderStepsView.css";

const RenderStepsView = props => (
    <div className="relative">
        <CSSTransition
            in={props.isTeams}
            timeout={1000}
            classNames="fade"
            unmountOnExit
        >
            <DraggableTeams />
        </CSSTransition>
    
        <CSSTransition
            in={!props.isTeams}
            timeout={1000}
            classNames="fade"
            unmountOnExit
        >
            <UserPrediction history={props.history} />
        </CSSTransition>
    </div>
)

const mapStateToProps = state => ({ isTeams: state.isTeamsViewReducer });

export default connect(mapStateToProps)(RenderStepsView);