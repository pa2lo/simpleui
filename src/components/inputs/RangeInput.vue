<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="range"
		element="div"
		:class="{horizontal}"
	>
		<template #default>
			<div class="input-rel-container flex ai-c range-input-wrapper" :class="{fullWidth}">
				<div class="range-slider-cont" :style="{'--complete': fillWidth}">
					<input 
						:id="id"
						class="range-slider"
						type="range"
						:min="min"
						:max="max"
						:value="modelValue"
						:disabled="disabled"
						step="1"
						@input="$emit('update:modelValue', parseInt($event.target.value))"
					/>
					<span v-if="!hideRangeTooltip" class="range-tooltip">{{ modelValue }}</span>
				</div>
				<label v-if="!hideInput" class="input-group range-input-cont">
					<input
						class="input-el text-input short"
						:disabled="disabled"
						type="text"
						:value="modelValue"
						@change="setByInput($event.target.value)"
					/>
					<span v-if="suffix" class="input-addon" :class="{disabled}">{{ suffix }}</span>
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
		modelValue: Number,
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 10
		},
		suffix: String,
		forceRange: {
			type: Boolean,
			default: true
		},
		hideInput: Boolean,
		hideRangeTooltip: Boolean
	},
	data() {
		return {
			id: 'ri-'+this.uuid
		}
	},
	computed: {
		fillWidth() {
			let filled = parseFloat((this.modelValue - this.min) / (this.max - this.min))
			return this.getNumInRange(filled, 0, 1)
		}
	},
	methods: {
		setByInput(value) {
			let newVal = parseInt(value)
			if (!newVal) newVal = this.min
			if (this.forceRange) newVal = this.getNumInRange(newVal, this.min, this.max)
			this.$emit('update:modelValue', newVal)
		},
		getNumInRange(num, min, max) {
			return Math.max(Math.min(num, max), min)
		}
	}
}
</script>