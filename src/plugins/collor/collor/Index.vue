<template>
	<div class="sle-collor">
		<div class="sle-input">
			<button
				class="sle-input-button"
				@click="togglePicker"
			>
				<span class="sle-picker-placeholder" :style="{backgroundColor: color || 'transparent'}" :class="{clearable: clearable}"/>
			</button>
			<input 
				class="sle-input-text input-el"
				:value="color"
				placeholder="Select color..."
				@input="changeColorInput($event.target.value)"
				@focus="openPicker"
				:id="id"
			/>
			<button v-if="clearable" @click="reset" class="input-clear-icon ttip"  data-text="Reset" :class="{active: modelValue.length > 0}">
				<icon name="x" />
			</button>
		</div>
		<transition name="dropdown">
			<picker-popup
				v-if="pickerOpen"
				ref="picker"
				:alpha="alpha"
				:value="color"
				:defaultColors="defaultColors"
				:showColors="showColors"
				:showPreview="showPreview"
				:containerPosition="getContainerPosition()"
				@emitColor="emitColor"
				@closePicker="closePicker"
			/>
		</transition>
	</div>
</template>

<script>
import PickerPopup from './PickerPopup.vue'

export default {
	emits: ['update:modelValue'],
	components: {
		PickerPopup
	},
	props: {
		id: String,
		modelValue: {
            type: [String, Boolean],
            default: 'rgba(0,0,0,0)'
        },
		alpha: {
			type: Boolean,
			default: true
		},
		defaultColors: {
            type: Array,
            default: ['#000000', '#FFFFFF', '#FF1900', '#F47365', '#FFB243', '#FFE623', '#6EFF2A', '#1BC7B1', '#00BEFF', '#2E81FF', '#5D61FF', '#FF89CF', '#FC3CAD', '#BF3DCE', '#8E00A7']
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
		}
	},
	data() {
		return {
			pickerOpen: false,
			color: this.modelValue
		}
	},
	beforeUnmount() {
		if (this.pickerOpen) this.closePicker()
	},
	methods: {
		// get container position for placing popup
		getContainerPosition() {
			return this.$el.getBoundingClientRect()
		},

		// change color by input - validation
		changeColorInput(color) {
			color = color.trim()
			if (/#/.test(color)) {
				if (color.length == 4 || color.length == 7) {
					if (this.pickerOpen) this.$refs.picker.setColor(color)
					this.emitColor(color)
				}
			} else if (/rgb/.test(color)) {
				if (this.pickerOpen) this.$refs.picker.setColor(color)
				this.emitColor(color)
			}
		},

		// reset
		reset() {
			if (this.pickerOpen) {
				let pickerResetValue = this.clearValue
				if (!(/#/.test(pickerResetValue) || /rgb/.test(pickerResetValue))) pickerResetValue = 'rgba(0, 0, 0, 0)'
				this.$refs.picker.setColor(pickerResetValue)
			}
			
			this.emitColor(this.clearValue)
		},

		// change color by picker
		emitColor(color) {
			this.color = color
			this.$emit('update:modelValue', color)
		},

		// toggle picker
		togglePicker() {
			if (!this.pickerOpen) this.openPicker()
			else this.closePicker()
		},
		// open picker
		openPicker() {
			if (!this.pickerOpen) {
				document.body.addEventListener('mousedown', this.handleClicks)
				this.pickerOpen = true
			}
		},
		// close picker
		closePicker(color = false) {
			if (color) this.emitColor(color)

			// close picker
			document.body.removeEventListener('mousedown', this.handleClicks)
			this.pickerOpen = false
		},

		// outside click handler
		handleClicks(event) {
			if (!(this.$el == event.target || this.$el.contains(event.target))) {
				this.closePicker()
			}
		}
	},
}
</script>