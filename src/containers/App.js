import React, {
    Component
} from 'react';
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
import CircularProgress from 'material-ui/CircularProgress';
import json from "../json/movies.json"
import Tab1 from '../components/Tab1.js'
const json1=json.slice(0,10);
const json2=json.slice(10,20);
const json3=json.slice(20,30);
const json4=json.slice(30,40);
const json5=json.slice(40,50);
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
            open: false,
            num:"",
            done:false,
            status:0
        };
    }
    vote(id){
        var kind= Math.floor((id-1)/10)+1;
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
    handleSubmit(){
        var storage = window.localStorage;
        if (storage.getItem("number")===null){
            this.setState({
                done:true
            })

            var vote={};
            for (var i=1;i<=50;++i){
                if (typeof this.state.vote[i]==="undefined" || this.state.vote[i]===0)
                    vote[i]=0;
                else vote[i]=1;
            }
            var json=JSON.stringify(vote);
            //console.log(json);
            fetch(`http://121.42.60.112/VoteMovies/vote.php`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:`vote=${json}`
            })
            .then((response)=>{
                return response.json();
            }).then((json)=>{
                
                storage.setItem("number",json.info);
                this.setState({
                    num:json.info
                })
                this.forceUpdate();
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
        }else{
            this.setState({
                done:true,
                num:storage.getItem("number")
            })
        }
    }
    next(){
        if (this.state.value==5){
            var storage = window.localStorage;
            if (storage.getItem("number")==null)
                this.setState({
                    open:true
                });
            else{
                this.setState({
                    open:true,
                    status:1
                });
            }
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
            onTouchTap={this.handleSubmit.bind(this)}
        />,
        ];
        var last;
        if (this.state.done==false){
            last=
            <div>
                <div style={{
                    height:48
                    }}></div>
                <Tabs 
                    ref="dzg2"
                    className="bg"
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
                            <Tab1 name={json1} vote={this.vote.bind(this)} num={0}/>
                        </Tab>
                        <Tab label="动画" value={2}>
                            <Tab1 name={json2} vote={this.vote.bind(this)} num={10}/>
                        </Tab>
                        <Tab label="剧情" value={3}>
                            <Tab1 name={json3} vote={this.vote.bind(this)} num={20}/>
                        </Tab>
                        <Tab label="惊悚" value={4}>
                            <Tab1 name={json4} vote={this.vote.bind(this)} num={30}/>
                        </Tab>
                        <Tab label="动作" value={5} ref="dzg">
                            <Tab1 name={json5} vote={this.vote.bind(this)} num={40}/>
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
                    {this.state.status===0?
                        <div>
                            <div>每个用户只能投<bold style={{color:"red"}}>1</bold>次票。</div>
                            <div>你确认提交吗？</div>
                        </div>:
                        <div>
                            <div>你之前已经投过票了，你可以点击确认，查看<bold style={{color:"red"}}>印花</bold></div>
                        </div>
                    }
                    </Dialog>
                </div>
        }
        else{
            last=this.state.num!==""?
            <div style={{
            position: "absolute",
            height: "100%",
            overflow:"hidden"
            }}>
                <div className="flex">
                    <div className="line">
                        <img src={require("../pic/123.png")} alt="印花"/>
                    </div>
                    <div className="line">
                        <p className="line">
                            投票成功！
                        </p>
                        <p className="line">
                        恭喜获得一枚印花
                        </p>
                    </div>
                    <div className="line"> 
                        <p className="line green">
                            抽奖码:{this.state.num}
                        </p>
                        <p className="line">
                            请<bold>截图</bold>保存
                        </p>
                    </div>
                    <div style={{paddingBottom:"30px"}}>
                        <p className="line">
                        请于<bold>10月18、19日</bold>
                        至
                        <bold>一饭</bold>或
                        <bold>二饭</bold>雕刻时光摆摊处凭<bold>抽奖码</bold>抽奖一次
                        </p>
                    </div>
                </div>
                </div>
                :
                <div style={{
                position: "absolute",
                height: "100%",
                overflow:"hidden"
                }}>
                <div className="flex">
                    <CircularProgress size={100} thickness={6} />
                </div>
            </div>
        }
        return (
            <div className="bg" style={{
                background:"black"
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
                {last}
            </div>
        );
    }
}
export default App;