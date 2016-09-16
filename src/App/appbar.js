import React, { Component } from 'react';
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

class AppBar extends Component {
	render() {	
    const linkStyle = {
      height: '65',
      borderRight: '1px black solid'
    }
		return <div className="app-menu">
            <h2 className="app-header" >BriscaAU</h2>
            <div>
              <Link to="/"><RaisedButton style={linkStyle} label="%Lobby%" primary={true}/></Link>            
              <Link to="/profile"><RaisedButton style={linkStyle} label="%Profile%" primary={true}/></Link>            
              <Link to="/gateway?logout"><RaisedButton style={linkStyle} label="%Logout%" secondary={true}/></Link>
            </div>
          </div>;
	}
}

export default AppBar;