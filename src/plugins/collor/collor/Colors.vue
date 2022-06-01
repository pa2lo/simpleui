<template>
	<div class="sle-colors">
		<div
			v-for="item in colors"
			:key="item"
			class="sle-color"
			@click="selectColor(item)"
		>
			<div
				:style="{ background: item || 'transparent' }"
				class="sle-color-inner"
			/>
		</div>
		<div
			v-if="alpha && colors.length % 2 > 0"
			class="sle-color"
			@click="selectColor('rgba(0,0,0,0)')"
		/>
	</div>
</template>

<script>
export default {
	emits: ['setColor'],
    props: {
        alpha: Boolean,
        colors: Array
    },
	methods: {
		selectColor(color) {
			this.$emit('setColor', color)
		}
	}
}
</script>