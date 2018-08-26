import React from 'react';
import { Link } from "react-router-dom";

const Prediction = props => {
    return (
        <li>
            <Link
                to={`/prediction/${props._id}`}
            >
                {props.userName} - {props.createdAt}
            </Link>
        </li>
    )
}

export default Prediction;