<template>
	<page-layout>
		<h1>Example components</h1>
		<dropdown-component />
		<other-components />
	</page-layout>
</template>

<script>
import DropdownComponent from './dropdown-component.vue'
import OtherComponents from './other-components.vue'

export default {
	components: {
		DropdownComponent,
		OtherComponents
	}
}
</script>,