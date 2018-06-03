import BrowserWindow from 'sketch-module-web-view'
import * as helpers from './lib/helpers'

const UI = require('sketch/ui') // eslint-disable-line import/no-unresolved
const dom = require('sketch/dom') // eslint-disable-line import/no-unresolved

const options = {
  identifier: 'easing-gradient',
  title: 'Easing Gradient',
  width: 400,
  height: 300,
  alwaysOnTop: true,
}

const selectedLayer = helpers.getSelectedLayerMaybe(
  dom.getSelectedDocument().selectedLayers
)
const gradientFill = helpers.getGradientFillMaybe(selectedLayer)

export function onStartPlugin() {
  if (!selectedLayer) {
    UI.message('🌈 ⚠️ Please select a layer')
  } else if (!gradientFill) {
    UI.message(
      '🌈 ⚠️ Please check: layer has at least one enabled gradient fill'
    )
  } else {
    const browserWindow = new BrowserWindow(options)
    const { webContents } = browserWindow

    // Show the window when the page has loaded
    browserWindow.once('ready-to-show', () => {
      browserWindow.show()
    })

    // Close the window when we blur
    browserWindow.once('blur', () => {
      // browserWindow.close()
    })

    // Send gradient parameters to the webview once it's loaded
    webContents.once('did-finish-load', () => {
      webContents.executeJavaScript(
        `setGradientParams('${helpers.getLayerParams(
          selectedLayer,
          gradientFill
        )}')`
      )
    })

    // Handler to update name of gradient layer
    webContents.on('updateName', params => {
      const nameWithOutParams = selectedLayer.name.split('🌈')[0].trim()
      selectedLayer.name = `${nameWithOutParams} 🌈${params}`
    })

    // Handler to update gradient of gradient layer
    webContents.on('updateGradient', stopsAsJSON => {
      gradientFill.gradient.stops = JSON.parse(stopsAsJSON)
    })

    // Handler to open url
    webContents.on('openUrl', url => {
      NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url)) // eslint-disable-line no-undef, max-len
    })

    // Handler to show message
    webContents.on('showMessage', msg => {
      UI.message(`🌈 ${msg}`)
    })
    // Load the html template
    browserWindow.loadURL(require('../resources/index.html')) // eslint-disable-line global-require
  }
}

export function onSelectionChanged() {
  log('onSelectionChanged')
}
