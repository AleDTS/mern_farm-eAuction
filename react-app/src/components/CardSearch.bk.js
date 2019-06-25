import React from 'react'
import { Link } from 'react-router-dom'

import {
	Button,
	Collapse,
	Card,
	ListGroup,
	ToggleButtonGroup,
	ToggleButton
} from 'react-bootstrap';

// import {RadioGroup, Radio} from 'react-radio-group';

export default class CardSearch extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			filterText: ''
		};
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
		this.changeFarm = this.changeFarm.bind(this)
	}

	handleFilterTextChange(filterText){
		this.setState({
			filterText: filterText
		})
	}

	changeFarm(value){
		this.props.changeFarm(value);
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
					changeFarm={this.changeFarm}
				/>
			</>
		)
	}
}

class FarmAtt extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			attShown: {
				'name': 'Name',
				'culture': 'Culture',
				'variety': 'Variety',
				'yield_estimation': 'Yield Estimation',
				'price': 'Price'
		  	},
		}
	}

	render() {
		const rows = []
		const farm = this.props.farm
		const {attShown} = this.state
		const link = "/farms/"+farm['farm_id']

		Object.keys(attShown).forEach( (attribute) => {

			if (attribute == 'name'){
				rows.push(
					<ListGroup.Item>
						{attShown[attribute]}:
						<Link to={link}> {farm[attribute]}</Link>
					</ListGroup.Item>
				)
			}else {
				rows.push(
					<ListGroup.Item>
						{attShown[attribute]}: {farm[attribute]}
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

		this.state = {
			isExpandOn: false,
		}
	}

	render(){
		const {isExpandOn} = this.state;

		return(
			<Card>
				<ToggleButton
					type="radio"
					value={this.props.farm['farm_id']}
					onClick={() => this.setState({isExpandOn: !isExpandOn})}
					aria-controls="attributes-table"
					aria-expanded={isExpandOn}
				>
					{this.props.farm['name']}
				</ToggleButton>
				<Collapse in={this.state.isExpandOn}>
					<div id="attributes-table">
						<FarmAtt
							farm={this.props.farm}
						/>
					</div>
				</Collapse>
			</Card>
		);
	}
}

class FarmCardRow extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			farm: 0
		}
	}

	getInitialState() {
	    return {farm: 221};
	}

	changeRadio(value){
		this.setState({farm: value})
		this.props.changeFarm(value)
	}

	render() {
		const filterText = this.props.filterText
		const cards = []
		const farms = this.props.farms;
		const {farm} = this.state;

		farms.forEach( farm => {
			if( farm.name.indexOf(filterText) === -1)
				return;

			cards.push(
				<FarmCard farm={farm}/>
			)
		})

		return(
			<ToggleButtonGroup
				toggle
		        name="farm"
		        selectedValue={farm}
				onChange={(value)=>this.changeRadio(value)}
			>
				{cards}
			</ToggleButtonGroup>
		)
	}
}

// onChange={(value)=>this.props.changeFarm(value)}

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
