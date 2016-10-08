import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router,Route,hashHistory,IndexRoute,Link,Redirect,browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App'
require("./css/global.css");
injectTapEventPlugin();



ReactDOM.render((        
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
        </Router>
    </MuiThemeProvider>
),document.getElementById('root'));

