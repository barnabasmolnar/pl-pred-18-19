import React from 'react';
import InfoDiv from '../components/InfoDiv';
import SVG_About from './svgIcons/SVG_About';

const About = () => (
    <div className="relative">
        <div className="container mx-auto mb-4 absolute pin-x w-full">
            <InfoDiv title="About" text="Some info about the app and its creator will be shown here..." svgIcon={SVG_About} />
        </div>
    </div>
)

export default About;