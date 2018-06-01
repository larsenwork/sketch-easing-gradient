const UI = require('sketch/ui') // eslint-disable-line import/no-unresolved

export function getLayerParams(layer, gradientFill) {
  const gradientParams = layer.name
    .split('🌈')
    .pop()
    .split(';')
    .map(item => item.trim())
  const gradientStops = gradientFill.gradient.stops
  const gradientStopFirst = gradientStops[0]
  const gradientStopLast = gradientStops.pop()
  let timing = 'linear'
  let colorSpace = 'lrgb'
  let colorStops = 15

  if (gradientParams.length === 3) {
    ;[timing, colorSpace, colorStops] = gradientParams
  } else if (gradientParams.length === 2) {
    ;[timing, colorSpace] = gradientParams
  } else {
    UI.message("🌈 ⚠️ Couldn't parse the layer name. Setting defaults.")
  }

  const paramsAsString = JSON.stringify([
    gradientStopFirst.color,
    timing,
    gradientStopLast.color,
    colorSpace,
    colorStops,
  ])

  return paramsAsString
}

export function getGradientFillMaybe(layer) {
  if (layer && layer.style.fills && layer.style.fills.length >= 1) {
    return layer.style.fills.find(
      fill => fill.fill === 'Gradient' && fill.enabled
    )
  }
  return null
}

export function getSelectedLayerMaybe(selection) {
  if (selection && selection.length === 1) {
    return selection.layers[0]
  }
  return null
}
