import React from 'react';
import { Link } from "react-router-dom";
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

const PredictionListItem = props => {
    return (
        <li>
            <Link
                className="no-underline text-black"
                to={`/prediction/${props._id}`}
            >
            <div className="mb-4 flex">
                <div className="bg-pink-dark flex items-center justify-center leading-none p-2">
                    <svg className="w-12 h-12" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                            <g fill="#fff" id="icon-6-soccer-ball">
                                <path d="M8.81549973,14.5511943 L5.01103079,17.0082671 C5.1100006,19.2839188 5.87031523,21.3879864 7.1045629,23.1330581 L11.149279,22.910884 L11.149279,22.910884 L13.613538,20.3590691 L12.361918,16.0565595 L8.81549973,14.5511943 L8.81549973,14.5511943 Z M8.904262,13.5025113 L7.36260017,9.51633207 L7.36260017,9.51633207 C8.66528097,7.8144886 10.4326582,6.48718902 12.475186,5.72397927 L16,8.5930221 L16,8.5930221 L16,12.4069779 L12.6833059,15.1066203 L8.904262,13.5025113 L8.904262,13.5025113 Z M12.1221299,23.343024 L13.2325345,27.5291853 L13.2325345,27.5291853 C14.2682644,27.8355535 15.3649279,28 16.5,28 C17.6350721,28 18.7317356,27.8355535 19.7674655,27.5291853 L20.8535823,23.4345878 L20.8535823,23.4345878 L18.5025282,21 L14.3847619,21 L12.1221299,23.343024 L12.1221299,23.343024 L12.1221299,23.343024 Z M21.7316974,22.9043461 L25.8954371,23.1330581 C27.1296848,21.3879864 27.8899994,19.2839188 27.9889692,17.0082671 L24.1502985,14.5291055 L24.1502985,14.5291055 L20.6502313,16.0147959 L19.3603693,20.448764 L21.7316974,22.9043461 L21.7316974,22.9043461 L21.7316974,22.9043461 Z M24.1126764,13.4587148 L25.6373998,9.51633207 L25.6373998,9.51633207 C24.334719,7.8144886 22.5673418,6.48718902 20.524814,5.72397927 L20.524814,5.72397927 L17,8.5930221 L17,12.4069779 L20.2871352,15.0825607 L24.1126764,13.4587148 L24.1126764,13.4587148 L24.1126764,13.4587148 Z M16.5,29 C23.4035597,29 29,23.4035597 29,16.5 C29,9.59644029 23.4035597,4 16.5,4 C9.59644029,4 4,9.59644029 4,16.5 C4,23.4035597 9.59644029,29 16.5,29 L16.5,29 Z" id="soccer-ball"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="bg-white sm:flex flex-1 items-center p-4 border border-pink-dark border-l-0">
                    <div className="uppercase text-sm tracking-wide mb-4 sm:mb-0">
                        {props.userName}
                    </div>
                    <div className="sm:ml-auto">
                        {distanceInWordsStrict(
                            new Date(),
                            props.createdAt,
                            {addSuffix: true}
                        )}
                    </div>
                </div>
            </div>
            </Link>
        </li>
    )
}

export default PredictionListItem;