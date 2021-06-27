import { Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();

  // scene.background = new Color('#21282a');
  scene.background = new Color('black');
  scene.background = new Color('#11182a');

  return scene;
}

export { createScene };
