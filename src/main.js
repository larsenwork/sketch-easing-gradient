import BrowserWindow from 'sketch-module-web-view'

const UI = require('sketch/ui') // eslint-disable-line
const document = require('sketch/dom').getSelectedDocument() // eslint-disable-line

const sketchColor = color => MSImmutableColor.colorWithRed_green_blue_alpha( // eslint-disable-line
  color[0] / 255,
  color[1] / 255,
  color[2] / 255,
  color[3],
).newMutableCounterpart()

const sketchStop = (position, color) => (
  MSGradientStop.stopWithPosition_color_(position, sketchColor(color)) // eslint-disable-line
)

export default function (context) {
  const options = {
    identifier: 'easing-gradient',
    width: 400,
    height: 275,
    frame: false,
    transparent: true,
    resizable: false,
    movable: false,
    alwaysOnTop: true,
  }

  if (document) {
    const selection = document.selectedLayers

    if (selection && selection.length === 1) {
      const mutableLayer = context.selection.firstObject()
      const selectedLayer = selection.layers[0]

      if (selectedLayer.style.fills
        && selectedLayer.style.fills.length === 1
        && selectedLayer.style.fills[0].fill === 'Gradient'
        && selectedLayer.style.fills[0].gradient.gradientType === 'Linear'
      ) {
        const mutableGradient = mutableLayer.style()
          .fills()
          .firstObject()
          .gradient()
        const gradientFill = selectedLayer.style.fills[0]
        const browserWindow = new BrowserWindow(options)
        const { webContents } = browserWindow

        // Show the window when the page has loaded
        browserWindow.once('ready-to-show', () => {
          browserWindow.setHasShadow(false)
          browserWindow.show()
        })

        // Close the window on blur
        browserWindow.once('blur', () => {
          // browserWindow.close()
        })

        // Handler for a call from web content's javascript
        webContents.on('nativeLog', (s) => {
          UI.message(s)
        })

        webContents.on('did-finish-load', () => {
          const gradientParams = selectedLayer.name
            .split('🌈')
            .pop()
            .split(';')
            .map(item => item.trim())
          const gradientStops = gradientFill.gradient.stops
          const gradientStopFirst = gradientStops[0]
          const gradientStopLast = gradientStops.pop()
          let gradientTiming = 'linear'
          let gradientColorSpace = 'lrgb'

          if (gradientParams.length === 2) {
            [gradientTiming, gradientColorSpace] = gradientParams
          }

          const paramsAsString = JSON.stringify([
            gradientStopFirst.color,
            gradientTiming,
            gradientStopLast.color,
            gradientColorSpace,
          ])

          webContents.executeJavaScript(`setGradientParams('${paramsAsString}')`)
        })

        webContents.on('updateName', (params) => {
          const nameWithOutParams = selectedLayer.name.split('🌈')[0].trim()
          mutableLayer.name = `${nameWithOutParams} 🌈${params}`
        })

        webContents.on('updateGradient', (stopsAsJSON) => {
          const stops = JSON.parse(stopsAsJSON)
          const sketchStops = stops
            .map(obj => sketchStop(obj.stop, obj.color))
          mutableGradient.setStops(sketchStops)
        })

        // // Handler to close the window
        webContents.on('closeWindow', () => {
          browserWindow.close()
        })

        // Load the html template
        browserWindow.loadURL(require('../resources/index.html')); // eslint-disable-line
      } else {
        UI.message('🌈 ⚠️ Please check: layer only has one fill and it\'s a linear-gradient')
      }
    } else {
      UI.message('🌈 ⚠️ Please select a layer')
    }
  }
}
