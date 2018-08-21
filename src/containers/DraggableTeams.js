import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Teams from "../components/Teams";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { reorderTeams, changeView } from "../actions";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class DraggableTeams extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            teams: this.props.teams
        };

        this.onDragEnd = this.onDragEnd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onDragEnd(result) {
        const {destination, source, draggableId} = result;
        if (!destination) { return; }
        if (destination.draggableId === source.droppableId && destination.index === source.index) {
            return;
        }

        console.log(result);

        const teams = reorder(
            this.state.teams,
            result.source.index,
            result.destination.index
        );

        // console.log(items);

        this.setState({ teams });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
        console.log(this.state);
        this.props.reorderTeams(this.state.teams);
        this.props.changeView();
    }
    
    render() {
        return (
            <div className="draggable-teams absolute pin">
                <div className="container mx-auto">
                    <div className="bg-purple-lightest p-4 text-grey-darker">
                        <svg className="inline-block align-middle w-10 h-10 fill-current text-pink" version="1.1" id="Hand" x="0px" y="0px"
                        viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
                            <path d="M17.924,17.315c-0.057,0.174-0.193,0.367-0.416,0.432c-0.161,0.047-5.488,1.59-5.652,1.633
                                c-0.469,0.125-0.795,0.033-1.009-0.156c-0.326-0.287-4.093-2.85-8.845-3.092c-0.508-0.025-0.259-1.951,1.193-1.951
                                c0.995,0,3.904,0.723,4.255,0.371c0.271-0.272,0.394-1.879-0.737-4.683l0,0L4.438,4.232C4.222,3.697,4.482,3.089,5.016,2.873
                                c0.535-0.216,1.145,0.043,1.359,0.578c0,0,1.791,4.438,1.986,4.919c0.193,0.48,0.431,0.662,0.69,0.562
                                C9.282,8.844,9.33,8.69,9.19,8.223L7.144,2.195C6.958,1.649,7.25,1.057,7.796,0.871c0.547-0.187,1.141,0.106,1.325,0.652
                                l1.946,5.732c0.172,0.504,0.354,0.768,0.642,0.646c0.173-0.073,0.161-0.338,0.115-0.569l-1.366-5.471
                                c-0.14-0.561,0.201-1.127,0.761-1.267c0.56-0.139,1.125,0.2,1.266,0.761l1.26,5.042c0.184,0.741,0.353,1.008,0.646,0.935
                                c0.299-0.073,0.285-0.319,0.244-0.522c-0.095-0.475-0.872-4.328-0.872-4.328c-0.103-0.515,0.23-1.015,0.744-1.118
                                c0.513-0.103,1.014,0.23,1.116,0.743l0.948,4.711l0.001,0.001c0,0,0,0,0,0.001l0.568,2.825c0.124,0.533,0.266,1.035,0.45,1.527
                                C18.675,14.061,18.109,16.736,17.924,17.315z"/>
                        </svg>
                        <div className="inline-block align-middle p-2 uppercase text-pink font-semibold tracking-wide">
                            Drag and drop!
                        </div>
                        <p className="px-2 pt-4">
                            Just drag and drop the teams below to make your predictions as to how the Premier League season of 18/19 will end.
                            To do so, just click and hold on a team and drag it into position.
                            If on a touch device, just hold your finger long enough on a team element until its handle and border turn green. Then you're ready to drag it into position.
                            Once you're done, just click the Submit Teams button below.
                        </p>
                    </div>
                </div>
    
                <div className="container mx-auto">
                    <div className="my-4 p-4 bg-purple-lightest">
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable">
                            {provided => (
                                <div className="draggable-teams__teams">
                                    <Teams innerRef={provided.innerRef} {...provided.droppableProps} teams={this.state.teams} />
                                    {provided.placeholder}
                                </div>
                            )}
                            </Droppable>
                        </DragDropContext>
        
                        <button
                            onClick={this.handleSubmit}
                            className="btn btn-primary w-full mt-4"
                        >
                            Submit teams
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ teams: state.teamsReducer });

const mapDispatchToProps = dispatch => bindActionCreators({
    reorderTeams,
    changeView
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(DraggableTeams);