<template>
	<div class="tabs-wrapper" :class="[`theme-${variant}`, {isCard: card}, card && horizontal ? 'isHorizontal' : 'isVertical']">
		<div class="nav-tabs-container">
			<div class="nav-tabs" ref="tabsCountainer" @scroll="setTabsScroll" :class="{isFull: full || card, centered: centered}">
				<button
					v-for="(tab, index) in tabs"
					:key="tab.name"
					class="nav-tab"
					:disabled="tab.disabled"
					:class="{
						active: index == selectedTab,
						disabled: tab.disabled
					}"
					@click="selectTab(index, $event)"
				>
					<icon v-if="tab.icon" :name="tab.icon" class="nav-tab-icon" />
					<span class="nav-tab-text">{{ tab.name }}</span>
				</button>
			</div>
			<div v-if="scrollTabs && scrollableLeft" @click="scrollTabsLeft" class="nav-tabs-scroll scroll-left">
				<icon name="caret-left" />
			</div>
			<div v-if="scrollTabs && scrollableRight" @click="scrollTabsRight" class="nav-tabs-scroll scroll-right">
				<icon name="caret-right" />
			</div>
		</div>
		<div class="tabs">
			<slot />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			variant: {
				type: String,
				default: 'basic'
			},
			full: Boolean,
			centered: Boolean,
			card: Boolean,
			horizontal: Boolean
		},
		data() {
			return {
				selectedTab: 0,
				tabs: [],
				scrollTabs: false,
				scrollableLeft: false,
				scrollableRight: false,
				timeout: null,
				hmm: 'neviem'
			}
		},
		mounted () {
			if (this.tabs.length) {
				this.tabs[0].isActive = true
			}

			if (!this.horizontal) {
				this.$nextTick(() => {
					this.setTabsScroll()
					window.addEventListener('resize', this.handleResize)
				})
			}
		},
		beforeUnmount() {
			if (!this.horizontal) {
				window.removeEventListener('resize', this.handleResize)
			}
		},
		methods: {
			handleResize(ev) {
				this.$nextTick(() => {
					this.setTabsScroll()
				})
			},

			selectTab(index, ev) {
				const tab = this.tabs[index]
				if (!tab.disabled && this.selectedTab != index) {
					this.selectedTab = index
					this.tabs.forEach((tab, i) => {
						tab.isActive = i == index
					})

					if (this.scrollTabs) {
						this.$refs.tabsCountainer.scrollLeft = ev.target.closest('.nav-tab').offsetLeft - 32
					}
				}
			},

			setTabsScroll() {
				if (this.timeout) clearTimeout(this.timeout)
				this.timeout = setTimeout(() => {
					const containerWidth = this.$refs.tabsCountainer.clientWidth
					const tabsWidth = this.$refs.tabsCountainer.scrollWidth
	
					if (containerWidth < tabsWidth) {
						this.scrollTabs = true
						
						const sLeft = this.$refs.tabsCountainer.scrollLeft
						if (sLeft > 0) this.scrollableLeft = true
						else this.scrollableLeft = false
	
						if ((sLeft + containerWidth) < tabsWidth) this.scrollableRight = true
						else this.scrollableRight = false
					} else if (this.scrollTabs) this.scrollTabs = false
				}, 100)
			},

			scrollTabsRight() {
				this.$refs.tabsCountainer.scrollLeft += (this.$refs.tabsCountainer.clientWidth - 32)
			},

			scrollTabsLeft() {
				this.$refs.tabsCountainer.scrollLeft -= (this.$refs.tabsCountainer.clientWidth - 32)
			}
		}
	}
</script>