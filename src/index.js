import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './containers/App'
require("./css/global.css");
// require("./font-icons/style.css");
injectTapEventPlugin();
import 'whatwg-fetch'
const muiTheme = getMuiTheme({
  tabs: {
    textColor: "#fff",
    selectedTextColor: "#5b5dff",
  },
  palette:{
    primary1Color: "#5b5dff"
  }
});

ReactDOM.render((        
    <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
    </MuiThemeProvider>
),document.getElementById('root'));

