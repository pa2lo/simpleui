<template>
	<div class="notific-cont">
		<transition-group name="notific-message">
			<toast v-for="(toast, index) in $notificMessages" :key="index" :index="index" :toast="toast" @destroy="destroyToast(index)" />
		</transition-group>
	</div>
</template>

<script>
import Toast from './Toast.vue'
export default {
	components: {Toast},
	methods: {
		destroyToast(index) {
			delete this.$notificMessages[index]
		}
	}
}
</script>