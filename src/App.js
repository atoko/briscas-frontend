import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './App/theme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor() {
    super();
    this.state = {login: null};
    this.setLoginState = this.setLoginState.bind(this);
  }
  setLoginState(state) {
    this.setState({
      login: state
    });
  }
  render() {
    const theme = getMuiTheme(myTheme);
    return (
      <MuiThemeProvider muiTheme={theme}>
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
          {React.cloneElement(this.props.children, {
            setLoginState: this.setLoginState
          })}
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

export default App;
