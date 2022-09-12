import React from 'react';
import { Box } from 'native-base'


import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import { Dimensions, StatusBar } from 'react-native';
import * as Styles from '../../resources/styles/Styles';

import Boxe from './Box';


function Game1() {
    const { width, height } = Dimensions.get("screen");
    const boxSize = Math.trunc(Math.max(width, height) * 0.075);
    const initialBox = Matter.Bodies.rectangle(width / 2, height / 2, boxSize, boxSize);

    const floor = Matter.Bodies.rectangle(width / 2, height - boxSize / 2, width, boxSize, { isStatic: true })

    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;

    const Physics = (entities, { time }) => {
        let engine = entities["physics"].engine;
        Matter.Engine.update(engine, time.delta);
        return entities;
    }

    Matter.World.add(world, [initialBox, floor]);
    return(
        <Box
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
        >
        <GameEngine 
            style={Styles.container}
            systems={[Physics]}
            entities={{
                physics: {
                    engine: engine,
                    world: world
                },
                initialBox: { 
                    body: initialBox, 
                    size: [boxSize, boxSize], 
                    color: 'red', 
                    renderer: Boxe 
                },
                floor: { 
                    body: floor,
                    size: [width, boxSize],
                    color: 'green',
                    renderer: Box    
                },
            }}
        >
            <StatusBar hidden={true}/>
        </GameEngine>
      </Box>
    )
}

export default Game1;