import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect
} from "react-router-dom";
import Fetcher from "../class4/fetcher";
import Fresh from "../class3/fresh";

export default class MyRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        
                        <Route exact path="/" component={Fetcher} />
                        <Route path="/newpath" component={Fresh} />
                    </div>
                </Router>
            </div>
        );
    }
}