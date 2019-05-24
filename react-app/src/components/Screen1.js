import React from 'react'
import Map from './Map'

export default class Screen1 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			  value: ''
		};
	}

	render() {
		return (
			<div>
				<div>
					<h1>Farm X</h1>
					<div>
						<FilterableFarmCardRow farms={FARMS} />
					</div>
				</div>
				<div>
					<Map />
				</div>
			</div>

		);
	}
}


class FarmAttRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.key}</td>
				<td>{this.props.value}</td>
			</tr>
		);
	}
}

class FarmCard extends React.Component {

	render() {
		const rows = []
		const farmAtt = this.props.farmAtt

		this.props.att_shown.forEach( (attribute) => {
			rows.push(
				<FarmAttRow
					key={attribute.key}
					value={farmAtt[attribute]}
				/>
			)
		})

		return(
			<div>
				<button>
					expand
				</button>
				<table>
					<tbody>{rows}</tbody>
				</table>
			</div>
		)
	}
}


class FarmCardRow extends React.Component {
	render() {
		const filterText = this.props.filterText
		const cards = []
		const farms = this.props.farms;
		// console.log(filterText)
		farms.forEach( farm => {
			console.log(farm.name)
			if (
				( farm.name.indexOf(filterText) === -1)
			)
				return;

			cards.push(
				<FarmCard farmAtt={farm} att_shown={ATT_SHOWN}/>
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
		// console.log(this.filterText)
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
			<div>
				<SearchBar
					filterText={this.state.filterText}
					onFilterTextChange={this.handleFilterTextChange}
				/>
				<FarmCardRow
					farms={this.props.farms}
					filterText={this.state.filterText}
				/>
			</div>
		)
	}
}

const ATT_SHOWN = ['name', 'culture', 'variety', 'yield_estimation', 'price']

const FARMS = [
	{ "farm_id" : 221, "name" : "Farm X", "latitude" : 4.68566, "longitude" : -74.21133, "culture" : "soybean", "variety" : "XXX1", "total_area" : 1000, "yield_estimation" : 60, "price" : 72, "__v" : 0 },
	{ "farm_id" : 231, "name" : "Farm Y", "latitude" : -20.41673, "longitude" : -48.75594, "culture" : "soybean", "variety" : "XXX2", "total_area" : 900, "yield_estimation" : 85, "price" : 81, "__v" : 0 },
	{ "farm_id" : 271, "name" : "Farm Z", "latitude" : -22.946619, "longitude" : -45.580756, "culture" : "rice", "variety" : "XXX1", "total_area" : 850, "yield_estimation" : 58, "price" : 80.5, "__v" : 0 }
]
