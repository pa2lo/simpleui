<template>
	<div 
		class="notific-message"
		:class="[
			{noClickCb: !toast.onClick},
			`is-${toast.type}`
		]"
		@click.stop="clickToast"
		@mouseenter="stopTimeout"
		@mouseleave="continueTimeout"
	>
		<div class="notific-icon">
			<svg v-if="toast.type == 'success'" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/></svg>
			<svg v-else-if="toast.type == 'info'" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>
			<svg v-else width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>
		</div>
		<div class="notific-text">{{ toast.message }}</div>
		<div class="notific-close" @click.stop="closeToast">
			<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/></svg>
		</div>
		<div v-if="toast.duration > 0" :style="{animationDuration: `${toast.duration / 1000}s`}" class="toast-countdown"></div>
	</div>
</template>

<script>
export default {
	emits: ['destroy'],
	props: {
		index: String,
		toast: Object
	},
	data() {
		return {
			timer: null,
			startTime: null,
			remaining: null
		}
	},
	mounted() {
		if (this.toast.duration > 0) {
			this.remaining = this.toast.duration
			this.startTimeout(this.remaining)
		}
	},
	methods: {
		clickToast() {
			if (this.toast.onClick) this.toast.onClick()
			this.closeToast()
		},

		startTimeout(duration) {
			this.startTime = new Date().valueOf()
			this.timer = setTimeout(() => {
				this.closeToast()
			}, duration)
		},

		stopTimeout() {
			if (this.timer) {
				const now = new Date().valueOf()
				this.remaining = this.remaining - (now - this.startTime)
				clearTimeout(this.timer)
			}
		},

		continueTimeout() {
			if (this.remaining) {
				this.startTimeout(this.remaining)
			}
		},

		closeToast(e) {
			if (this.timer) clearTimeout(this.timer)
			this.$emit('destroy', this.index)
		}
	}
}
</script>