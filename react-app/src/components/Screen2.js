import React from 'react'
import Map from './Map'
import LineGraph from './LineGraph'
import {
	Button,
	Container,
	Row,
	Col
} from 'react-bootstrap'

export default class Screen2 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			  error: null,
		      isLoaded: false,
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
						farm: result.farm[0]
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

	changeTitle = (str) => {
		this.props.changeTitle(str);
	}

	render() {
		const { isLoaded, farm } = this.state;
		let title = farm.name || '';
		this.changeTitle(title)
		let data = farm.log_ndvi;
		// console.log(data)
		if (!isLoaded) {
		      return <p>Loading ...</p>;
		}
		return (
			<Container>
				<Row>
					<Col>
						<Map map={[]}/>
					</Col>
					<Col>
						<LineGraph data={data}/>
					</Col>
				</Row>
			</Container>
		);
	}
}
