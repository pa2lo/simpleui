<template>
	<div class="dropdown-container" ref="container">
		<component
			:is='el'
			ref="ddtoggler"
			class="dropdown-toggler"
			:color="color"
			:variant="variant"
			:size="size"
			:class="[
				togglerClass,
				{
					narrow: !$slots['toggler'] && !text,
					active: show
				}
			]"
			:text="text"
			:icon="icon"
			@click.prevent="showDropdown"
		>
			<template v-if="$slots['toggler']">
				<slot name="toggler" />
			</template>
			<template v-else>
				<icon v-if="!noChevron" class="chevron" name="chevron-down"/>
			</template>
		</component>
		<transition name="dropdown" @enter="enter">
			<div v-show="show" ref="ddpop" class="dropdown-pop" :class="{top: isTop, right: isRight}" @keyup.esc="closeByKey" tabindex="-1">
				<div v-if="$slots['header']" class="dd-header">
					<slot name="header" />
				</div>
				<div class="dd-body">
					<slot />
				</div>
				<div v-if="$slots['footer']" class="dd-footer">
					<slot name="footer" />
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		color: String,
		variant: String,
		togglerClass: String,
		icon: String,
		top: Boolean,
		right: Boolean,
		immediateHide: Boolean,
		noChevron: Boolean,
		size: String,
		focusLink: Boolean
	},
	data() {
		return {
			show: false,
			isTop: this.top,
			isRight: this.right
		}
	},
	computed: {
		el() {
			return this.$slots['toggler'] ? 'div' : 'btn'
		}
	},
	beforeUnmount() {
		if (this.show) {
			if (this.immediateHide) document.removeEventListener('click', this.eventHandlerOnce)
			else document.removeEventListener('click', this.eventHandler)
		}
	},
	methods: {
		enter(el) {
			const containerPosition = this.$el.getBoundingClientRect()
			const elHeight = el.offsetHeight
			const elWidth = el.offsetWidth

			if (this.top && (containerPosition.y - elHeight < 0)) this.isTop = false
			else if (this.top && this.isTop == false) this.isTop = true
			if (!this.top && (containerPosition.bottom + elHeight > window.innerHeight)) this.isTop = true
			else if (!this.top && this.isTop == true) this.isTop = false

			if (this.right && (containerPosition.right - elWidth < 0)) this.isRight = false
			else if (this.right && this.isRight == false) this.isRight = true
			if (!this.right && (containerPosition.x + elWidth > window.innerWidth)) this.isRight = true
			else if (!this.right && this.isRight == true) this.isRight = false
		},
		showDropdown() {
			if (!this.show) {
				this.show = true
				this.registerEvents()

				this.$nextTick(() => {
					if (this.focusLink) {
						let ddlink = this.$refs.ddpop.querySelector('.dd-link')
						if (ddlink) ddlink.focus()
						else this.$refs.ddpop.focus()
					} else this.$refs.ddpop.focus()
				})
			}
		},
		registerEvents() {
			setTimeout(() => {
				if (this.immediateHide) document.addEventListener('click', this.eventHandlerOnce, {once: true})
				else document.addEventListener('click', this.eventHandler)
			}, 0)
		},
		eventHandlerOnce(e) {
			this.show = false
		},
		eventHandler(e) {
			if (e.target && !this.$refs.ddpop.contains(e.target) && this.$refs.ddpop != e.target) {
				this.show = false
				document.removeEventListener('click', this.eventHandler)
			}
		},
		closeByKey() {
			this.show = false
			if (this.immediateHide) document.removeEventListener('click', this.eventHandlerOnce)
			else document.removeEventListener('click', this.eventHandler)

			if (!this.$slots['toggler']) this.$refs.ddtoggler.$el.focus()
		}
	}
}
</script>