import { AnimationMixer } from 'three';

function setupModel(data) {
    const model = data.scene.children[0];
    const clip = data.animations[0];

    console.log(data)

    model.tick = (delta) => { };

    if (clip) {
        const mixer = new AnimationMixer(model);
        const action = mixer.clipAction(clip);
        action.play();

        model.tick = (delta) => mixer.update(delta);
    }

    return model;
}

export { setupModel };