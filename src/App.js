import React from 'react';
import RenderStepsView from './containers/RenderStepsView';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PredictionList from "./components/PredictionList";
import Prediction from './components/Prediction';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Stats from './components/Stats';
import About from './components/About';

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
                                <Route path="/stats" component={Stats} />
                                <Route path="/about" component={About} />
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

export default App;