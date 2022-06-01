<template>
	<section class="section">
		<div class="card">
			<div class="card-header">
				<h2>Dropdown</h2>
			</div>
			<div class="card-body">
				<p class="lh125">
					<strong>props:</strong> togglerClass (String), text (String), color (String), variant (String), icon (String), top (bool), right (bool), size (String - button size), noChevron (bool), immediateHide (bool) - hide on first click, focusLink (bool) - focus first link<br>
					<strong>slots:</strong> toggler, header, default(body), footer
				</p>
				<p class="lh125">
					<strong>DropDownLink - props: </strong> title (String), icon (String), href (String)
				</p>
				<div class="flex">
					<drop-down position="bottom-left" variant="light" text="Open">
						<template #header>
							#header slot
						</template>
						<template #default>
							#body slot
						</template>
						<template #footer>
							#footer slot
						</template>
					</drop-down>
					<div class="ml05">
						<drop-down top right color="light" variant="contrast" text="Top right" focusLink>
							<drop-down-link title="Link 1" icon="home" />
							<drop-down-link title="Link 2" icon="edit" />
							<drop-down-link title="Link 3" icon="trash" />
							<div class="dd-divider"></div>
							<p class="fz0875 lh125">autofocus first link. Use arrows up/down to move focus. Press ESC to hide dropdown</p>
						</drop-down>
					</div>
					<div class="ml05 flex ai-c">
						<drop-down>
							<template #toggler>
								<span>Custom toggler</span><icon class="ml05 chevron" name="chevron-down"/>
							</template>
							<drop-down-link title="Link 1" />
							<drop-down-link title="Link 2" />
							<drop-down-link title="Link 3" />
						</drop-down>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import DropDown from '../../components/DropDown.vue'
import DropDownLink from '../../components/DropDownLink.vue'

export default {
	components: {
		DropDown,
		DropDownLink
	}
}
</script>