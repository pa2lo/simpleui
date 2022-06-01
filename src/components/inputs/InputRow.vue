<template>
	<div class="input-row" :class="[`type-${type}`, {notitle: !title && !$slots['label']}]">
		<div v-if="wrapLabel" class="input-row-labelwrap flex">
			<component :is="element" v-if="title || $slots['label']" :for="id" class="input-label">
				<slot name="label">
					{{ title }}
					<span v-if="tooltip" class="ttip input-help" :class="{long: tooltip.length > 30}" :data-text="tooltip">
						<icon name="help" />
					</span>
				</slot>
			</component>
			<div class="input-cont">
				<slot />
			</div>
		</div>
		<template v-else>
			<component :is="element" v-if="title || $slots['label']" :for="id" class="input-label">
				<slot name="label">
					{{ title }}
					<span v-if="tooltip" class="ttip input-help" :class="{long: tooltip.length > 30}" :data-text="tooltip">
						<icon name="help" />
					</span>
				</slot>
			</component>
			<div class="input-cont">
				<slot />
			</div>
		</template>
		<div v-if="error || $slots['hint']" class="input-row-aditional">
			<div class="input-row-additional-inner">
				<div v-if="error" class="input-error">{{ error }}</div>
				<div v-if="$slots['hint']" class="input-hint">
					<slot name="hint" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			name: String,
			tooltip: String,
			type: String,
			id: String,
			error: String,
			element: {
				type: String,
				default: 'label'
			},
			wrapLabel: Boolean
		}
	}
</script>