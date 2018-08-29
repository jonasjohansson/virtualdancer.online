/**
 * Projects a value from one range to another
 */
function cast(toUpper, toLower, fromUpper, fromLower, val) {
  if (toUpper === toLower) {
    return toUpper
  }

  return (val - fromLower) * (toUpper - toLower) / (fromUpper - fromLower) + toLower
}

/**
 * Drama
 */
AFRAME.registerComponent('drama', {

	schema: {
		speed: {default: 1},
	},

	init() {},

	tick() {
		const value = Math.sin(this.el.sceneEl.time / 1000)
		const normalisedValue = cast(1, 0, 1, -1, value)
		const modifiedNormalisedValue = Math.pow(normalisedValue, 3)
		this.intensity = modifiedNormalisedValue
	}

})
