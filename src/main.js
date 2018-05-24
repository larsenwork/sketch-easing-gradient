import BrowserWindow from 'sketch-module-web-view'

const UI = require('sketch/ui') // eslint-disable-line import/no-unresolved
const document = require('sketch/dom').getSelectedDocument() // eslint-disable-line import/no-unresolved

const selection = document.selectedLayers

const options = {
  identifier: 'easing-gradient',
  title: '🌈 Easing Gradient',
  width: 400,
  height: 300,
  alwaysOnTop: true,
}

export default function () {
  if (selection && selection.length === 1) {
    const selectedLayer = selection.layers[0]

    if (selectedLayer.style.fills
      && selectedLayer.style.fills.length === 1
      && selectedLayer.style.fills[0].fill === 'Gradient'
      && selectedLayer.style.fills[0].gradient.gradientType === 'Linear'
    ) {
      const browserWindow = new BrowserWindow(options)
      const { webContents } = browserWindow
      const gradientFill = selectedLayer.style.fills[0]

      // Show the window when the page has loaded
      browserWindow.once('ready-to-show', () => {
        browserWindow.show()
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

      // Handler to update name of gradient layer
      webContents.on('updateName', (params) => {
        const nameWithOutParams = selectedLayer.name.split('🌈')[0].trim()
        selectedLayer.name = `${nameWithOutParams} 🌈${params}`
      })

      // Handler to update gradient of gradient layer
      webContents.on('updateGradient', (stopsAsJSON) => {
        selectedLayer.style.fills[0].gradient.stops = JSON.parse(stopsAsJSON)
      })

      // Handler to open url
      webContents.on('openUrl', (url) => {
        NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url)) // eslint-disable-line no-undef, max-len
      })

      // Handler to show message
      webContents.on('showMessage', (msg) => {
        UI.message(`🌈 ${msg}`)
      })

      // Load the html template
      browserWindow.loadURL(require('../resources/index.html')) // eslint-disable-line global-require
    } else {
      UI.message('🌈 ⚠️ Please check: layer only has one fill and it\'s a linear-gradient')
    }
  } else {
    UI.message('🌈 ⚠️ Please select a layer')
  }
}
