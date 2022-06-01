<template>
	<component 
		:is="el"
		class="button"
		:type="type"
		:class="[color, variant, size, {
			loading,
			disabled,
			full,
			narrow: !$slots['default'] && !text,
			ttip: tooltip
		}]"
		:href="link"
		:disabled="disabled || loading"
		:data-text="tooltip"
	>
		<icon v-if="icon" class="button-icon" :name="icon" />
		<span v-if="text" class="button-text">{{ text }}</span>
		<slot />
	</component>
</template>

<script>
export default {
	props: {
		icon: String,
		text: String,
		type: String,
		variant: String,
		color: String,
		link: String,
		size: String,
		loading: Boolean,
		disabled: Boolean,
		full: Boolean,
		tooltip: String
	},
	computed: {
		el() {
			return this.link ? 'a' : 'button'
		}
	}
}
</script>