import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Card
							title={"Card 1 title"}
							image={
								"http://www.freeimageslive.com/galleries/sports/sportsgames/pics/2dice2.jpg"
							}
							body={
								"Phasellus rutrum sapien non viverra placerat. Maecenas non quam lobortis."
							}
							button={"Click here"}
						/>
					</div>
					<div className="col-md-3">
						<Card
							title={"Card 2 title"}
							image={
								"http://www.freeimageslive.com/galleries/sports/sportsgames/pics/whitedice1.jpg"
							}
							body={
								"Phasellus rutrum sapien non viverra placerat. Maecenas non quam lobortis."
							}
							button={"Click here"}
						/>
					</div>
					<div className="col-md-3">
						<Card
							title={"Card 3 title"}
							image={
								"http://www.freeimageslive.com/galleries/sports/sportsgames/pics/whitedice3.jpg"
							}
							body={
								"Phasellus rutrum sapien non viverra placerat. Maecenas non quam lobortis."
							}
							button={"Click here"}
						/>
					</div>
					<div className="col-md-3">
						<Card
							title={"Card 4 title"}
							image={
								"http://www.freeimageslive.com/galleries/sports/sportsgames/pics/surfer.jpg"
							}
							body={
								"Phasellus rutrum sapien non viverra placerat. Maecenas non quam lobortis."
							}
							button={"Click here"}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
