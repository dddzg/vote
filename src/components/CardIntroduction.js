import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
require("../css/paiban.css");
class CardIntroduction extends Component {
    render() {
        return (
            <div onTouchTap={()=>
            this.props.expand()}
            style={{
                padding:"0 0 0 80px",
                position:"relative",
                height:"81px",
                fontFamily:"Microsoft Yahei",
                width:"100%"
            }}>
                <div className="CardPic">
                    <img  src={require("../pic/posters/your-name.png")} style={{
                    width:56,
                    height:81
                    }}/>
                </div>
                <div className="CardIntr">
                    <p>
                        北京遇上西雅
                    </p>
                </div>
            </div>
        );
    }
}

export default CardIntroduction;