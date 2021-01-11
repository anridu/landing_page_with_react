import React from "react";
import Navbar from "./Navbar"; //Function
import Jumbotron from "./Jumbotron"; //Clase
import Card from "./Card"; //Hook

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Card title={"title 1"} />
			<Jumbotron />
		</div>
	);
}
