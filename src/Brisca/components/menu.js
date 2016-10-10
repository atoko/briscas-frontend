import React, { Component } from "react";
import List from "./list";
import Get from "../../App/containers/get";
class Menu extends Component {
	render() {
		return <div>
			<div>
				<button onClick={() => {this.props.onSubmit({ roomType: "public" })}} label="Create">Create</button>
				<button label="Join">Join</button>
			</div>
			<div>
				<Get url="briscas/active"><List/></Get>
			</div>
		</div>;
	}
}

export default Menu;