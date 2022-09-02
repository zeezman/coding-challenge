import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header"; 
import "./App.scss";  
export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <Router>  
              <div className="container">
                <Switch>
                  <Route path="/" exact component={Header} /> 
                </Switch>
            </div>  
        </Router>
    );
};

export default App; 