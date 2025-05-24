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
  private _createCanvas(): HTMLCanvasElement {
    document.documentElement.style['overflow'] = 'hidden'
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
    this._canvas.style.id = 'gameCanvas'
    document.body.appendChild(this._canvas)

    return this._canvas
  }
  private async _main(): Promise<void> {

  }
}

new App()