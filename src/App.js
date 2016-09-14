import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
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
    console.log(this.state.login);
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
            Atoko 2016 
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
