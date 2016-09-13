import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="KaggleDemo"
            style={{
              backgroundColor: '#212121'
            }}
            titleStyle={{
              color: '#03A9F4'              
            }}
            showMenuIconButton={false}
          />   
          {this.props.children}        
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
