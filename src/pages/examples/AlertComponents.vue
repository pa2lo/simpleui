<template>
	<page-layout>
		<h1>Alerts & toasts</h1>
		<section class="section">
			<card title="Toasts">
				<p class="lh125">
					use: $notific.type(text, options)<br>
					type: info | success | warming | error<br>
					options (obj): duration (int - ms) - 0 => infinit
				</p>
				<p class="huttons">
					<btn text="info (infinite) + onClick" @click.prevent="infoNotification" />
					<btn color="success" text="success (10s)" @click.prevent="$notific.success('success success success', {duration: 10000})" />
					<btn color="warming" text="warming (default)" @click.prevent="$notific.warming('warming warming')" />
					<btn color="secondary" text="error (25000ms)" @click.prevent="$notific.error('error', {duration: 25000})" />
				</p>
			</card>
		</section>
		<section class="section">
			<card title="Alerts">
				<p class="lh125">
					<strong>props:</strong> text (String), type (String - info | success | warming | error), dismissible (bool), solid (bool)<br>
					<strong>slots:</strong> default
				</p>
				<u-alert text="Info alert dismissible" dismissible />
				<u-alert type="success" text="Success alert dismissible" dismissible />
				<u-alert type="warming" text="Warming alert" />
				<u-alert type="error" text="Error alert dismissible with content" dismissible>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id incidunt dolorum at voluptatibus, doloremque dolore modi odio accusantium consectetur similique, sit impedit minima! Voluptate, vel pariatur cupiditate exercitationem expedita quis?</p>
				</u-alert>
				<u-alert text="Info alert solid dismissible" dismissible solid />
				<u-alert type="success" text="Success alert solid dismissible" dismissible solid />
				<u-alert type="warming" text="Warming alert solid" solid />
				<u-alert type="error" text="Error alert solid with content" solid>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id incidunt dolorum at voluptatibus, doloremque dolore modi odio accusantium consectetur similique, sit impedit minima! Voluptate, vel pariatur cupiditate exercitationem expedita quis?</p>
				</u-alert>
			</card>
		</section>
	</page-layout>
</template>

<script>
import UAlert from '../../components/Alert.vue'
export default {
	components: {
		UAlert
	},
	methods: {
		infoNotification() {
			this.$notific.info('info info info', {
				duration: 0,
				onClick: function() {
					alert('toast clicked')
				}
			})
		}
	}
}
</script>