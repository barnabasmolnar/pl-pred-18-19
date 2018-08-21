import React, { Component } from 'react';
import Team from "./Team";

class Teams extends Component {
    render() {
        return (
            <div ref={this.props.innerRef}>
                { this.props.teams.map((team, idx) => <Team {...team} key={team.teamName} index={idx} />) }
            </div>
        )
    }
}

export default Teams;