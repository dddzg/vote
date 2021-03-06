import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
class CardExtra extends Component {
    render() {
        return (
            <div>
                <CardText onTouchTap={()=>
            this.props.expand()} style={{
                    padding:"0 10px 12px",
                    fontSize:"12px",
                    lineHeight:"18px"
                }}>
                {
                    <div style={{color:"#f7f3f9"}}>
                        {this.props.extra}
                    </div>
                }
                </CardText>
            </div>
        );
    }
}

export default CardExtra;