import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Form, Button, FormControl, Nav } from "react-bootstrap";

export const TabBarMenu = () => {
	return (
		<>
			<br />

			<Nav id="TabBarMenu" className="nav flex-column bg-dark" style={{ width: "12%", height: "100%" }}>
				<Link className="nav-link active" href="#">
					Todos los Productos
				</Link>
				<Link className="nav-link" href="#">
					Producto 1
				</Link>
				<Link className="nav-link" href="#">
					Producto 2
				</Link>
				<Link className="nav-link" href="#">
					Producto 3
				</Link>
				<Link className="nav-link" href="#">
					Producto 4
				</Link>
				<Link className="nav-link" href="#">
					Producto 5
				</Link>
				<Link className="nav-link" href="#">
					Producto 6
				</Link>
				<Link className="nav-link" href="#">
					Producto 7
				</Link>
				<Link className="nav-link" href="#">
					Producto 8
				</Link>
				<Link className="nav-link" href="#">
					Producto 9
				</Link>
				<Link className="nav-link" href="#">
					Producto 10
				</Link>
				<Link className="nav-link" href="#">
					Producto 11
				</Link>
				<Link className="nav-link" href="#">
					Producto 12
				</Link>
			</Nav>
		</>
	);
};
