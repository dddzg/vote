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
            message:"",
            extra:""
        };
    }
    shouldComponentUpdate(nextProps,nextState) {
        if (nextState.open!==this.state.open || nextState.expanded!==this.state.expanded || nextState.voted!==this.state.voted)
            return true;
        else return false;
    }
    handleExpandChange () {
        console.log(this.state);
        this.setState({ 
            expanded: !this.state.expanded,
            extra:this.props.name.details
        });
    };
    render() {
        var ava=<div className="cardbox" style={{marginRight:0}}>
            <CardIntroduction expand={this.handleExpandChange.bind(this)} id={this.props.id} name={this.props.name.name}/>
            <Checkbox
                style={{
                    display:"block",
                    width:"24px",
                    margin:"14px"
                }}
                iconStyle={{
                    fill:"#5b5dff",
                    transitionDuration:"200ms"
                }}
                checkedIcon={<img src={require("../pic/check_48px2.0.png")} width="24px" height="24px"/>}
                uncheckedIcon={<img src={require("../pic/check_48px6.0.png")} width="24px" height="24px"/>}
                checked={this.state.voted}
                onCheck={()=>{
                            var num=this.props.vote(id);
                            var open=false;
                            var tempvote=false;
                            switch (num) {
                                case 0:
                                    open=true;
                                    tempvote=false;
                                    break;
                                case 1:
                                    open=false;
                                    tempvote=true;
                                    break;
                                case 2:
                                    open=false;
                                    tempvote=false;
                                    break;
                                default:
                                    break;
                            }
                            this.setState({
                                open:open,
                                voted:tempvote
                            });
                        }}
            />
        </div>;
        var {id}=this.props;
        return (
            <div >
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)} containerStyle={{
                    borderRadius: 4
                }} style={{
                    margin:"8px 14px 8px",
                    backgroundColor: "rgba( 255, 255, 255 , 0.322)"
                }}
                >
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
                        message="同一类型投票不能超过5个"
                        autoHideDuration={2000}
                        onRequestClose={()=>{
                            this.setState({
                                open:false
                            });
                        }}
                    />
                    <ReactCSSTransitionGroup
                        transitionName="example" 
                        transitionEnterTimeout={200} 
                        transitionLeaveTimeout={200}
                    >
                    {this.state.expanded==true?<CardExtra expand={this.handleExpandChange.bind(this)} extra={this.state.extra}/>:null}
                    </ReactCSSTransitionGroup>
                </Card>
            </div>
        )
    }
}

export default CardWithPic