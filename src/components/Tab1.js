import React, {Component} from 'react';
import CardWithPic from './CardWithPic'
class Tab1 extends Component {
    shouldComponentUpdate(){
        return false;
    }
    render() {
        return (
            <div>
                {[1,2,3,4,5,6,7,8,9,10].map((item)=>
                                <CardWithPic key={item+this.props.num} id={item+this.props.num} name={this.props.name[item-1].name}
                                vote={this.props.vote}
                                />
                            )}
            </div>
        );
    }
}

export default Tab1;