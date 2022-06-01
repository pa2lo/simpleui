<template>
	<div v-if="bedges.length" class="bedges">
		<span 
			v-for="(bedge, index) in bedges" 
			:key="index"
			class="bedge"
			:class="[
				bedge.color,
				{
					ttip: bedge.tooltip,
					long: bedge.tooltip && bedge.tooltip.length > 30
				}
			]"
			:data-text="bedge.tooltip"
		>
			{{ bedge.text }}
		</span>
	</div>
</template>

<script>
export default {
	props: {
		bedges: {
			type: Array
		}
	}	
}
</script>