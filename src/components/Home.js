import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login, Register, Header } from './index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    static defaultProps = {
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route path="/register/" component={Register} />
                    <Route path="/login/" component={Login} />
                </div>
            </Router>
        );
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    componentDidCatch(error, info) {
    }
}

export default Home;