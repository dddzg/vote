import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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
                    我是萌萌的电影详情介绍我是萌萌的电影详情介绍我是萌萌的电影详情介绍我是萌萌的电影详情介绍我是萌萌的电影详情介绍
                    我是萌萌的电影详情介绍我是萌萌的电影详情介绍我是萌萌的电影详情介绍我是萌萌的电影详情介绍我是萌萌的电影详情介绍我是萌萌的电影详情介绍
                </CardText>
            </div>
        );
    }
}

export default CardExtra;