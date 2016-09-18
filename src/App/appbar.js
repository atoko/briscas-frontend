import React, { Component } from 'react';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

class AppBar extends Component {
  renderButtons = () => {
    const linkStyle = {
      height: '65',
      borderRight: '1px black solid'
    }
console.log(this.props);
    if (this.props.session.login === null) {
      return [
        <Link key="home" to="/"><RaisedButton style={linkStyle} label="%Lobby%" primary={true}/></Link>,
        <Link key="logout" to="/gateway"><RaisedButton style={linkStyle} label="%Login%" secondary={true}/></Link>        
      ]
    }
    else {
      return [
        <Link key="home" to="/"><RaisedButton style={linkStyle} label="%Lobby%" primary={true}/></Link>,
        <Link key="profile" to="/profile"><RaisedButton style={linkStyle} label="%Profile%" primary={true}/></Link>,
        <Link key="logout" to="/gateway?logout"><RaisedButton style={linkStyle} label="%Logout%" secondary={true}/></Link>
      ];
    }
  }
	render() {	
		return <div className="app-menu">
              <h2 className="app-header" >BriscaAU</h2>
              {this.renderButtons()}
          </div>;
	}
}

export default AppBar;