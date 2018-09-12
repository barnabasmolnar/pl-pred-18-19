import React from 'react';
import InfoDiv from '../components/InfoDiv';
import SVG_Stats from './svgIcons/SVG_Stats';

const Stats = () => (
    <div className="relative">
        <div className="container mx-auto mb-4 absolute pin-x w-full">
            <InfoDiv title="Stats" text="Some interesting statistics will be shown below..." svgIcon={SVG_Stats} />
        </div>
    </div>
)

export default Stats;