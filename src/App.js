import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

export class Layout extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link> - <Link to="/test">Test</Link>
                {this.props.children}
            </div>
        );
    }
}

export class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export class Test extends Component {
    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}

export class App extends Component {
    static defaultProps = {
        routerHistory: createBrowserHistory()
    };

    render() {
        return (
            <div>
                <Router history={this.props.routerHistory}>
                    <Route component={Layout} path="/">
                        <IndexRoute component={Home} />
                        <Route path="/test" component={Test} />
                    </Route>
                </Router>
            </div>
        );
    }
}

