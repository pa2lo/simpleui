<template>
	<input-row
		:title="title"
		:name="name"
		:tooltip="tooltip"
		:id="id"
		:error="error"
		type="mswitch"
		element='div'
		:class="{horizontal}"
	>
		<template #default>
			<div class="input-rel-container mswitch-input-wrpper flex" :class="{fullWidth}">
				<label
					v-for="(option, index) in options"
					:key="index"
					class="mswitch-label"
					:class="[
						option.color,
						{
							ttip: option.iconOnly || option.html,
							grow: full
						}
					]"
					:data-text="option.label"
				>
					<input
						class="mswitch-input"
						type="radio" 
						:name="name || id"
						:value="option.val"
						:disabled="disabled || option.disabled"
						:checked="option.val == modelValue"
						@change="$emit('update:modelValue', option.val)"
					/>
					<div class="mswitch-option" :class="{isHtml: option.html, disabled: disabled || option.disabled}">
						<div v-if="option.html" class="mswitch-option-html" v-html="option.html"></div>
						<template v-else>
							<icon v-if="option.icon" :name="option.icon" />
							<span v-if="!option.iconOnly" class="mswitch-option-title">{{ option.label }}</span>
						</template>
					</div>
					<!-- <div class="mswitch-option" v-html="option.icon || option.label" /> -->
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
		modelValue: [String, Boolean],
		options: Array,
		full: Boolean
	},
	data() {
		return {
			id: 'mswi-'+this.uuid
		}
	}
}
</script>