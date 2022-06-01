<template>
	<div class="card">
		<div v-if="title || $slots['header']" class="card-header">
			<slot name="header">
				<component :is="titleTag" class="card-title">{{ title }}</component>
				<p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
			</slot>
		</div>
		<div class="card-body">
			<slot />
		</div>
		<div v-if="$slots['footer']" class="card-footer">
			<slot name="footer" />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			titleTag: {
				type: String,
				default: 'h2'
			},
			subtitle: String
		}
	}
</script>