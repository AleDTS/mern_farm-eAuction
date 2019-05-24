import React from 'react'
import logo from '../logo.svg';
import { Nav,Navbar } from 'react-bootstrap';
// import { Route } from 'react-router-dom';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
		      value: ''
		};
    }

	Title(props){
		return (
			<Navbar className="justify-content-between" variant="dark" bg="dark">
				<Navbar.Brand href="#home">
				  <img
					alt=""
					src={props.imgpath}
					width="30"
					height="30"
					className="d-inline-block align-top"
				  />
				  {props.title}
				</Navbar.Brand>
				<Nav>
				  <Nav.Link href="#">Login</Nav.Link>
				</Nav>
			</Navbar>
		)
	}

	render() {
		return (
			<this.Title title='Titulo' imgpath="../logo.svg" />
		);
	}

}
