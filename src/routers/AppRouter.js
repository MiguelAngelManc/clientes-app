import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { ClientRouter } from "./ClientRouter";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route path="/" component={ClientRouter} />
                </Switch>
            </div>
        </Router>
    )
}