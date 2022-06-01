<template>
	<div class="sideMnuGroup">
		<a class="sideMnuLink expandable" @click="show = !show" :class="{expanded: show, active: activeLink}">
			<icon v-if="icon" class="link-icon" :name="icon" />
			<span class="link-title">{{ title }}</span>
			<div class="menuExpander">
				<icon name="chevron-down" class="chevron" />
			</div>
		</a>
		<collapse-transition>
			<div v-show="show" class="sideSubmenu">
				<slot />
			</div>
		</collapse-transition>
	</div>
</template>

<script>
	import CollapseTransition from './CollapseTransition.vue'
	export default {
		components: {
			CollapseTransition,
		},
		props: {
			links: {
				type: Array,
				required: true
			},
			icon: String,
			title: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				activeLink: false,
				show: false
			}
		},
		created () {
			this.activeLink = this.show = this.links.includes(window.location.hash);
		}
	}
</script>