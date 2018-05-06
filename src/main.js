import WebUI from 'sketch-module-web-view';

export default function (context) {
  const webUI = new WebUI(context, require('../resources/index.html'), {
    identifier: 'easing-gradient',
    x: 0,
    y: 0,
    width: 800,
    height: 450,
    blurredBackground: true,
    onlyShowCloseButton: true,
    hideTitleBar: true,
    shouldKeepAround: true,
    frameLoadDelegate: {
      // https://developer.apple.com/reference/webkit/webframeloaddelegate?language=objc
      'webView:didFinishLoadForFrame:'(webView, webFrame) {
        context.document.showMessage('UI loaded!');
      },
    },
    onPanelClose: () => 'true',
    handlers: {
      nativeLog(s) {
        try {
          context.document.showMessage(s);
          const sketch = context.api();
          console.log(sketch);
          const msg = 'From Sketch!';
          webUI.eval(`window.msg = ${msg}`);
        } catch (error) {
          console.error(error.stack);
        }
      },
    },
  });
}
