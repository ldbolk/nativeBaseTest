// import Matter from 'matter-js';

// let boxIds = 0;
// function createBox(entities, { touches, screen }) {
//     let world = entities["physics"].world;
//     let boxSize = Math.trunc(Math.max(screen.width, screen.height) * 0.075);
//     touches.filter(t => t.type === "press").forEach(t => {
//         let body= Matter.Bodies.rectangle(
//             t.event.pageX, 
//             t.event.pageY,
//             boxSize, 
//             boxSize,
//             { frictionAir: 0.021, restitution: 1.0 }
//         );
//         Matter.World.add(world, [body]);
//         entities[++boxIds] = {
//             body: body,
//             size: [boxSize, boxSize],
//             color: boxIds % 2 === 0 ? "pink" : "#B8E986",
//             renderer: Boxe
//         }
//     })
//     return entities;
// }

// export default createBox();