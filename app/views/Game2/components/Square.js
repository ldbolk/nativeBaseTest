import React from 'react';

import { View } from 'react-native';

import { registerRootComponent } from 'expo';

import Fail from '../components/Assets/fail.png';
import Win from '../components/Assets/win.png';
import Misc from '../components/Assets/main.png';


class Square extends React.Component {

    getValue() {
        if (!this.props.value.isRevealed) {
            return this.props.value.isCat ? <img src={Win} alt=""/> : null;
        }
        if (this.props.value.isDog) {
            return <img src={Fail} alt="" className="image-loss"/>
        }
        if (this.props.value.neighbour) {
            return <img src={Win} alt="" className="image-win"/>
        }
        if (this.props.value.neighbour === 0) {
            return <img src={Misc} alt="" className="image-misc"/>
        }
    }

    render() {
        let className = "square" + (this.props.value.isRevealed ? " " : " hidden") + (this.props.value.isDog ? "is-dog" : " ") + (this.props.value.isCat ? "is-cat" : " ");

        return (
            <View ref="square" onClick={this.props.onClick} className={className}>
                {this.getValue()}
            </View>
        )
    }
}

export default Square