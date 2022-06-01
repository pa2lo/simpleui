<template>
	<teleport to="#modalStack">
		<transition name="modal-fade">
			<div v-if="show" class="modal backdrop flex" :class="{isActive: show}" @click.self="evClose" @keyup.esc.stop="evClose">
				<div ref="modal" class="card modal-card" :class="[size, {scrollable: scrollBody}]" tabindex="-1">
					<button v-if="closeable" @click="evClose" class="modal-x-button"><icon name="x"/></button>
					<div v-if="title" class="modal-header card-header">
						<h2 class="card-title">{{ title }}</h2>
						<p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
					</div>
					<div class="modal-body card-body">
						<slot name="body" />
					</div>
					<div v-if="$slots['footer']" class="modal-footer card-footer">
						<slot name="footer" />
					</div>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script>
export default {
	emits: ['close', 'modal-open'],
	props: {
		show: {
			type: Boolean,
			default: false
		},
		closeable: {
			type: Boolean,
			default: true
		},
		size: {
			type: String,
			default: ''
		},
		scrollBody: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ""
		},
		subtitle: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			focusedEl: false
		}
	},
	methods: {
		evClose(e) {
			if (this.closeable) {
				this.close()
			}
		},
		close(ev = 'close') {
			this.$emit(ev)
		}
	},
	watch: {
		show: {
			handler: function(show) {
				if (show) {
					this.focusedEl = document.activeElement
					this.$nextTick(function(){
						let autoFocusEl = this.$refs.modal.querySelector('.autofocus input, .autofocus select, .autofocus button, input.autofocus, select.autofocus, a.autofocus, button.autofocus')
						if (autoFocusEl) autoFocusEl.focus()
						else this.$refs.modal.focus()
						this.$emit('modal-open')
					})
				} else {
					this.focusedEl.focus()
				}
			}
		}
	}
}
</script>