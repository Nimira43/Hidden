import { ArcRotateCamera, Engine, Scene, Vector3 } from '@babylonjs/core'

class Game {
  private _canvas: HTMLCanvasElement
  private _engine: Engine
  private _scene: Scene

  constructor() {
    this.createCanvas()
    this.initialise()
  }

  private createCanvas(): void {
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.width = '100%'
    document.documentElement.style.height = '100%'
    document.documentElement.style.margin = '0'
    document.documentElement.style.padding = '0'
    
    document.body.style.overflow = 'hidden'
    document.body.style.width = '100%'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.padding = '0'

    this._canvas = document.createElement('canvas')
    this._canvas.style.width = '100%'
    this._canvas.style.height = '100%'
    this._canvas.id = 'gameCanvas'
    document.body.appendChild(this._canvas)
  }

  private initialise(): void {
    this._engine = new Engine(this._canvas, true)
    this._scene = new Scene(this._engine)
    this.main()
  }

  private main(): void {
    const camera: ArcRotateCamera = new ArcRotateCamera('camera', Math.PI, Math.PI, 10, Vector3.Zero(), this._scene)
    camera.attachControl(this._canvas, true)

    this._engine.runRenderLoop(() => {
      this._scene.render()
    })

    window.addEventListener('resize', () => {
      this._engine.resize()
    })
  }
}

new Game();

