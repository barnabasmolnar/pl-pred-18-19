import React from 'react';
import "./Team.css";
import { Draggable } from 'react-beautiful-dnd';
import classnames from "classnames";

const Team = props => {
    return (
        <Draggable
            draggableId={props.teamName}
            index={props.index}
        >
        {(provided, snapshot) => (
            <div
                className="flex mb-4"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                <div
                    className={
                        classnames("team-position", {"bg-green border-green": snapshot.isDragging})
                    }
                >
                    {props.index+1}
                </div>
                
                <div 
                    className={
                        classnames("team", {"border-green": snapshot.isDragging})
                    }
                >
                    <div className="w-10 mr-4 flex-no-shrink">
                        <img className="block" src={props.teamBadge} />
                    </div>

                    <span className="uppercase text-sm tracking-wide">
                        {props.teamName}
                    </span>

                    {/* <svg className="block w-8 fill-current text-green ml-auto" version="1.1" id="Select_arrows" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" xml="preserve">
                        <path d="M10,1L5,8h10L10,1z M10,19l5-7H5L10,19z"/>
                    </svg> */}

                    <svg
                        className={
                            classnames(
                                "block ml-auto w-5 h-5 fill-current",
                                {"text-pink-dark": !snapshot.isDragging},
                                {"text-green": snapshot.isDragging}
                            )
                        }
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.836 14.582" height="55.114" width="33.397">
                        <path d="M.075.075v2.673h2.673V.075zm0 5.88v2.672h2.673V5.955zm0 5.88v2.672h2.673v-2.672zM6.089.075v2.673H8.76V.075zm0 5.88v2.672H8.76V5.955zm0 5.88v2.672H8.76v-2.673z"/>
                    </svg>
                </div>
            </div>
        )}
        </Draggable>
    )
}

export default Team;