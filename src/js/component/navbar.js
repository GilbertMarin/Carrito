import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Form, Button, FormControl, Nav } from "react-bootstrap";

export const NavbarMenu = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">Buscar</Button>
			</Form>
			<Nav className="mr-0">
				<Nav.Link href="#features">Cuenta</Nav.Link>
				<Nav.Link href="#pricing">Deseos</Nav.Link>
				<Nav.Link href="#pricing">Carrito</Nav.Link>
			</Nav>
		</Navbar>
	);
};
