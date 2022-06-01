<template>
	<page-layout>
		<h1>Form examples</h1>
		<section class="section">
			<card title="Form colors">
				<p>Set different color schemes. Add class accent-"color" (accent-secondary for example) on parent or input component itself.</p>
				<p>Available colors: primary (default), secondary, success, warming, contrast</p>
			</card>
			<div class="auto-grid size21 horizontal">
				<card title="Primary" titleTag="h3">
					<text-input title="Name" v-model="ceText" :disabled="!ceEnabled" />
					<multiswitch-input title="Variant" v-model="ceMswitch" :options="ceOptions" full :disabled="!ceEnabled" />
					<checkbox-input title="Services" v-model="ceCheckbox" :options="ceOptions" inline :disabled="!ceEnabled" />
					<radio-input title="Level" v-model="ceRadio" :options="ceOptions" inline :disabled="!ceEnabled" />
					<range-input v-model="ceRange" :min="0" :max="10" title="Range" hideInput :disabled="!ceEnabled" />
					<switch-input v-model="ceEnabled" title="Enabled" />
				</card>
				<card title="Secondary" class="accent-secondary" titleTag="h3">
					<text-input title="Name" v-model="ceText" :disabled="!ceEnabled" />
					<multiswitch-input title="Variant" v-model="ceMswitch" :options="ceOptions" full :disabled="!ceEnabled" />
					<checkbox-input title="Services" v-model="ceCheckbox" :options="ceOptions" inline :disabled="!ceEnabled" />
					<radio-input title="Level" v-model="ceRadio" :options="ceOptions" inline :disabled="!ceEnabled" />
					<range-input v-model="ceRange" :min="0" :max="10" title="Range" hideInput :disabled="!ceEnabled" />
					<switch-input v-model="ceEnabled" title="Enabled" />
				</card>
				<card title="Success" class="accent-success" titleTag="h3">
					<text-input title="Name" v-model="ceText" :disabled="!ceEnabled" />
					<multiswitch-input title="Variant" v-model="ceMswitch" :options="ceOptions" full :disabled="!ceEnabled" />
					<checkbox-input title="Services" v-model="ceCheckbox" :options="ceOptions" inline :disabled="!ceEnabled" />
					<radio-input title="Level" v-model="ceRadio" :options="ceOptions" inline :disabled="!ceEnabled" />
					<range-input v-model="ceRange" :min="0" :max="10" title="Range" hideInput :disabled="!ceEnabled" />
					<switch-input v-model="ceEnabled" title="Enabled" />
				</card>
				<card title="Warming" class="accent-warming" titleTag="h3">
					<text-input title="Name" v-model="ceText" :disabled="!ceEnabled" />
					<multiswitch-input title="Variant" v-model="ceMswitch" :options="ceOptions" full :disabled="!ceEnabled" />
					<checkbox-input title="Services" v-model="ceCheckbox" :options="ceOptions" inline :disabled="!ceEnabled" />
					<radio-input title="Level" v-model="ceRadio" :options="ceOptions" inline :disabled="!ceEnabled" />
					<range-input v-model="ceRange" :min="0" :max="10" title="Range" hideInput :disabled="!ceEnabled" />
					<switch-input v-model="ceEnabled" title="Enabled" />
				</card>
				<card title="Contrast" class="accent-contrast" titleTag="h3">
					<text-input title="Name" v-model="ceText" :disabled="!ceEnabled" />
					<multiswitch-input title="Variant" v-model="ceMswitch" :options="ceOptions" full :disabled="!ceEnabled" />
					<checkbox-input title="Services" v-model="ceCheckbox" :options="ceOptions" inline :disabled="!ceEnabled" />
					<radio-input title="Level" v-model="ceRadio" :options="ceOptions" inline :disabled="!ceEnabled" />
					<range-input v-model="ceRange" :min="0" :max="10" title="Range" hideInput :disabled="!ceEnabled" />
					<switch-input v-model="ceEnabled" title="Enabled" />
				</card>
				<card title="Per input" titleTag="h3">
					<text-input title="Name" v-model="ceText" :disabled="!ceEnabled" />
					<multiswitch-input title="Variant" v-model="ceMswitch" :options="ceOptions" full class="accent-secondary" :disabled="!ceEnabled" />
					<checkbox-input title="Services" v-model="ceCheckbox" :options="ceOptions" inline class="accent-warming" :disabled="!ceEnabled" />
					<radio-input title="Level" v-model="ceRadio" :options="ceOptions" inline class="accent-primary" :disabled="!ceEnabled" />
					<range-input v-model="ceRange" :min="0" :max="10" title="Range" hideInput class="accent-success" :disabled="!ceEnabled" />
					<switch-input v-model="ceEnabled" title="Enabled" class="accent-contrast" />
				</card>
			</div>
		</section>
		<section class="section">
			<card title="Sizes">
				<div class="auto-grid">
					<div>
						<p>By default is input size limited (text, select, textarea, range, color, multiswitch)</p>
						<text-input title="Text input" />
					</div>
					<div>
						<p>Add class fullWidth to the parent element, or set prop fullWidth on the input component</p>
						<text-input title="Text input fullWidth" fullWidth />
					</div>
				</div>
			</card>
		</section>
		<section class="section">
			<card title="Form sections">
				<p class="lh125">
					<strong>Form section component props:</strong> title (String), description (String), horizontal (Boolean), left (Boolean), columns (Boolean)<br>
					<strong>Slots:</strong> description
				</p>
				<form-section title="Form section columns" description="Form section description" columns>
					<text-input title="Text field" />
					<text-input title="Text field 2" />
					<text-input title="Text field 3" />
					<text-input title="Text field 4" />
					<select-input title="Select field" :options="selectOptions" emptyOption />
				</form-section>
				<form-section title="Form section columns left" left columns>
					<template #description>
						<p>Description slot for using <a href="#">links</a> or other components</p>
						<p><btn text="Button"/></p>
					</template>
					<text-input title="Text field" />
					<text-input title="Text field 2" />
					<text-input title="Text field 3" />
					<select-input title="Select field" :options="selectOptions" emptyOption />
				</form-section>
				<form-section title="Form section horizontal" horizontal>
					<text-input title="Text field" />
					<text-input title="Text field 2" />
					<text-input title="Text field 3" />
					<select-input title="Select field" :options="selectOptions" emptyOption />
				</form-section>
				<form-section title="Form section horizontal columns" horizontal columns>
					<text-input title="Text field" />
					<text-input title="Text field 2" />
					<text-input title="Text field 3" />
					<select-input title="Select field" :options="selectOptions" emptyOption />
				</form-section>
			</card>
		</section>
		<section class="section">
			<h2>Form orientation</h2>
			<div class="auto-grid size21">
				<card title="Standard (vertical)" titleTag="h3">
					<text-input title="First field" />
					<select-input title="Select" :options="selectOptions" emptyOption />
					<color-input modelValue="#123789" title="Choose color" />
					<textarea-input title="Textarea" />
					<simple-checkbox-input title="Simple checkbox" />
					<checkbox-input title="Checkboxes (inline)" :modelValue='["1", "3"]' :options="selectOptions" inline />
					<radio-input modelValue="2" title="Select one (inline)" :options="selectOptions" inline />
					<multiswitch-input modelValue="1" title="Switch one" :options="selectOptions" />
					<switch-input title="Switch" />
					<range-input v-model="range1" :min="0" :max="10" title="Range" />
				</card>
				<card class="horizontal" title="Horizontal" titleTag="h3">
					<p>Add class horizontal to the parent, or set prop horizontal on the input component</p>
					<text-input title="First field" />
					<select-input title="Select" :options="selectOptions" emptyOption />
					<color-input modelValue="#123789" title="Choose color" />
					<textarea-input title="Textarea" />
					<simple-checkbox-input title="Simple cb" label="label" :modelValue="true" />
					<checkbox-input title="Checkboxes" :modelValue='["1", "3"]' :options="selectOptions" inline />
					<radio-input modelValue="2" title="Radios" :options="selectOptions" inline />
					<multiswitch-input modelValue="1" title="Multiswitch" :options="selectOptions" />
					<switch-input title="Switch" />
					<range-input v-model="range1" :min="0" :max="10" title="Range" />
					<simple-checkbox-input title="Simple checkbox left" class="left" />
					<switch-input :modelValue="true" title="Switch left" class="left" />
				</card>
			</div>
		</section>
	</page-layout>
