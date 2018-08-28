import React from 'react';
import RenderStepsView from './containers/RenderStepsView';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PredictionList from "./components/PredictionList";
import Prediction from './components/Prediction';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <main>
                    <Route exact path="/" component={RenderStepsView} />
                    <Route path="/predictions" component={PredictionList} />
                    <Route path="/test2" component={Test2} />
                    <Route path="/prediction/:_id" component={Prediction} />
                </main>
            </div>
        </Router>
    )
}

const Test2 = () => (
    <div>
        <h2>Test2</h2>
    </div>
);

export default App;