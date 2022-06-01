<template>
	<div class="sle-preview-colors-outer">
		<div class="sle-preview-colors">
			<button 
				class="sle-preview-original ttip"
				:style="{
					color: originalColor || 'transparent'
				}"
				@click="setOriginalColor"
				data-text="Set original color"
			/>
			<span class="sle-preview-color" :style="{backgroundColor: rgbaString}" />
		</div>
		<button @click.stop="$emit('closePicker')" class="confirmBtn ttip" data-text="Save & close">Ok</button>
	</div>
</template>

<script>
export default {
	emits: ['setOriginalColor', 'closePicker'],
    props: {
		originalColor: {
			type: [String, Boolean],
			default: 'rgba(0,0,0,0)'
		},
		rgbaString: String
	},
	methods: {
		setOriginalColor() {
			this.$emit('setOriginalColor')
		}
	}
}
</script>