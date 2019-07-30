import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Portal from "./pages/Portal";
import Login from "./pages/Login"


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/portal" component={Portal} />
                </Switch>
            </div>
        </Router>

    )
}

export default App;