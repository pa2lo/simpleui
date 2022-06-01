import { reactive } from 'vue'
import NotificComponent from "./Notific.vue"

export default {
	install: (app) => {
		let counter = 1

		const $notificMessages = reactive({})

		const pushNotification = (message, type, options) => {
			$notificMessages[++counter] = {
				message: message,
				type: type,
				duration: options.duration ?? 5000,
				onClick: options.onClick ?? false
			}
		}

		const functionObject = {
			info: (message, options = {}) => {
				pushNotification(message, 'info', options)
			},
			success: (message, options = {}) => {
				pushNotification(message, 'success', options)
			},
			warming: (message, options = {}) => {
				pushNotification(message, 'warming', options)
			},
			error: (message, options = {}) => {
				pushNotification(message, 'error', options)
			}
		}
		app.component('notific', NotificComponent)
		app.config.globalProperties.$notificMessages = $notificMessages
		app.config.globalProperties.$notific = functionObject
	}
}