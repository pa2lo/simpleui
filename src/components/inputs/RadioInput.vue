<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="radio"
		element='div'
		:class="{horizontal}"
	>
		<template #default>
			<div class="input-options-group" :class="{inline}">
				<label
					v-for="(option, index) in options"
					:key="index"
					class="input-option-label"
					:class="{disabled: disabled || option.disabled}"
				>
					<input
						class="radio-input"
						type="radio" 
						:name="name || id"
						:value="option.val"
						:disabled="disabled || option.disabled"
						:checked="option.val == modelValue"
						@change="$emit('update:modelValue', option.val)"
					/>
					<span class="input-option-text">{{ option.label }}</span>
				</label>
			</div>
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
		modelValue: String,
		options: Array,
		inline: Boolean
	},
	data() {
		return {
			id: 'ri-'+this.uuid
		}
	}
}
</script>