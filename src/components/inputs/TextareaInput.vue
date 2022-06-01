<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="textarea"
		:class="{horizontal}"
	>
		<template #default>
			<div class="input-rel-container" :class="{fullWidth}">
				<textarea :id="id" :name="name || id" class="input-el textarea-input" :class="{error: error}" :rows="rows" :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)" :disabled="disabled" />
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
		placeholder: String,
		rows: {
			type: Number,
			default: 4
		}
	},
	data() {
		return {
			id: 'ta-'+this.uuid
		}
	}
}
</script>