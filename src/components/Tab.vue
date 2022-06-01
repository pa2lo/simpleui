<template>
	<div v-show="isActive" class="tab" :class="{active: isActive}">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'Tab',
		props: {
			name: {
				type: String,
				required: true
			},
			icon: String,
			disabled: Boolean
		},
		data() {
			return {
				isActive: false
			}
		},
		created () {
			this.$parent.tabs.push(this);
		}
	}
</script>