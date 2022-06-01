<template>
	<a
		:href="href"
		@click.prevent="go"
		:class="{
			active: $root.currentRoute == href
		}"
	>
		<slot>
			<icon v-if="icon" class="link-icon" :name="icon" />
			<span class="link-title">{{ title }}</span>
		</slot>
	</a>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			required: true
		},
		icon: String,
		title: String
	},
	methods: {
		go() {
			// this.$root.currentRoute = this.href
			window.location.hash = this.href
		}
	}
}
</script>