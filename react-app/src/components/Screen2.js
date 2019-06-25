import React from 'react';
import Map from './Map';
import LineGraph from './LineGraph';
import FarmInfo from './FarmInfo';
import {
	Container,
	Row,
	Col
} from 'react-bootstrap';

export default class Screen2 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			  error: null,
		      isLoaded: false,
			  showModal: false,
		      farm: {}
		};
		this.changeTitle = this.changeTitle.bind(this)
	}

	componentDidMount() {
		// const id = this.props.match.params.farm_id
		const { farm_id } = this.props.pr.match.params
		fetch("http://localhost:9000/api/farms/"+farm_id)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						farm: result.farm[0],
					});
					this.changeTitle(result.farm[0].name);
				},

				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	changeTitle = (str) => {
		this.props.changeTitle(str);
	}

	render() {
		const { isLoaded, farm } = this.state;
		if (!isLoaded) {
			return (<p>Loading ...</p>);
		}

		const geoj = farm.geojson

		const data = farm.log_ndvi;
		return (
			<Container>
				<Row>
					<Col>
						<Map map={{
							geoj: farm.geojson,
							coord: {
								lat: farm.latitude,
								lon: farm.longitude
							}
						}}/>
					</Col>
					<Col>
						<LineGraph data={data}/>
						<FarmInfo farm={farm}/>
					</Col>
				</Row>
			</Container>
		);
	}
}
