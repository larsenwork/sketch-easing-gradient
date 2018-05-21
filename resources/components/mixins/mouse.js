import throttle from 'throttleit'

const throttleDuration = 1000 / 60

export default {
  mounted() {
    document.addEventListener('mousemove', (event) => {
      this.move(event)
    })
    document.addEventListener('mouseup', this.up)
  },
  methods: {
    up() {
      this.$store.commit('mouseUp')
    },
    down(event, element) {
      this.$store.commit(
        'parentBounding',
        event.target.parentElement.getBoundingClientRect(),
      )
      this.$store.commit('mouseDown', element)
    },
    move: throttle(function(event) { // eslint-disable-line
      const element = this.$store.state.mouseElement
      if (element) {
        const cursorX =
          typeof event.clientX === 'number'
            ? event.clientX
            : event.touches[0].clientX
        const cursorY =
          typeof event.clientY === 'number'
            ? event.clientY
            : event.touches[0].clientY
        const squareLeft = this.$store.state.parentBounding.left
        const squareRight = this.$store.state.parentBounding.right
        const squareTop = this.$store.state.parentBounding.top
        const squareBottom = this.$store.state.parentBounding.bottom
        /* eslint-disable no-nested-ternary */
        const xPosition =
          cursorX <= squareLeft
            ? 0
            : cursorX >= squareRight
              ? 1
              : (cursorX - squareLeft) / (squareRight - squareLeft)
        const yPosition =
          cursorY <= squareTop
            ? 1
            : cursorY >= squareBottom
              ? 0
              : 1 - ((cursorY - squareTop) / (squareBottom - squareTop))
        /* eslint-enable no-nested-ternary */
        this.$store.commit({
          type: 'updateXY',
          element,
          x: xPosition,
          y: yPosition,
        })
      }
    }, throttleDuration),
  },
}
