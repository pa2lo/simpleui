import { createApp, h } from 'vue'
import { defineAsyncComponent } from 'vue'

// global components
import PageLayout from './layout/Layout.vue'
import Icon from './components/Icon.vue'
import Card from './components/Card.vue'
import Btn from './components/Button.vue'

// plugins
import Notific from './plugins/Notific/index.js'
import ModalActions from './plugins/ModalActions/index.js'

// simple hash router
import routes from './routes'
import Errorpage from './pages/404.vue'

// import styles
import './css/style.scss'

// app const
const SimpleRouterApp = {
	data: () => ({
		currentRoute: window.location.hash,
		darkMode: document.cookie.match("theme=dark") ? true : false
	}),
	computed: {
		ViewComponent() {
			return routes[this.currentRoute] || Errorpage
		}
	},
	render() {
		return h(this.ViewComponent)
	},
	created() {
		window.addEventListener('hashchange', () => {
			this.currentRoute = window.location.hash
		})
		if (document.cookie.match("theme=dark") || (!document.cookie.match("theme=") && window.matchMedia('(prefers-color-scheme: dark)').matches)) this.switchDarkMode(true)
	},
	methods: {
		switchDarkMode(v) {
			this.darkMode = v
			if (v) {
				document.cookie = "theme=dark; path=/"
				document.body.classList.add('no-transition')
				document.body.classList.add('dark')
				requestAnimationFrame(() => {
					document.body.classList.remove('no-transition')
				})
			} else {
				document.cookie = "theme=light; path=/"
				document.body.classList.add('no-transition')
				document.body.classList.remove('dark')
				requestAnimationFrame(() => {
					document.body.classList.remove('no-transition')
				})
			}
		}
	}
}

// createapp
const app = createApp(SimpleRouterApp)

// register global components
app.component('page-layout', PageLayout)
app.component('icon', Icon)
app.component('card', Card)
app.component('btn', Btn)

// register plugins
app.use(Notific)
app.use(ModalActions)

// mount
app.mount('#app')