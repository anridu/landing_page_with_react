import React from "react";
import PropTypes from "prop-types";

//create your first component
export default function Card(props) {
	return (
		<div className="card" style="width: 18rem;">
			<div>
				<img className="card-img-top" />
			</div>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card content.
				</p>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string
};
