import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router,Route,hashHistory,IndexRoute,Link,Redirect,browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  grey50, 
  cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import App from './containers/App'
require("./css/global.css");
// require("./font-icons/style.css");
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  tabs: {
    textColor: "#fff",
    selectedTextColor: "#5b5dff"
  }
});

ReactDOM.render((        
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
        </Router>
    </MuiThemeProvider>
),document.getElementById('root'));

