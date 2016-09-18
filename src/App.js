import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './App/theme';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AppBar from './App/appbar';

class App extends Component {
  render() {
    const theme = getMuiTheme(myTheme);
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <AppBar session={this.props.state.session}/>
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
let mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(App);
