import { Engine, EngineFactory, Scene, ArcRotateCamera, Vector3 } from '@babylonjs/core'

class App {

  private _canvas: HTMLCanvasElement
  private _engine: Engine
  private _scene: Scene

  constructor() {
    this._canvas = this._createCanvas()
    this._initialise()
  }

  private async _initialise(): Promise<void> {
    await this._main()
  }
  private async _createCanvas(): HTMLCanvasElement {
    return this._canvas
  }
  private async _main(): Promise<void> {

  }
}

new App()