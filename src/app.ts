import { Engine, EngineFactory, Scene, ArcRotateCamera, Vector3 } from '@babylonjs/core'

class App {

  private _canvas: HTMLCanvasElement
  private _engine: Engine
  private _scene: Scene

  constructor() {
    this._canvas = this._createCanvas()
    this._initialise()
  }

  private async _initialise(): Promise<> {
    await this.main()
  }
  private async _createCanvas(): HTMLCanvasElement {
    return this._canvas
  }

}