<template>
    <div
        class="sle-saturation"
        @mousedown.prevent.stop="selectSaturation"
		@touchstart.stop="touchSelectSaturation"
		tabindex="-1"
		ref="saturation"
		:style="{backgroundColor: backgroundHue}"
    >
        <div
            class="sle-saturation-thumb sle-thumb"
            :style="[
				{backgroundColor: rgbString},
				thumbPosition
			]"
        />
    </div>
</template>

<script>
export default {
	emits: ['setSaturation'],
    props: {
		h: Number,
		s: Number,
		v: Number,
		rgbString: String
    },
	data() {
		return {
			width: 224,
			height: 128
		}
	},
	mounted() {
		const {width, height} = this.$el.getBoundingClientRect()
		this.width = width
		this.height = height
	},
	computed: {
		backgroundHue() {
			return `hsl(${this.h*360}, 100%, 50%)`
		},
		thumbPosition() {
			return {
				left: this.s * 100 + '%',
                top: (1 - this.v) * 100 + '%'
			}
		}
	},
    methods: {
		touchSelectSaturation(e) {
			if (e.cancelable) {
				e.preventDefault();
			}

			this.$refs.saturation.focus()
			const { top, left } = this.$el.getBoundingClientRect()

			const touchMove = e => {
				let x = e.touches[0].clientX - left
                let y = e.touches[0].clientY - top

                if (x < 0) x = 0
                if (y < 0) y = 0
                if (x > this.width) x = this.width
                if (y > this.height) y = this.height

				let s = x / this.width
				let v = 1 - (y / this.height)

				this.$emit('setSaturation', {s, v})
			}

			touchMove(e)

            const touchEnd = (e) => {
				document.removeEventListener('touchmove', touchMove)
				document.removeEventListener('touchend', touchEnd)
            }

            document.addEventListener('touchmove', touchMove)
            document.addEventListener('touchend', touchEnd)
		},

        selectSaturation(e) {
			this.$refs.saturation.focus()
			const { top, left } = this.$el.getBoundingClientRect()
			
            const mousemove = e => {
                let x = e.clientX - left
                let y = e.clientY - top

                if (x < 0) x = 0
                if (y < 0) y = 0
                if (x > this.width) x = this.width
                if (y > this.height) y = this.height

				let s = x / this.width
				let v = 1 - (y / this.height)

				this.$emit('setSaturation', {s, v})
            }

            mousemove(e)

            const mouseup = (e) => {
				document.removeEventListener('mousemove', mousemove)
				document.removeEventListener('mouseup', mouseup)
            }

            document.addEventListener('mousemove', mousemove)
            document.addEventListener('mouseup', mouseup)
        }
    }
}
</script>