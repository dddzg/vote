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
var pic=require("../pic/bg@1x.jpg");
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
            value:"1",
            vote:[],
            kinds:[0,0,0,0,0]
        };
        // console.log(this.state.vote[1]===0);
    };
    vote(id){
        var kind= Math.floor(id/10)+1;
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
        this.setState({
            value:id
        });
    }
    render() {
        return (
            <div className="bg" style={{
                position:"relative",
                height:window.screen.height,
                maxHeight:window.screen.height,
                background:`url(${require("../pic/bg@1x.jpg")}) no-repeat fixed`,
                backgroundSize:"100% 100%",
                overflow:"hidden"
            }}>
                <Tabs
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                tabItemContainerStyle={{
                    position:"fixed",
                    zIndex:100,
                    top: 0,
                    backgroundColor:"",
                    fontSize:12
                }}
                inkBarStyle={{
                    top: "48px",
                    zIndex:100,
                    position:"fixed",
                    background:"#5b5dff"
                }}
                contentContainerStyle={{
                    marginTop:"50px",
                    overflow: "scroll",
                    height:window.screen.height-50,
                }}
                >
                    <Tab label="爱情" value="1">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item} id={item} 
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                        <RaisedButton label="下一页" primary={true} onTouchTap={this.handleChange.bind(this,"2")} />
                    </Tab>
                    <Tab label="动作" value="2">
                    {    
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item+10} id={item+10} 
                            isVoted={typeof (this.state.vote[item+10])==="undefined"?0:this.state.vote[item+10]}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                        <RaisedButton label="上一页" primary={true} onTouchTap={this.handleChange.bind(this,"1")} />
                        <RaisedButton label="下一页" primary={true} onTouchTap={this.handleChange.bind(this,"3")} />
                    </Tab>
                    <Tab label="剧情" value="3">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item+20} id={item+20} 
                            isVoted={typeof (this.state.vote[item+20])==="undefined"?0:this.state.vote[item+20]}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                        <RaisedButton label="上一页" primary={true} onTouchTap={this.handleChange.bind(this,"2")} />
                        <RaisedButton label="下一页" primary={true} onTouchTap={this.handleChange.bind(this,"4")} />
                    </Tab>
                    <Tab label="恐怖" value="4">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item+30} id={item+30} 
                            isVoted={typeof (this.state.vote[item+30])==="undefined"?0:this.state.vote[item+30]}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                        <RaisedButton label="上一页" primary={true} onTouchTap={this.handleChange.bind(this,"3")} />
                        <RaisedButton label="下一页" primary={true} onTouchTap={this.handleChange.bind(this,"5")} />
                    </Tab>
                    <Tab label="害怕" value="5">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>
                            <CardWithPic key={item+40} id={item+40} 
                            isVoted={typeof (this.state.vote[item+40])==="undefined"?0:this.state.vote[item+40]}
                            vote={this.vote.bind(this)}
                            />
                        )
                    }
                        <RaisedButton label="上一页" primary={true} onTouchTap={this.handleChange.bind(this,"4")} />
                        <RaisedButton label="提交" primary={true}  />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}
export default App;