import { reactive } from 'vue'
import ModalActions from "./ModalActions.vue"
import mitt from 'mitt';
const emitter = mitt();

export default {
	install: (app) => {
		const pushConfirmModal = (options) => {
			emitter.emit('pushConfirmation', options)
		}

		const setLoader = {
			setText: (text) => {
				emitter.emit('setLoaderText', text)
			},
			start: (text) => {
				emitter.emit('startLoader', text)
			},
			stop: () => {
				emitter.emit('stopLoader')
			}
		}

		app.config.globalProperties.emitter = emitter
		app.component('modal-actions', ModalActions)
		app.config.globalProperties.$confirm = pushConfirmModal
		app.config.globalProperties.$loading = setLoader
	}
}