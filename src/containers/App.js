import React, {Component} from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
class App extends Component {
    // constructor(props, context) {
    //     super(props, context);
    //     // this.state={
    //     //     count:0
    //     // }
    // }
    // inc(){
    //     this.setState({
    //         count:this.state.count+1
    //     });
    // }
    // dec(){
    //     this.setState({
    //         count:this.state.count-1
    //     });
    // }



    render() {
        return (
            <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}
export default App;