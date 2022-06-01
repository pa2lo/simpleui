<template>
    <div
        class="sle-hue"
        @mousedown.prevent.stop="selectHue"
		@touchstart.stop="touchSelectHue"
    >
        <div
            class="sle-hue-thumb sle-thumb"
            :style="{
				backgroundColor: backgroundHue,
				left: thumbPosition
			}"
        />
    </div>
</template>

<script>
export default {
	emits: ['setHue'],
    props: {
		h: Number,
		width: Number
    },
	computed: {
		backgroundHue() {
			return `hsl(${this.h*360}, 100%, 50%)`
		},
		thumbPosition() {
			return (1 - this.h ) * 100  + '%'
		}
	},
    methods: {
		touchSelectHue(e) {
			if (e.cancelable) {
				e.preventDefault();
			}

			const { left } = this.$el.getBoundingClientRect()

			const touchMove = e => {
				let x = e.touches[0].clientX - left

				if (x < 0) x = 0
				if (x > this.width) x = this.width

				let h = 1 - (x / this.width)
				this.$emit('setHue', h)
			}

			touchMove(e)

            const touchEnd = (e) => {
				document.removeEventListener('touchmove', touchMove)
				document.removeEventListener('touchend', touchEnd)
            }

            document.addEventListener('touchmove', touchMove)
            document.addEventListener('touchend', touchEnd)
		},

		selectHue(e) {
			const { left } = this.$el.getBoundingClientRect()

			const mousemove = e => {
				let x = e.clientX - left

				if (x < 0) x = 0
				if (x > this.width) x = this.width

				let h = 1 - (x / this.width)
				this.$emit('setHue', h)
			}

			mousemove(e)

			const mouseup = () => {
				document.removeEventListener('mousemove', mousemove)
				document.removeEventListener('mouseup', mouseup)
			}

			document.addEventListener('mousemove', mousemove)
			document.addEventListener('mouseup', mouseup)
		}
	}
}
</script>