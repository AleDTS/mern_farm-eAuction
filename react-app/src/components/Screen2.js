import React from 'react'
import Map from './Map'
import {
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
	componentWillMount() {
		const id = this.props.match.params.farm_id
		fetch("http://localhost:9000/api/farms/"+id)
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

	changeTitle(str){
		this.props.changeTitle(str);
	}

	render() {
		const { farm } = this.state;
		let title = farm.name || ''
		// this.changeTitle(title)
		return (
			<Container>
				<Row>
					<Col>
						<Map map={[]}/>
					</Col>
					<Col>
						<h1>
						{title}
						</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}
