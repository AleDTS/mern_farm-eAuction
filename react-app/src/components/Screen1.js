import React from 'react'
import Map from './Map'
import CardSearch from './CardSearch'
import {
	Container,
	Row,
	Col
} from 'react-bootstrap'

export default class Screen1 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			  error: null,
		      isLoaded: false,
		      farms: []
		};
	}
	componentWillMount() {
		fetch("http://localhost:9000/api/farms")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						farms: result.farms
					});
				},

				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {
		const { error, isLoaded, farms, map } = this.state;
		return (
			<Container>
				<Row>
					<Col>
						<Map map={{}}/>
					</Col>
					<Col>
						<CardSearch farms={farms} />
					</Col>
				</Row>
			</Container>
		);
	}
}
