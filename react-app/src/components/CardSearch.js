import React from 'react'
import { Link } from 'react-router-dom'

import {
	Button,
	Collapse,
	Card,
	ListGroup
} from 'react-bootstrap';

export default class Screen1 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			title: 'alo'
		};
	}

	render() {
		const farms = this.props.farms;
		const title = this.state.title;

		return (
			<div>
				<h1>{title}</h1>
				<div>
					<FilterableFarmCardRow farms={farms} />
				</div>
			</div>
		);
	}
}

class FarmAtt extends React.Component {

	render() {
		const rows = []
		const farmAtt = this.props.farmAtt
		const attShown = this.props.attShown
		const link = "/farms/"+farmAtt['farm_id']
		console.log(link)
		attShown.forEach( (attribute) => {
			// console.log(attribute.key)

			if (attribute === 'name'){
				rows.push(
					<ListGroup.Item>
						{attribute}:
						<Link to={link}>{farmAtt[attribute]}</Link>
					</ListGroup.Item>
				)
			}else {
				rows.push(
					<ListGroup.Item>
						{attribute}: {farmAtt[attribute]}
					</ListGroup.Item>
				)
			}




		});

		return(
			<ListGroup variant="flush">
				{rows}
			</ListGroup>
		)
	}
}

class FarmCard extends React.Component{

	constructor(props){
		super(props)
		console.log(props)
		this.state = {
			isExpandOn: false,
		}
	}

	render(){
		const {isExpandOn, first} = this.state;

		const attShown = ['name', 'culture', 'variety', 'yield_estimation', 'price']

		return(
			<Card>
				<Button
					onClick={()=>this.setState({isExpandOn: !isExpandOn})}
					aria-controls="attributes-table"
					aria-expanded={isExpandOn}
				>
					{this.props.farmAtt['name']}
				</Button>
				<Collapse in={this.state.isExpandOn}>
					<div id="attributes-table">
						<FarmAtt
							farmAtt={this.props.farmAtt}
							attShown={attShown}
						/>
					</div>
				</Collapse>
			</Card>
		);
	}
}

class FarmCardRow extends React.Component {
	render() {
		const filterText = this.props.filterText
		const cards = []
		const farms = this.props.farms;

		farms.forEach( farm => {
			// console.log(farm.name)
			if( farm.name.indexOf(filterText) === -1)
				return;

			cards.push(
				<FarmCard farmAtt={farm}/>
			)
		})

		return(
			<div>
				{cards}
			</div>
		)
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: ''
		};
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
	}

	handleFilterTextChange(e){
		this.props.onFilterTextChange(e.target.value)
	}

	render(){

		const filterText = this.props.filterText;

		return(
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					onChange={this.handleFilterTextChange}
				/>
			</form>
		)
	}
}

class FilterableFarmCardRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: ''
		};
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
	}

	handleFilterTextChange(filterText){
		this.setState({
			filterText: filterText
		})
	}

	render(){
		return(
			<>
				<SearchBar
					filterText={this.state.filterText}
					onFilterTextChange={this.handleFilterTextChange}
				/>
				<FarmCardRow
					farms={this.props.farms}
					filterText={this.state.filterText}
				/>
			</>
		)
	}
}
