import BrowserWindow from 'sketch-module-web-view'

const UI = require('sketch/ui')

export default function () {
  const options = {
    identifier: 'easing-gradient',
    x: 0,
    y: 0,
    width: 800,
    height: 800,
    blurredBackground: true,
    onlyShowCloseButton: true,
    hideTitleBar: true,
    shouldKeepAround: true,
  }

  const browserWindow = new BrowserWindow(options)

  // only show the window when the page has loaded
  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  })

  const { webContents } = browserWindow

  // print a message when the page loads
  webContents.on('did-finish-load', () => {
    UI.message('UI loaded!')
  })

  // add a handler for a call from web content's javascript
  webContents.on('nativeLog', (s) => {
    UI.message(s)
    webContents.executeJavaScript(`setRandomNumber(${Math.random()})`)
  })

  browserWindow.loadURL(require('../resources/index.html')); // eslint-disable-line
}
