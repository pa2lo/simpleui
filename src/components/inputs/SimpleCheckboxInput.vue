<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="s-checkbox"
		:wrapLabel="true"
		:class="{horizontal, reverse, left}"
	>
		<template v-if="$slots['default']" #label>
			<slot />
		</template>
		<template #default>
			<label class="input-option-label" :class="{disabled}">
				<input 
					:id="id"
					:name="name || id"
					class="checkbox-input"
					type="checkbox"
					:disabled="disabled"
					:checked="modelValue"
					@change="$emit('update:modelValue', $event.target.checked)"
				/>
				<span v-if="label" class="input-option-text">
					{{ label }}
					<span v-if="!title && tooltip" class="ttip input-help" :class="{long: tooltip.length > 30}" :data-text="tooltip">
						<icon name="help" />
					</span>
				</span>
			</label>
		</template>
		<template v-if="$slots['hint']" #hint>
			<slot name="hint" />
		</template>
	</input-row>
</template>

<script>
import uuid from "../mixins/uuid"
import inputMixin from '../mixins/inputMixin'
import InputRow from './InputRow.vue'

export default {
	components: { InputRow },
	mixins: [uuid, inputMixin],
	emits: ['update:modelValue'],
	props: {
		modelValue: Boolean,
		label: String,
		reverse: Boolean,
		left: Boolean
	},
	data() {
		return {
			id: 'cbi-'+this.uuid
		}
	}
}
</script>