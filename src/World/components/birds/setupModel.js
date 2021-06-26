import { AnimationMixer, Group } from 'three';

function setupModel(data) {
    const group = new Group()
    const updatables = []

    console.log(data)
    for (let i = 0; i < data.scene.children.length; i++) {
        const model = data.scene.children[0];

        const clip = data.animations[0];

        model.tick = (delta) => { };

        if (clip) {
            const mixer = new AnimationMixer(model);
            const action = mixer.clipAction(clip);
            action.play();

            model.tick = (delta) => mixer.update(delta);
        }

        group.add(model)
        updatables.push(model)
    }

    group.tick = (delta) => {
        for (const object of updatables) {
            object.tick(delta);
        }
    };

    console.log(group)

    return group;
}

export { setupModel };