<template>
	<!-- <div class="modal-actions"> -->
		<teleport to="#modalStack">
			<transition-group name="modal-fade">
				<div v-for="(item, name) in confirms" :key="name" :id="`confirmmodal-${name}`" class="modal backdrop flex p2 isActive">
					<div class="card modal-card scrollable" :class="[item.size]" ref="modal" tabindex="-1" @keyup.esc="onEsc(item.onCancel, name)" @keyup.enter.self="closeConfirm(item.onConfirm, name)">
						<div v-if="item.title" class="modal-header card-header">
							<h2>{{ item.title }}</h2>
						</div>
						<div class="modal-body card-body">
							<p v-html="item.message"></p>
						</div>
						<div class="modal-footer card-footer">
							<btn v-if="item.cancellable" variant="outline" ref="modalconfirm" color="contrast" :text="item.cancelText" @click.stop="closeConfirm(item.onCancel, name)" />
							<btn ref="modalconfirm" :color="item.buttonColor" :text="item.confirmText" @click.prevent="closeConfirm(item.onConfirm, name)" />
						</div>
					</div>
				</div>
			</transition-group>
			<transition name="modal-fade">
				<div v-if="loader" class="modal loader backdrop flex isActive">
					<div class="loader-cont flex flex-col ai-c jc-c">
						<div class="spinner">
							<div class="rect1"></div>
							<div class="rect2"></div>
							<div class="rect3"></div>
							<div class="rect4"></div>
							<div class="rect5"></div>
						</div>
						<div v-if="loaderText" class="loader-text mt05">
							{{ loaderText }}
						</div>
					</div>
				</div>
			</transition>
		</teleport>
	<!-- </div> -->
</template>

<script>
export default {
	data() {
		return {
			confirms: {},
			loader: false,
			loaderText: "",
			counter: 1,
			focusedEl: false
		}
	},
	created() {
		this.emitter.on('startLoader', this.startLoader)
		this.emitter.on('stopLoader', this.stopLoader)
		this.emitter.on('setLoaderText', this.setLoaderText)
		this.emitter.on('pushConfirmation', this.pushConfirmation)
	},
	beforeUnmount() {
		this.emitter.off('startLoader', this.startLoader)
		this.emitter.off('stopLoader', this.stopLoader)
		this.emitter.off('setLoaderText', this.setLoaderText)
		this.emitter.off('pushConfirmation', this.pushConfirmation)
 	},
	methods: {
		onEsc(callback, index) {
			if (this.confirms[index].cancellable) {
				this.closeConfirm(callback, index)
			}
		},

		closeConfirm(callback, index) {
			const focusBack = this.confirms[index].focusedEl
			delete this.confirms[index]
			if (focusBack) focusBack.focus()
			if (callback) {
				callback()
			}
		},

		startLoader(text) {
			this.loader = true
			if (text) this.loaderText = text
		},

		stopLoader() {
			this.loader = false
			this.loaderText = ""
		},

		setLoaderText(text) {
			this.loaderText = text
		},

		pushConfirmation(options) {
			const id = ++this.counter
			this.confirms[id] = {
				message: options.message,
				size: options.size ?? '',
				title: options.title ?? 'Notification',
				buttonColor: options.buttonColor || 'success',
				confirmText: options.confirmText || 'Confirm',
				cancellable: options.cancellable,
				cancelText: options.cancelText || 'Cancel',
				onConfirm: options.onConfirm || false,
				onCancel: options.onCancel || false,
				focusedEl: document.activeElement
			}
			this.$nextTick(() => {
				if (this.$refs.modalconfirm.$el) this.$refs.modalconfirm.$el.focus()
				else if (this.$refs.modal) this.$refs.modal.focus()
			})
		}
	}
}
</script>