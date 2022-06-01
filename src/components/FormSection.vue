<template>
	<div class="form-section" :class="{left}">
		<div v-if="title" class="form-section-header">
			<h3 class="form-section-title">{{ title }}</h3>
			<p v-if="description" class="form-section-description">{{ description }}</p>
			<div v-if="$slots['description']" class="form-section-description-cont">
				<slot name="description" />
			</div>
		</div>
		<div class="form-section-fields" :class="{horizontal, 'auto-grid': columns}">
			<slot />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			description: String,
			horizontal: Boolean,
			columns: Boolean,
			left: Boolean
		}
	}
</script>