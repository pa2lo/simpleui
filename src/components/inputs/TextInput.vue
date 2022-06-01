<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="text"
		:class="{horizontal}"
	>
		<template #default>
			<div class="input-rel-container" :class="{fullWidth}">
				<icon v-if="icon" :name="icon" class="input-icon" />
				<input :id="id" :name="name || id" class="input-el text-input" :class="{error: error, wicon: icon, clearable: clearable}" :type="type" :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)" :disabled="disabled">
				<button v-if="clearable" @click="$emit('update:modelValue', '')" class="input-clear-icon ttip"  data-text="Reset" :class="{active: modelValue.length > 0}">
					<icon name="x" />
				</button>
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
		placeholder: String,
		clearable: Boolean,
		type: {
			type: String,
			default: 'text'
		}
	},
	data() {
		return {
			id: 'ti-'+this.uuid
		}
	}
}
</script>