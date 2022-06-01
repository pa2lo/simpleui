
<template>
    <transition name="collapse"
                @enter="enter"
                @after-enter="cleanUp"
                @leave="leave"
                @after-leave="cleanUp"
    >
        <slot></slot>
    </transition>
</template>

<script>
// edited code from https://github.com/ivanvermeyen/vue-collapse-transition/blob/master/src/CollapseTransition.vue
    export default {
        props: {
            duration: {
                type: Number,
                required: false,
                default: 300
            },
            easing: {
                type: String,
                required: false,
                default: 'ease-in-out'
            },
        },
        data() {
            return {
                cachedStyles: null,
            }
        },
        methods: {
            enter(el) {
                // Because width and height may be 'auto',
                // first detect and cache the dimensions
                this.detectAndCacheDimensions(el)
                // The order of applying styles is important:
                // - 1. Set styles for state before transition
                // - 2. Force repaint
                // - 3. Add transition style
                // - 4. Set styles for state after transition
                // If the order is not right and you open any 2nd level submenu
                // for the first time, the transition will not work.
                this.setClosedDimensions(el)
                this.hideOverflow(el)
                this.forceRepaint(el)
                this.setTransition(el)
                this.setOpenedDimensions(el)
            },
            cleanUp(el) {
                // Clean up inline styles
                this.unsetStyles(el)
                this.clearCachedDimensions()
            },
            leave(el) {
                // For some reason, @leave triggered when starting
                // from open state on page load. So for safety,
                // check if the dimensions have been cached.
                this.detectAndCacheDimensions(el)
                // The order of applying styles is less important
                // than in the enter phase, as long as we repaint
                // before setting the closed dimensions.
                // But it is probably best to use the same
                // order as the enter phase.
                this.setOpenedDimensions(el)
                this.hideOverflow(el)
                this.forceRepaint(el)
                this.setTransition(el)
                this.setClosedDimensions(el)
            },
            detectAndCacheDimensions(el) {
                // Cache actual dimensions
                // only once to void invalid values when
                // triggering during a transition
                if (this.cachedStyles) return
                const visibility = el.style.visibility
                const display = el.style.display
                // Trick to get the width and
                // height of a hidden element
                el.style.visibility = 'hidden'
                el.style.display = ''
                this.cachedStyles = this.detectRelevantDimensions(el)
                // Restore any original styling
                el.style.visibility = visibility
                el.style.display = display
            },
            clearCachedDimensions() {
                this.cachedStyles = null
            },
            detectRelevantDimensions(el) {
                // These properties will be transitioned
				return {
					'height': el.offsetHeight + 'px',
					'paddingTop': el.style.paddingTop || this.getCssValue(el, 'padding-top'),
					'paddingBottom': el.style.paddingBottom || this.getCssValue(el, 'padding-bottom'),
					'marginTop': el.style.marginTop || this.getCssValue(el, 'margin-top'),
					'marginBottom': el.style.marginBottom || this.getCssValue(el, 'margin-bottom'),
				}
            },
            setTransition(el) {
				el.style.transition = `height ${this.duration}ms ${this.easing}, margin ${this.duration}ms ${this.easing}, padding ${this.duration}ms ${this.easing}`
            },
            hideOverflow(el) {
                el.style.overflow = 'hidden'
            },
            setClosedDimensions(el) {
                el.style.height = el.style.padding = el.style.margin = '0'
            },
            setOpenedDimensions(el) {
                Object.keys(this.cachedStyles).forEach((key) => {
                    el.style[key] = this.cachedStyles[key]
                })
            },
			unsetStyles(el) {
				el.style.height = el.style.padding = el.style.margin = el.style.overflow = el.style.transition = ''
			},
            forceRepaint(el) {
                // Force repaint to make sure the animation is triggered correctly.
                // Thanks: https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
                getComputedStyle(el)['height']
            },
            getCssValue(el, style) {
                return getComputedStyle(el, null).getPropertyValue(style)
            },
        }
    }
</script>