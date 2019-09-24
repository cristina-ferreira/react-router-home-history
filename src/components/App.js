import React from 'react';
import { Route, HashRouter, Switch, NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import Home from './Home';
import History from './History';


const App = () => {
    return (
        <HashRouter basename={process.env.REPO_NAME}>
            <Nav className="bg-light">
                <NavLink to="/" className="tab">Home</NavLink>
                <NavLink to="/our-history" className="tab">History</NavLink>
            </Nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/our-history" component={History} />
            </Switch>
        </HashRouter>
    );
};

export default App;
