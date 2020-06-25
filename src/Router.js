import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import{Home} from "./Home";
import {About} from "./About";
import {Users} from "./Users";

export  function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

