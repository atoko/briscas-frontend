import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './App/theme';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import AppBar from './App/appbar';
import FacebookInitialLogin from './App/facebook';
import * as session from './App/store/ducks/session';

class App extends Component {
  facebookLogin = () => {
    const sessionEmpty = this.props.state.session.login === null;
    const fbQuerystrings = this.props.location.search !== "";
    if (sessionEmpty && fbQuerystrings) {
      return <FacebookInitialLogin onLogin={this.props.onLogin}/>
    } else {
      return null;
    }    
  }
  render() {
    const theme = getMuiTheme(myTheme);
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <AppBar session={this.props.state.session}/>
  				{this.facebookLogin()}
          <div className="container">
            {React.cloneElement(this.props.children, {
              state: this.props.state
            })}
            </div>
          <div style={
            {
              color: '#FAFAFA',
              textAlign: 'center',
              bottom: '100%',
              marginTop: '12px'
            }
          }>
            Pedro 2016 
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

let mapStateToProps = (state) => {
  return { 
    state
  };
};
let mapDispatchToProps = (dispatch) => {
	return {
		onLogin: (data) => {
			dispatch(session.login(data))
		},
		onLogout: () => {
			dispatch(session.logout())
		}
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
