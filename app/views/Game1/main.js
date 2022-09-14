import React from 'react';


import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import { Dimensions, StatusBar } from 'react-native';
import * as Styles from '../../resources/styles/Styles';

import Box from './Box';
import createBox from './createBox';


function Game1() {
    const { width, height } = Dimensions.get("screen");
    const boxSize = Math.trunc(Math.max(width, height) * 0.075);
                                                // height / 2 instead of 32
    const initialBox = Matter.Bodies.rectangle(width / 2, 32, boxSize, boxSize);
                                            // height - boxSize instead of 1300
    const floor = Matter.Bodies.rectangle(width / 2, 1300 / 2, width, boxSize, { isStatic: true })

    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;

    const Physics = (entities, { time }) => {
        let engine = entities["physics"].engine;
        Matter.Engine.update(engine, time.delta);
        return entities;
    }

    let boxIds = 0;
    const createBox = (entities, { touches, screen }) => {
        let world = entities["physics"].world;
        let boxSize = Math.trunc(Math.max(screen.width, screen.height) * 0.075);
        touches.filter(t => t.type === "press").forEach(t => {
            let body= Matter.Bodies.rectangle(
                t.event.pageX, 
                t.event.pageY,
                boxSize, 
                boxSize,
                { frictionAir: 0.021, restitution: 1.0 }
            );
            Matter.World.add(world, [body]);
            entities[++boxIds] = {
                body: body,
                size: [boxSize, boxSize],
                color: boxIds % 2 === 0 ? "pink" : "#B8E986",
                renderer: Box
            }
        })
        return entities;
    }

    Matter.World.add(world, [initialBox, floor]);
    return(
        // <Box
        // _dark={{ bg: "blueGray.900" }}
        // _light={{ bg: "blueGray.50" }}
        // px={4}
        // flex={1}
        // >
        <GameEngine 
            style={Styles.page}
            systems={[Physics, createBox]}
            entities={{
                physics: {
                    engine: engine,
                    world: world
                },
                initialBox: { 
                    body: initialBox, 
                    size: [boxSize, boxSize], 
                    color: 'red', 
                    renderer: Box
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
    //   </Box>
    )
}

export default Game1;