<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="color"
		:class="{horizontal}"
	>
		<template #default>
			<div class="input-rel-container" :class="{fullWidth}">
				<collor 
					:id="id"
					:alpha="alpha"
					:clearable="clearable"
					:clearValue="clearValue"
					:defaultColors="defaultColors"
					:showColors="showColors"
					:showPreview="showPreview"
					:modelValue="modelValue"
					@update:modelValue="$emit('update:modelValue', $event)"
				/>
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
import Collor from '../../plugins/collor'

export default {
    components: { InputRow, Collor },
	mixins: [uuid, inputMixin],
	emits: ['update:modelValue'],
	props: {
		modelValue: String,
		alpha: {
			type: Boolean,
			default: true
		},
		showColors: {
			type: Boolean,
			default: true
		},
		showPreview: {
			type: Boolean,
			default: true
		},
		clearable: {
			type: Boolean,
			default: false
		},
		clearValue: {
			type: String,
			default: ''
		},
		defaultColors: Array
	},
	data() {
		return {
			id: 'ci-'+this.uuid
		}
	}
}
</script>