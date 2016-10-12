import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router';
import AppBar from 'material-ui/AppBar';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import CardWithPic from '../components/CardWithPic';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
var pic=require("../pic/bg@1x.jpg");
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import json from "../json/movies.json"
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
    constructor(props) {
        super(props);
        this.state = {
            value:1,
            vote:[],
            kinds:[0,0,0,0,0,0],
            open: false
        };
    };
    vote(id){
        var kind= Math.floor((id-1)/10)+1;
        console.log(id,kind);
        var kinds=this.state.kinds;
        if (kinds[kind]>=5 && this.state.vote[id]!==true){
            return 0//单一类型投票不能超过5个
        }else{
            if (typeof(this.state.vote[id])==="undefined"){
                this.state.vote[id]=false;
            }
            if (this.state.vote[id]==false){
                this.state.vote[id]=true;
                this.state.kinds[kind]++;
                return 1//投票成功
            }
            else{
                this.state.vote[id]=false;
                this.state.kinds[kind]--;
                return 2//取消投票成功
            }
        }
    }
    handleChange(id){
        window.scrollTo(0,0); 
        this.setState({
            value:id
        });
    }
    handleClose(){
        this.setState({open: false});
    };
    handleOpen(){
        this.setState({open: true});
    };
    next(){
        if (this.state.value==5){
            this.setState({
                open:true
            });
        }
        else if (this.state.value<5){
            window.scrollTo(0,0); 
            this.setState({
                value:this.state.value+1
            });
        }
    }
    prev(){
        if (this.state.value>1){
            window.scrollTo(0,0); 
            this.setState({
                value:this.state.value-1
            });
        }
    }
    render() {
        const actions = [
        <FlatButton
            label="取消"
            onTouchTap={this.handleClose.bind(this)}
        />,
        <FlatButton
            label="确认"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose.bind(this)}
        />,
        ];
        return (
            <div className="bg" style={{
                overflow:"hidden"
            }}>
            <div className="bg" style={{
                    background:`url(${require("../pic/bg@1x.jpg")}) no-repeat fixed`,
                    backgroundSize:"100% 100%",
                    width:"100%",
                    height:"100%",
                    position:"fixed",
                    zIndex:"0"
                    }}>
            </div>
            <div style={{
                height:48
                }}></div>
            <Tabs className="bg"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                tabItemContainerStyle={{
                    position:"fixed",
                    zIndex:100,
                    top: 0,
                    background:`url(${require("../pic/bg@1x.jpg")}) no-repeat fixed`,
                    backgroundSize:"100% 100%",
                    backgroundAttachment:"fixed",
                    fontSize:12,
                    overflow:"hidden"
                }}
                inkBarStyle={{
                    top: "48px",
                    zIndex:100,
                    position:"fixed",
                    background:"#5b5dff",
                    overflow:"hidden"
                }}
                contentContainerStyle={{
                    overflowY: "hidden"
                }}
                >

                    <Tab label="爱情" value={1}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item} id={item} name={json[item-1].name}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                    </Tab>
                    <Tab label="动画" value={2}>
                    {    
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item+10} id={item+10} name={json[item-1+10].name}
                            isVoted={typeof (this.state.vote[item+10])==="undefined"?0:this.state.vote[item+10]}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                    </Tab>
                    <Tab label="剧情" value={3}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item+20} id={item+20} name={json[item-1+20].name}
                            isVoted={typeof (this.state.vote[item+20])==="undefined"?0:this.state.vote[item+20]}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                    </Tab>
                    <Tab label="惊悚" value={4}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item+30} id={item+30} name={json[item-1+30].name}
                            isVoted={typeof (this.state.vote[item+30])==="undefined"?0:this.state.vote[item+30]}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                    </Tab>
                    <Tab label="动作" value={5}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item+40} id={item+40} name={json[item-1+40].name}
                            isVoted={typeof (this.state.vote[item+40])==="undefined"?0:this.state.vote[item+40]}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                    </Tab>
                </Tabs>
                <div style={{
                height:48
                }}></div>
                <Paper style={{
                    position:"fixed",
                    bottom:"0",
                    width:"100%",
                    background:"rgba( 247, 243, 249 ,0.702)",
                    borderRadius:0
                }}zDepth={2}>
                <FlatButton style={{
                    width:"50%",
                    height:"48px"
                }}label="上一页" onTouchTap={this.prev.bind(this)} disabled={this.state.value==1?true:false}  />
                <FlatButton style={{
                    width:"50%",
                    height:"48px",
                    fontWeight:"bold",
                    color:this.state.value==5?"#5b5dff":"#000"
                }} onTouchTap={this.next.bind(this)} label={this.state.value==5?"提交":"下一页"} />
                </Paper>
                <Dialog
                title="电影投票确认"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose.bind(this)}
                >
                这是预留的确认按钮
                </Dialog>
            </div>
        );
    }
}
export default App;