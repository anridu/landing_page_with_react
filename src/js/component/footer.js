import React from "react";

//create your first component
export default function Jumbotron() {
	return (
		<div>
			<footer id="main-footer" className="bg-dark">
				<div className="container">
					<div className="row">
						<div className="col text-center py-4 text-light">
							<p>
								Copyright &copy; Your Website 2021
								<span id="year" />
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
