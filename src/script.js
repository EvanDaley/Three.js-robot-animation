import './style.css'
import { World } from './World/World.js';

async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#webgl-scene-container');

  // create a new world
  const world = new World(container);

  // call any async functions
  await world.init()

  // start the animation loop
  world.start();
}

// Run main and display any async errors from the world.init() function.
main().catch(err => {
  console.error(err)
});
