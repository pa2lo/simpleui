// import { defineAsyncComponent } from 'vue'
import Home from './pages/Home.vue'
import Widgets from './pages/Widgets.vue'
import Other from './pages/examples/Other.vue'
import AlertComponents from './pages/examples/AlertComponents.vue'
import InputComponents from './pages/examples/InputComponents.vue'
import ModalComponents from './pages/examples/ModalComponents.vue'
import TabExamples from './pages/examples/TabComponent.vue'
import FormExamples from './pages/examples/FormExamples.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'

/* export default {
	'': defineAsyncComponent(() => import('./pages/Home.vue')),
	'#home': defineAsyncComponent(() => import('./pages/Home.vue')),
	'#widgets': defineAsyncComponent(() => import('./pages/Widgets.vue')),
	'#examples': defineAsyncComponent(() => import('./pages/examples/Other.vue')),
	'#alerts': defineAsyncComponent(() => import('./pages/examples/AlertComponents.vue')),
	'#inputs': defineAsyncComponent(() => import('./pages/examples/InputComponents.vue')),
	'#modals': defineAsyncComponent(() => import('./pages/examples/ModalComponents.vue')),
	'#tabs': defineAsyncComponent(() => import('./pages/examples/TabComponent.vue')),
	'#forms': defineAsyncComponent(() => import('./pages/examples/FormExamples.vue')),
	'#login': defineAsyncComponent(() => import('./pages/Login.vue')),
	'#register': defineAsyncComponent(() => import('./pages/Register.vue'))
} */

export default {
	'': Home,
	'#home': Home,
	'#widgets': Widgets,
	'#examples': Other,
	'#alerts': AlertComponents,
	'#inputs': InputComponents,
	'#modals': ModalComponents,
	'#tabs': TabExamples,
	'#forms': FormExamples,
	'#login': Login,
	'#register': Register
}