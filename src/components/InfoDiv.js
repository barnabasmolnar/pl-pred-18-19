import React from 'react'

const InfoDiv = props => (
    <div className="container mx-auto">
        <div className="bg-purple-lightest p-4 text-grey-darker">
            {props.svgIcon}
            <div className="inline-block align-middle p-2 uppercase text-pink font-semibold tracking-wide">
                {props.title}
            </div>
            {
                props.text 
                    ?
                        <p className="px-2 pt-4">
                            {props.text}
                        </p>
                    :
                        null
            }
        </div>
    </div>
)

export default InfoDiv;