<template>
	<div 
		class="sle-picker-pop"
		:class="{
			top: top,
			right: right
		}"
	>
		<Saturation
			:h="h"
			:s="s"
			:v="v"
			:rgbString="rgbString"
			@setSaturation="setSaturation"
		/>
		<div class="sle-picker-controls">
			<Hue
				ref="hue"
				:h="h"
				:width="trackWidth"
				@setHue="setHue"
			/>
			<Alpha
				v-if="alpha"
				:rgba="rgba"
				:rgbaString="rgbaString"
				:width="trackWidth"
				@setAlpha="setAlpha"
			/>
			<Colors
				v-if="showPreview"
				:alpha="alpha"
				:colors="defaultColors"
				@setColor="setColor($event, true)"
			/>
			<Preview
				v-if="showPreview"
				:originalColor="originalColor"
				:rgbaString="rgbaString"
				@setOriginalColor="setOriginalColor()"
				@closePicker="$emit('closePicker')"
			/>
		</div>
	</div>
</template>

<script>
import mixin from './mixin'
import Hue from './Hue.vue'
import Saturation from './Saturation.vue'
import Alpha from './Alpha.vue'
import Preview from './Preview.vue'
import Colors from './Colors.vue'

export default {
	emits: ['emitColor', 'closePicker'],
	mixins: [mixin],
	components: {
		Hue,
		Saturation,
		Alpha,
		Preview,
		Colors
	},
	props: {
		value: String,
		defaultColors: Array,
		alpha: Boolean,
		showColors: Boolean,
		showPreview: Boolean,
		containerPosition: Object
	},
	data() {
		return {
			r: 0,
            g: 0,
            b: 0,
            a: 1,
            h: 0,
            s: 0,
            v: 0,
			originalColor: this.value,
			trackWidth: 198,
			top: false,
			right: false
		}
	},
	created() {
		this.setColor(this.value)
	},
	mounted() {
		// check element position
		const { width: elWidth, height: elHeight } = this.$el.getBoundingClientRect()
		if ((this.containerPosition.x + elWidth) > window.innerWidth ) this.right = true
		if ((this.containerPosition.y + this.containerPosition.height + elHeight) > window.innerHeight ) this.top = true

		// set controls position
		const { width: trackWidth } = this.$refs.hue.$el.getBoundingClientRect()
		this.trackWidth = trackWidth
	},
	computed: {
		rgba() {
            return {
                r: this.r,
                g: this.g,
                b: this.b,
				a: this.a
            }
        },
		rgbString() {
			return `rgb(${this.r}, ${this.g}, ${this.b})`
		},
		rgbaString() {
			return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
		}
	},
	methods: {
		// set color
		setColor(color = this.value, emit = false) {
			if (color == 'transparent' || !color) color = 'rgba(0,0,0,0)'
			Object.assign(this, this.setColorValue(color))

			if (emit) this.emitColor()
		},

		// set original color
		setOriginalColor() {
			this.setColor(this.originalColor)
			this.$emit('emitColor', this.originalColor)
		},

		// select saturation
		setSaturation({s, v}) {
			if (!this.alpha && this.a != 1) this.a = 1
			const { r, g, b } = this.hsv2rgb({h: this.h, s, v })
			Object.assign(this, { r, g, b, s, v })
			this.emitColor()
		},

		// select hue
		setHue(h) {
			const { r, g, b } = this.hsv2rgb({ h, s: this.s, v: this.v })
			Object.assign(this, { r, g, b, h })
			this.emitColor()
		},

		// select alpha
		setAlpha(a) {
			this.a = a
			this.emitColor()
		},

		// emit color
		emitColor() {
			let color = (!this.alpha || this.a == 1) ? this.hexString() : this.rgbaString
			/* if (!this.alpha || this.a == 1) color = this.hexString()
			else color = this.rgbaString */
			this.$emit('emitColor', color)
		},

		// color to string
		hexString() {
			return this.rgb2hex(this.rgba, true)
		}
	}
}
</script>