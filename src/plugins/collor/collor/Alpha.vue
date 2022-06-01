<template>
    <div
        class="sle-alpha"
        @mousedown.prevent.stop="selectAlpha"
		@touchstart.stop="touchSelectAlpha"
    >
		<div 
			class="sle-alpha-gradient"
			:style="{backgroundImage: backgroundGradient}"
		/>
        <div
            class="sle-alpha-thumb sle-thumb"
            :style="{
				backgroundImage: `linear-gradient(${rgbaString}, ${rgbaString}), var(--transparentBg)`,
				left: thumbPosition
			}"
        />
    </div>
</template>

<script>
export default {
	emits: ['setAlpha'],
    props: {
		a: Number,
		rgba: Object,
		rgbaString: String,
		width: Number,
    },
	computed: {
		backgroundGradient() {
			return `linear-gradient(to right, rgba(${this.rgba.r}, ${this.rgba.g}, ${this.rgba.b}, 0), rgb(${this.rgba.r}, ${this.rgba.g}, ${this.rgba.b})`
		},
		thumbPosition() {
			return this.rgba.a * 100 + '%'
		}
	},
    methods: {
		touchSelectAlpha(e) {
			if (e.cancelable) {
				e.preventDefault();
			}

			const { left } = this.$el.getBoundingClientRect()

			const touchMove = e => {
				let x = e.touches[0].clientX - left

				if (x < 0) x = 0
				if (x > this.width) x = this.width

				let a = x / this.width
				this.$emit('setAlpha', +parseFloat(a).toFixed(3))
			}

			touchMove(e)

            const touchEnd = (e) => {
				document.removeEventListener('touchmove', touchMove)
				document.removeEventListener('touchend', touchEnd)
            }

            document.addEventListener('touchmove', touchMove)
            document.addEventListener('touchend', touchEnd)
		},

		selectAlpha(e) {
			const { left } = this.$el.getBoundingClientRect()

			const mousemove = e => {
				let x = e.clientX - left

				if (x < 0) x = 0
				if (x > this.width) x = this.width

				let a = x / this.width
				this.$emit('setAlpha', +parseFloat(a).toFixed(3))
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

<style>
.sli-hue {
	background: linear-gradient(to right, #FF0000, #FF00FF, #0000FF, #00FFFF, #00FF00, #FFFF00, #FF0000);
}
</style>