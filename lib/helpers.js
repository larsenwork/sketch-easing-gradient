export default function(layer) {
  const gradientParams = layer.name
    .split('🌈')
    .pop()
    .split(';')
    .map(item => item.trim())
  const gradientStops = layer.style.fills[0].gradient.stops
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
    UI.message("🌈 ⚠️ Couldn't parse the layer name. Resetting.")
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
