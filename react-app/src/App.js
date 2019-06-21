import React from 'react';
import './App.css';
import throttle from 'lodash.throttle';
import Header from './components/Header'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			title: ''
        };
		this.changeTitle = this.changeTitle.bind(this)
		this.changeTitleThrottled = throttle(this.changeTitle, 100);
    }

	changeTitle(str){
		this.setState({
			title: str
		});
	}

	componentWillUnmount() {
		this.changeTitleThrottled.cancel();
	}

    render() {
		return (
			<div>
				<Header title={this.state.title} />
				<BrowserRouter>
			        <Switch>
			            <Route path="/" exact={true} component={Screen1} />
			            <Route
							path="/farms/:farm_id"
							render={(props) =>
								<Screen2
									changeTitle={this.changeTitleThrottled}
									pr={props}
								/>}
						/>
			        </Switch>
			    </ BrowserRouter>
			</div>
		)
    }
}
