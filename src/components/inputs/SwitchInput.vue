<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="switch"
		:wrapLabel="true"
		:class="{horizontal, reverse, left}"
	>
		<template v-if="$slots['default']" #label>
			<slot />
		</template>
		<template #default>
			<input 
				:id="id"
				:name="name || id"
				class="switch-input"
				type="checkbox"
				:disabled="disabled"
				:checked="modelValue"
				@change="$emit('update:modelValue', $event.target.checked)"
			/>
			<span v-if="!hideInfo" class="switch-input-text" data-off="off" data-on="on"></span>
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
		hideInfo: Boolean,
		reverse: Boolean,
		left: Boolean
	},
	data() {
		return {
			id: 'swi-'+this.uuid
		}
	}
}
</script>