</template>

<script>
import TextInput from '../../components/inputs/TextInput.vue'
import SelectInput from '../../components/inputs/SelectInput.vue'
import TextareaInput from '../../components/inputs/TextareaInput.vue'
import SwitchInput from '../../components/inputs/SwitchInput.vue'
import MultiswitchInput from '../../components/inputs/MultiswitchInput.vue'
import RangeInput from '../../components/inputs/RangeInput.vue'
import SimpleCheckboxInput from '../../components/inputs/SimpleCheckboxInput.vue'
import CheckboxInput from '../../components/inputs/CheckboxInput.vue'
import RadioInput from '../../components/inputs/RadioInput.vue'
import ColorInput from '../../components/inputs/ColorInput.vue'
import FormSection from '../../components/FormSection.vue'

export default {
	components: {
		TextInput,
		SelectInput,
		TextareaInput,
		SimpleCheckboxInput,
		CheckboxInput,
		RadioInput,
		SwitchInput,
		MultiswitchInput,
		RangeInput,
		ColorInput,
		FormSection
	},
	data() {
		return {
			selectOptions: [
				{label: 'label 1', val: '1'},
				{label: 'label 2', val: '2'},
				{label: 'label 3', val: '3'}
			],

			range1: 4,

			ceText: '',
			ceMswitch: '2',
			ceCheckbox: ["1", "3"],
			ceRadio: '2',
			ceRange: 5,
			ceOptions: [
				{label: 'label 1', val: '1'},
				{label: 'label 2', val: '2'},
				{label: 'label 3', val: '3', disabled: true}
			],
			ceEnabled: true
		}
	},
}
</script>