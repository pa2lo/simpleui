<template>
	<a :href="href" class="dd-link" @keydown.down.prevent="nextLink" @keydown.up.prevent="prevLink">
		<icon v-if="icon" :name="icon" class="dd-link-icon" />
		<slot>
			<span class="dd-link-title">{{ title }}</span>
		</slot>
	</a>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			icon: String,
			href: {
				type: String,
				default: '#'
			}
		},
		methods: {
			nextLink(e) {
				let next = this.nextElement(e.target, '.dd-link')

				if (next) next.focus()
			},

			prevLink(e) {
				let prev = this.prevElement(e.target, '.dd-link')

				if (prev) prev.focus()
			},

			nextElement(el, selector) {
				let sibling = el.nextElementSibling

				while (sibling) {
					if (sibling.matches(selector)) return sibling;
					sibling = sibling.nextElementSibling
				}
			},

			prevElement(el, selector) {
				let sibling = el.previousElementSibling

				while (sibling) {
					if (sibling.matches(selector)) return sibling;
					sibling = sibling.previousElementSibling
				}
			}
		}
	}
</script>