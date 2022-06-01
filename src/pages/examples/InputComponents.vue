<template>
	<page-layout>
		<h1>Input components</h1>
		<card>
			<p><strong>Global props for all inputs:</strong> title: (String), name: (String), tooltip: (String), modelValue (v-model), error (String), disabled (Boolean), horizontal (Boolean), fullWidth (Boolean)</p>
		</card>
		<div class="auto-grid size21">
			<card title="Text input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> placeholder (String), icon (String), clearable (bool), type (String)<br>
					<strong>slots:</strong> hint
				</p>
				<text-input name="example_text_input" tooltip="Tooltip text - clearable" title="Text input clearable" placeholder="text input placeholder" v-model="textInputExample" clearable />
				<text-input error="input error message" name="example_text_input2" title="Text input w error" v-model="textInputExample2" />
				<text-input name="example_text_input" title="Text input disabled" placeholder="text input placeholder" v-model="textInputExample3" disabled />
			</card>
			<card title="Select input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> icon (String), options (Array), hideEmptyOption (Boolean)<br>
					<strong>slots:</strong> hint
				</p>
				<select-input name="example_select_input" title="Select input" v-model="selectInputExample2" :options="exampleSelectOptions" />
				<select-input name="example_select_input" title="Select input w hideEmptyOption" v-model="selectInputExample" :options="exampleSelectOptions" hideEmptyOption>
					<template #hint>#hint slot</template>
				</select-input>
				<select-input name="example_select_input" title="Select input disabled" v-model="selectInputExample3" :options="exampleSelectOptions" disabled />
			</card>
			<card title="Textarea input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> placeholder (String), rows (Number)<br>
					<strong>slots:</strong> hint
				</p>
				<textarea-input name="example_textarea_input" title="Textarea input" placeholder="textarea input placeholder" v-model="textareaInputExample" />
				<textarea-input name="example_textarea_input" title="Textarea input disabled" placeholder="textarea input placeholder" v-model="textareaInputExample2" disabled :rows="3" />
			</card>
			<card title="Checkbox input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> options (Array), inline(Boolean)<br>
					<strong>slots:</strong> hint
				</p>
				<checkbox-input title="Checkbox input" name="checkboxInputExample" v-model="checkboxInputExample" :options="exampleCheckboxOptions" />
				<checkbox-input title="Checkbox horizontal" name="checkboxInputExample2" horizontal v-model="checkboxInputExample2" :options="exampleCheckboxOptions" />
				<checkbox-input title="Checkbox inline options" name="checkboxInputExample3" v-model="checkboxInputExample3" inline :options="exampleCheckboxOptions" />
			</card>
			<card title="Radio input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> options (Array), inline(Boolean)<br>
					<strong>slots:</strong> hint
				</p>
				<radio-input title="Radio input" name="radioInputExample" v-model="radioInputExample" :options="exampleRadioOptions" />
				<radio-input title="Radio horizontal" name="radioInputExample2" horizontal v-model="radioInputExample2" :options="exampleRadioOptions" />
				<radio-input title="Radio inline options" name="radioInputExample3" v-model="radioInputExample3" inline :options="exampleRadioOptions" />
			</card>
			<card title="Switch input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> hideInfo (Boolean), reverse (Boolean), left (String)<br>
					<strong>slots:</strong> hint, label
				</p>
				<switch-input name="switchInputExample" title="Switch input" v-model="switchInputExample" />
				<switch-input name="switchInputExample2" title="Switch horizontal" v-model="switchInputExample3" horizontal />
				<switch-input name="switchInputExample3" title="Switch reverse" v-model="switchInputExample2" reverse />
				<switch-input name="switchInputExample4" title="Switch left + tooltip + hideInfo" v-model="switchInputExample4" tooltip="This is tooltip" hideInfo left />
			</card>
			<card title="Multiswitch input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> options (Array), full (Boolean)<br>
					<strong>slots:</strong> hint
				</p>
				<multiswitch-input title="Multiswitch input full" name="multiswitchInputExample" v-model="multiswitchInputExample" :options="exampleMultiswitchOptions" full />
				<multiswitch-input title="Multiswitch input w icons" name="multiswitchInputExample2" v-model="multiswitchInputExample2" :options="exampleMultiswitchOptions2" />
			</card>
			<card title="Range Input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> min (Number), max (Number), suffix (String), forceRange (Boolean), hideInput (Boolean), hideRangeTooltip (Boolean)<br>
					<strong>slots:</strong> hint
				</p>
				<range-input title="Range input" :min="0" :max="15" v-model="rengeInputExample" suffix="px" />
				<range-input title="Range input" :min="100" :max="500" v-model="rengeInputExample2" />
				<range-input title="Range horizontal" v-model="rengeInputExample3" hideInput class="horizontal" />
			</card>
			<card title="Color Input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> alpha (Boolean), showColors (Boolean), showPreview (Boolean), clearable (Boolean), clearValue (String), defaultColors (Array)<br>
					<strong>slots:</strong> hint
				</p>
				<color-input title="Color input" v-model="colorInputExample" clearable />
				<color-input class="horizontal" title="Color horizontal" v-model="colorInputExample2" :alpha="false" :defaultColors="colorInputExamplePallete" />
				<div class="colorinputpreview" style="height: 3em" :style="{background: colorInputExample2}"></div>
			</card>
			<card title="Simple checkbox input" titleTag="h3">
				<p class="lh125">
					<strong>props:</strong> label (String), reverse (Boolean), left (String)<br>
					<strong>slots:</strong> hint, label
				</p>
				<simple-checkbox-input name="simpleCheckboxInputExample" title="Checkbox input" label="label" v-model="simpleCheckboxInputExample" />
				<simple-checkbox-input name="simpleCheckboxInputExample2" title="Checkbox horizontal" label="label" v-model="simpleCheckboxInputExample3" horizontal />
				<simple-checkbox-input name="simpleCheckboxInputExample3" title="Checkbox reverse" v-model="simpleCheckboxInputExample2" reverse />
				<simple-checkbox-input name="simpleCheckboxInputExample4" title="Checkbox left + tooltip" v-model="simpleCheckboxInputExample4" tooltip="This is tooltip" left />
			</card>
		</div>
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
		ColorInput
	},
	data() {
		return {
			textInputExample: '',
			textInputExample2: '123456',
			textInputExample3: 'i am disabled',

			textareaInputExample: '',
			textareaInputExample2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, repudiandae.',

			selectInputExample: '1',
			selectInputExample2: '',
			selectInputExample3: '2',
			exampleSelectOptions: [
				{label: 'label 1', val: '1'},
				{label: 'label 2', val: '2'},
				{label: 'label 3', val: '3'}
			],

			simpleCheckboxInputExample: true,
			simpleCheckboxInputExample2: true,
			simpleCheckboxInputExample3: false,
			simpleCheckboxInputExample4: false,

			switchInputExample: true,
			switchInputExample2: true,
			switchInputExample3: false,
			switchInputExample4: false,

			multiswitchInputExample: 'option1',
			exampleMultiswitchOptions: [
				{label: 'Option 1', val: 'option1'},
				{label: 'Option 2', val: 'option2'},
				{label: 'Option 3', val: 'option3'}
			],
			multiswitchInputExample2: 'option3',
			exampleMultiswitchOptions2: [
				{label: 'Option 1', val: 'option1'},
				{label: 'Option 2', val: 'option2', icon: 'person', iconOnly: true},
				{label: '3 (w color)', val: 'option3', icon: 'info', color: 'contrast'},
				{label: 'Option 4', val: 'option4', html: '<img src="//via.placeholder.com/40x40">'}
			],

			checkboxInputExample: ['opt1'],
			checkboxInputExample2: ['opt2'],
			checkboxInputExample3: ['opt1'],
			exampleCheckboxOptions: [
				{label: 'Option 1', val: 'opt1'},
				{label: 'Option 2', val: 'opt2'},
			],

			radioInputExample: 'option2',
			radioInputExample2: 'option1',
			radioInputExample3: 'option2',
			exampleRadioOptions: [
				{label: 'Option 1', val: 'option1'},
				{label: 'Option 2', val: 'option2'},
			],

			rengeInputExample: 5,
			rengeInputExample2: 250,
			rengeInputExample3: 6,
			rengeInputExample4: 6,

			colorInputExample: '#226688',
			colorInputExample2: '',
			colorInputExamplePallete: ['#000000', '#FFFFFF', '#FF1900', '#FFE623', '#1BC7B1', '#2E81FF', '#FC3CAD', '#BF3DCE']
		}
	},
}
</script>