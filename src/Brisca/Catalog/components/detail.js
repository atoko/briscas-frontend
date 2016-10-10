import React, {Component} from 'react';
import PostButton from '../../../App/components/postButton';
class Detail extends Component {
	saveSetting = () => {
		let {public_data} = this.props.member;
		public_data.deck = this.props.data.id;
		return {
			...this.props.member,
			public_data
		};
	}
	onSuccess = () => {

	}
	render() {
		if (this.props.data) {
			return <div>
				<div>{JSON.stringify(this.props.data)}</div>
				<PostButton 
					body={this.saveSetting()}
					url="briscas/member"
					on200={this.onSuccess}
				/>
			</div>;
		} else
		{
			return <span>"loading"</span>;
		}
	}
}
export default Detail;