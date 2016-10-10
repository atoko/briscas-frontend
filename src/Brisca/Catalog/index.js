import React, {Component} from 'react';
import Get from '../../App/containers/get';
import Catalog from './components/catalog';
import { connect } from 'react-redux';
class GameCatalog extends Component {
	render() {
		return <Get on401="/gateway?logout&redirect=profile" url={'briscas/member'}>
			<Catalog/>
		</Get>;
	}
}
let mapStateToProps = (state) => {
	return { session: state.session };
};
export default connect(mapStateToProps, null)(GameCatalog);