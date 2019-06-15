import React from 'react';
import './App.css';
import Header from './components/Header'
import Screen1 from './components/Screen1'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            dbResponse: ""
        };
    }

    // Go to API and check testAPI route for a response
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    // Go to API and check testDB route for a response
    callDB() {
        fetch("http://localhost:9000/testDB")
            .then(res => res.text())
            .then(res => this.setState({ dbResponse: res }))
            .catch(err => err);
    }


    // Execute the calls when componnent mounts
	componentDidMount() {

  	}


    render() {
		return (
			<div>
				<Header />
				<Screen1 />
			</div>
		)
    }
}
