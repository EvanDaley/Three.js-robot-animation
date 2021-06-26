import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { loadBirds } from './components/birds/birds.js';
import { createGround } from './components/ground.js'

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera
let renderer
let scene
let loop
let controls
let birds = []
let ground

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    ground = createGround()

    controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight, ground);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { chad } = await loadBirds()
    controls.target.copy(chad.position)

    birds.push(chad)

    loop.updatables.push(chad)

    scene.add(chad)

    console.log(scene)
  }

  switchTarget() {
    const focusedIndex = birds.findIndex(arrayElement => arrayElement.position.x == controls.target.x)
    const targetIndex = (focusedIndex + 1) % (birds.length)
    const targetObject = birds[targetIndex]
    controls.target.copy(targetObject.position)
  }

  reset() {
    controls.target.copy(birds[0].position)
    camera.position.set(-1.5, 1.5, 6.5);
  }

  zoomOut() {
    controls.target.copy(birds[0].position)
    camera.position.set(-3.5, 1.5, 16.5);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
