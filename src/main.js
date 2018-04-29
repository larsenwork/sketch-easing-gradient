import WebUI from 'sketch-module-web-view'

const options = {
  // unique id to reuse the UI
  identifier: 'easing-gradient',
  x: 0,
  y: 0,
  width: 800,
  height: 450,
  // eslint-disable-next-line no-undef
  background: NSColor.whiteColor(),
  blurredBackground: false,
  onlyShowCloseButton: false,
  title: 'Easing Gradient',
  hideTitleBar: false,
  shouldKeepAround: true,
  resizable: false,
  // https://developer.apple.com/reference/webkit/webframeloaddelegate?language=objc
  frameLoadDelegate: {
    // eslint-disable-next-line no-unused-vars
    'webView:didFinishLoadForFrame:': (webView, webFrame) => {
      // context.document.showMessage('UI loaded!')
      WebUI.clean()
    }
  },
  uiDelegate: {}, // https://developer.apple.com/reference/webkit/webuidelegate?language=objc
  onPanelClose: () => 'true'
}

// eslint-disable-next-line no-unused-vars, no-undef, global-require
const webUI = new WebUI(context, require('./index.html'), options)
