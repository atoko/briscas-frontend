import React, { Component } from "react";
class Menu extends Component {
	render() {
		return <div>
			<div>
				<button onClick={() => {this.props.onSubmit({ roomType: "public" })}} label="Create">Create</button>
				<button label="Join">Join</button>
			</div>
			<div>
				Create Game

			</div>
		</div>;
	}
}

export default Menu;