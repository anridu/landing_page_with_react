import React from "react";

//create your first component
export default function Navbar() {
	return (
		<div className="navbar navbar-light bg-dark justify-content-between">
			<a className="navbar-brand">Bootstrap Navbar</a>
			<div className="navbar-nav">
				<a className="nav-item nav-link" href="#">
					Home
				</a>
				<a className="nav-item nav-link" href="#">
					About
				</a>
				<a className="nav-item nav-link" href="#">
					Services
				</a>
				<a className="nav-item nav-link" href="#">
					Contact
				</a>
			</div>
		</div>
	);
}
