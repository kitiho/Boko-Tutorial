import * as THREE from 'three'
import Experience from './Experience'
export default class Camera {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.createPerspectiveCamera()
    this.createOrthographicCamera()
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000)
    this.scene.add(this.perspectiveCamera)
  }

  createOrthographicCamera() {
    this.frustrum = 5
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.frustrum) / 2,
      (this.sizes.aspect * this.frustrum) / 2,
      this.frustrum / 2,
      -this.frustrum / 2,
      -100,
      100,
    )
    this.scene.add(this.perspectiveCamera)
  }

  resize() {
    this.perspectiveCamera.aspect = this.sizes.aspect
    this.perspectiveCamera.updateProjectionMatrix()

    this.orthographicCamera.left = (-this.sizes.aspect * this.frustrum) / 2
    this.orthographicCamera.right = (this.sizes.aspect * this.frustrum) / 2
    this.orthographicCamera.top = this.frustrum / 2
    this.orthographicCamera.bottom = -this.sizes.aspect
    this.orthographicCamera.updateProjectionMatrix()
  }

  update() {

  }
}
