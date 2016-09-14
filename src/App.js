import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="BriscaAU"
            style={{
              backgroundColor: '#212121'
            }}
            titleStyle={{
              color: '#03A9F4'              
            }}
            showMenuIconButton={false}
          />   
          {this.props.children}
          <div style={
            {
              color: '#FAFAFA',
              textAlign: 'center',
              bottom: '100%',
              marginTop: '12px'
            }
          }>
            Atoko 2016 
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
