import {
    BoxBufferGeometry,
    BufferAttribute,
    BufferGeometry,
    Points,
    PointsMaterial
} from 'three';

function createBackgroundParticles() {
    const material = new PointsMaterial({
        size: 0.03
    })
    const particlcesGeometry = new BufferGeometry
    const particlesCount = 5000

    // array of [x,y,z, x,y,z] for 5000 points
    const positionArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
        positionArray[i] = (Math.random() - .5) * 25
    }

    particlcesGeometry.setAttribute('position', new BufferAttribute(positionArray, 3))

    const particlesMesh = new Points(particlcesGeometry, material)

    return particlesMesh
}

export { createBackgroundParticles };
