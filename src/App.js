import React from 'react';
import RenderStepsView from './containers/RenderStepsView';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PredictionList from "./components/PredictionList";
import Prediction from './components/Prediction';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App = () => (
    <Router>
        <div>
            <NavBar />
            <main>
                <Route render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition 
                            key={location.key}
                            classNames="fade"
                            timeout={1000}
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={RenderStepsView} />
                                <Route path="/predictions" component={PredictionList} />
                                <Route path="/test2" component={Test2} />
                                <Route path="/prediction/:_id" component={Prediction} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}>
                </Route>
            </main>
        </div>
    </Router>
)

const Test2 = () => (
    <div>
        <h2>Test2</h2>
    </div>
);

export default App;