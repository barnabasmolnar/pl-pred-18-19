import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Teams from "../components/Teams";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { reorderTeams, changeView } from "../actions";
import InfoDiv from '../components/InfoDiv';
import SVG_DragAndDrop from '../components/svgIcons/SVG_DragAndDrop';

// InfoDiv data:
const info = {
    title: "Drag and drop!",
    text: `
        Just drag and drop the teams below to make your predictions as to how the Premier League season of 18/19 will end.
        To do so, just click and hold on a team and drag it into position.
        If on a touch device, just hold your finger long enough on a team element until its handle and border turn green. Then you're ready to drag it into position.
        Once you're done, just click the Submit Teams button below.
    `
}

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
        const { destination, source } = result;
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
            <div className="draggable-teams absolute pin-x w-full">

                <InfoDiv title={info.title} text={info.text} svgIcon={SVG_DragAndDrop} />

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