import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {GridList, GridTile} from 'material-ui/GridList';
import CardIntroduction from './CardIntroduction';
import RaisedButton from 'material-ui/RaisedButton';
import CardExtra from './CardExtra'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Snackbar from 'material-ui/Snackbar';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';
require("../css/animate.css");
class CardWithPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            voted:false,
            open:false,
            message:""
        };
    }
    shouldComponentUpdate(nextProps,nextState) {
        if (nextState.open!==this.state.open || nextState.expanded!==this.state.expanded || nextState.voted!==this.state.voted)
            return true;
        else return false;
    }
    handleExpandChange () {
        this.setState({ expanded: !this.state.expanded });
    };
    render() {
        var ava=<div className="cardbox">
            <CardIntroduction expand={this.handleExpandChange.bind(this)}/>
            <Checkbox
                style={{
                    display:"block",
                    width:"24px"
                }}
                iconStyle={{
                    fill:"#5b5dff"
                }}
                checkedIcon={<img src={require("../pic/check_48px2.0.png")} width="24px" height="24px"/>}
                uncheckedIcon={<img src={require("../pic/check_48px6.0.png")} width="24px" height="24px"/>}
                checked={this.state.voted}
                onCheck={()=>{
                            var num=this.props.vote(id);
                            var mess="";
                            var tempvote=false;
                            switch (num) {
                                case 0:
                                    mess="单一类型投票不能超过5个";
                                    tempvote=false;
                                    break;
                                case 1:
                                    mess="投票成功";
                                    tempvote=true;
                                    break;
                                case 2:
                                    mess="取消投票成功";
                                    tempvote=false;
                                    break;
                                default:
                                    break;
                            }
                            this.setState({
                                mess:mess,
                                open:true,
                                voted:tempvote
                            });
                        }}
            />
        </div>;
        var extra=<CardExtra/>
        var {id}=this.props;
        return (
            <div>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)} style={{
                    margin:"8px 14px 8px",
                    backgroundColor:"rgba(255, 255, 255, 0.7)"
                }}>
                    <CardHeader
                        avatar={ava}
                        actAsExpander={false}
                        showExpandableButton={false}
                        titleStyle={{display:"none"}}
                        textStyle={{display:"none"}}
                        subtitleStyle={{display:"none"}}
                        style={{
                            padding:"9px 9px 9px"
                        }}>
                    </CardHeader>
                    <Snackbar
                        open={this.state.open}
                        message={this.state.mess}
                        autoHideDuration={200000}
                        onRequestClose={()=>{
                            this.setState({
                                open:false
                            });
                        }}
                    />
                    <ReactCSSTransitionGroup 
                        transitionName="example" 
                        transitionEnterTimeout={500} 
                        transitionLeaveTimeout={300}>
                        {this.state.expanded==true?extra:null}
                    </ReactCSSTransitionGroup>
                </Card>
            </div>
        )
    }
}

export default CardWithPic