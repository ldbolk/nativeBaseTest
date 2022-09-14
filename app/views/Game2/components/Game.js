import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';
import Board from './Board';

class Game extends React.Component {

    state = {
        height: 5,
        width: 5,
        dogs: 10,
    }

    render() {
        const { height, width, dogs } = this.state;
        
        return (
            <View className="game">
                <View className="game-board">
                    <Board height={height} width={width} dogs={dogs} />
                </View>
            </View>
        )
    }
}

export default Game