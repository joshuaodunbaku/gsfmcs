import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import IMAGES from "../assets/Images";
// import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
	// // const navigate = useNavigate();
	const [expanded, setExpanded] = useState(false);

	const handleToggle = () => {
		setExpanded(!expanded);
	};

	const handleNavSelect = () => {
		setExpanded(false); // Close the navbar on selection (for mobile)
	};

	return (
		<Navbar
			collapseOnSelect={true}
			expanded={expanded}
			onToggle={handleToggle}
			expand="lg"
			className="bg-light py-3 shadow-sm navbar-white"
		>
			<Container>
				<Navbar.Brand>
					<span className="fw-bold">GSGFMCS</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link
							onClick={() => {
								handleNavSelect();
								// navigate("/");
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								handleNavSelect();
								// navigate("/cashier-window");
							}}
						>
							About
						</Nav.Link>

						<Nav.Link
							onClick={() => {
								handleNavSelect();
								// navigate("/acct-voucher-creation");
							}}
						>
							Services
						</Nav.Link>

						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
