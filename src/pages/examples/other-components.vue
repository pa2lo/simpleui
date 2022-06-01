<template>
	<section class="section">
		<div class="card">
			<div class="card-header">
				<h2>Buttons</h2>
			</div>
			<div class="card-body">
				<p class="lh125"><strong>props:</strong> color (String: primary | secondary | success | warming | contrast), variant (String: default | outline | light), text (String), icon (String), link (String), type (String), size (String: small | normal | medium | large), loading (bool), disabled (bool), full (bool), tooltip (String)</p>
				<h3>Standard</h3>
				<p class="huttons">
					<button class="button">Primary</button>
					<button class="button secondary">Secondary</button>
					<button class="button success">Success</button>
					<button class="button warming">Warming</button>
					<button class="button contrast">Contrast</button>
				</p>
				<h3>Light</h3>
				<p class="huttons">
					<button class="button light">Primary</button>
					<button class="button secondary light">Secondary</button>
					<button class="button success light">Success</button>
					<button class="button warming light">Warming</button>
					<button class="button contrast light">Contrast</button>
				</p>
				<h3>Outline</h3>
				<p class="huttons">
					<button class="button outline">Primary</button>
					<button class="button outline secondary">Secondary</button>
					<button class="button outline success">Success</button>
					<button class="button outline warming">Warming</button>
					<button class="button outline contrast">Contrast</button>
				</p>
				<h3>Disabled</h3>
				<p class="huttons">
					<button class="button disabled">Primary</button>
					<button class="button light disabled">Primary light</button>
					<button class="button outline disabled">Primary outline</button>
					<button class="button secondary disabled">Secondary</button>
					<button class="button secondary light disabled">Secondary light</button>
					<button class="button secondary outline disabled">Secondary outline</button>
				</p>
				<h3>Loading</h3>
				<p class="huttons">
					<button class="button loading">Primary</button>
					<button class="button light loading">Primary light</button>
					<button class="button outline loading">Primary outline</button>
				</p>
				<h3>Sizes</h3>
				<p class="huttons">
					<button class="button small">Small</button>
					<button class="button">Normal</button>
					<button class="button medium">Medium</button>
					<button class="button large">Large</button>
				</p>
				<h3>Button group</h3>
				<div class="huttons">
					<div class="button-group">
						<btn color="contrast" variant="light" icon="person" text="First" />
						<drop-down color="contrast" variant="light" icon="info" text="Dropdown">
							<drop-down-link title="Link 1" icon="home" />
							<drop-down-link title="Link 2" icon="edit" />
							<drop-down-link title="Link 3" icon="trash" />
						</drop-down>
						<btn variant="light" color="contrast" text="Third" />
					</div>
					<div class="button-group">
						<btn color="contrast" variant="outline" text="Send" />
						<drop-down color="contrast" variant="outline" right focusLink>
							<drop-down-link title="Link 1" />
							<drop-down-link title="Link 2" />
							<div class="dd-divider"></div>
							<drop-down-link title="Link 3" />
							<drop-down-link title="Link 4" />
						</drop-down>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="card">
			<div class="card-header">
				<h2>Bedges</h2>
			</div>
			<div class="card-body">
				<h3>CSS</h3>
				<p class="bedges">
					<span class="bedge">Primary</span>
					<span class="bedge secondary">Secondary</span>
					<span class="bedge success">Success</span>
					<span class="bedge warming">Warming</span>
					<span class="bedge contrast">Contrast</span>
				</p>
				<h3>Component</h3>
				<p class="lh125"><strong>props:</strong> bedges: Array[Obj{text, color, tooltip}]<br>color: primary | secondary | success | warming | contrast</p>
				<bedges :bedges="bedges" />
			</div>
		</div>
	</section>
</template>

<script>
	import Bedges from '../../components/Bedges.vue'
	import DropDown from '../../components/DropDown.vue'
	import DropDownLink from '../../components/DropDownLink.vue'
	export default {
		components: {
			Bedges,
			DropDown,
			DropDownLink
		},
		data() {
			return {
				bedges: [
					{
						text: 'text'
					},
					{
						text: 'success',
						color: 'success'
					},
					{
						text: 'Secondary',
						color: 'secondary',
						tooltip: 'bedge tooltip bedge tooltip bedge tooltip bedge tooltip bedge tooltip bedge tooltip bedge tooltip bedge tooltip'
					},
					{
						text: 'last bedge',
						tooltip: 'small tooltip'
					}
				]
			}
		},
	}
</script>