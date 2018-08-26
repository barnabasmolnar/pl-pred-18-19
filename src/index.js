import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './index.css';
// import 'index.css';
import App from './App';
import DraggableTeams from "./containers/DraggableTeams";
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers";
import UserPrediction from './containers/UserPrediction';
import RenderStepsView from './containers/RenderStepsView';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();