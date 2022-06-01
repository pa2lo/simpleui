<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="select"
		:class="{horizontal}"
	>
		<template #default>
			<div class="input-rel-container" :class="{fullWidth}">
				<icon v-if="icon" :name="icon" class="input-icon" />
				<select
					class="input-el select-input"
					:class="{error: error, wicon: icon}"
					:name="name || id"
					:id="`si-${uuid}`"
					:value="modelValue ?? ''"
					@change="$emit('update:modelValue', $event.target.value)"
					:disabled="disabled"
				>
					<option value='' disabled :hidden="hideEmptyOption">Choose option...</option>
					<option 
						v-for="(option, index) in options"
						:key="index"
						:value="option.label ? option.val : option">
						{{ option.label || option }}
					</option>
				</select>
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
		icon: String,
		options: Array,
		hideEmptyOption: Boolean
	},
	data() {
		return {
			id: 'si-'+this.uuid
		}
	}
}
</script>