<template>
	<page-layout>
		<h1>Modal component</h1>
		<section class="section">
			<div class="card">
				<div class="card-header">
					<h2>Simple modal</h2>
				</div>
				<div class="card-body">
					<p class="lh125">
						<strong>props:</strong> show (bool), closeable (bool) - backdrop close & x, size (String) - default | small | large, scrollBody (bool), title (String), subtitle (String)<br>
						<strong>autofocus</strong> - add class <strong>autofocus</strong> to element to focus<br>
						<strong>emit:</strong> modal-open, close<br>
						<strong>slots:</strong> body, footer
					</p>
					<p><button class="button contrast" @click="exampleModal = true">Show modal</button></p>
				</div>
			</div>
		</section>
		<simple-modal title="Modal title" subtitle="Modul subtitle" :show="exampleModal" @close="exampleModal = false">
			<template #body>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium facere omnis incidunt sequi? Porro, in ea voluptatibus tempore nihil iste blanditiis ratione doloremque pariatur reiciendis nobis, repudiandae mollitia dolore.</p>
			</template>
			<template #footer>
				<a href="#" class="start noUnderline" @click.prevent="exampleStackedModal = true">Open second modal w scrollBody</a>
				<btn text="Ok" color="success" @click="exampleModal = false" class="autofocus" />
			</template>
		</simple-modal>

		<simple-modal size="small" title="Second modal" :show="exampleStackedModal" @close="exampleStackedModal = false" scrollBody>
			<template #body>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim placeat ipsum magni quo quam eveniet debitis. Eaque similique deleniti suscipit repellat omnis? Quasi praesentium ipsum impedit obcaecati, reiciendis doloremque.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, id minus? Sit, rem sequi recusandae quis voluptatum, non, laboriosam maxime eius culpa eveniet at quibusdam repellat fugit tenetur delectus exercitationem?</p>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores deleniti distinctio odio quos at magni, explicabo ex? Ea, officia neque? Dolorem ipsum dicta quod ad ut, rerum temporibus ea consectetur vero rem soluta odio nam ex quis, necessitatibus odit, enim dolore. Odio odit alias labore impedit repudiandae maiores est. Facere, eum rerum aliquam, nihil dignissimos labore cum asperiores incidunt in, ducimus sit possimus. Quibusdam delectus, saepe quam, velit voluptatem veniam ad quos quae, in ullam officiis quod assumenda cupiditate non. Ratione voluptatem, sint libero, aliquid aperiam provident modi tenetur eos optio iusto quo quis adipisci accusantium aspernatur quia dolorum voluptas assumenda rem, sed suscipit perferendis beatae. Laborum natus, enim placeat culpa blanditiis maxime saepe animi, esse ipsam delectus consequatur sequi incidunt cumque ipsa soluta tempore rerum ea dicta libero optio ab sit dolores! Saepe modi possimus vel quaerat, aliquid odio? Pariatur quibusdam sunt natus doloremque maiores dicta maxime ipsam ad ipsum laborum reprehenderit mollitia sapiente ab facere cum est voluptatibus a aliquam, soluta quis et aspernatur, rerum temporibus. Atque placeat, reiciendis autem officia voluptate omnis dignissimos ut minima iste veniam dolore consectetur quis incidunt provident, perspiciatis quod exercitationem officiis adipisci cumque saepe ducimus nemo ad aspernatur? Eum, aut rem.</p>
			</template>
			<template #footer>
				<btn @click.stop="exampleStackedModal = false" class="autofocus" text="Close" />
			</template>
		</simple-modal>

		<section class="section">
			<h2>Confirm modal & loader</h2>
			<div class="auto-grid size21">
				<div class="card">
					<div class="card-header"><h3>Confirm modal</h3></div>
					<div class="card-body">
						<p class="lh125">
							use: $confirm(obj)<br>
							obj params: size (String: default | small | large ),  message (String), title (String), confirmText (String), cancelText (String), cancellable (bool), buttonColor (String), onConfirm (fn), onCancel (fn)
						</p>
						<p>
							<button class="button" @click.prevent="basicConfirm">Basic with confrim and cancel alert</button>
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card-header"><h3>Fullscreen loading animation</h3></div>
					<div class="card-body">
						<p class="lh125">
							use: $loading.start(text), $loading.setText(text), $loading.stop()
						</p>
						<p>
							<button class="button secondary" @click.prevent="exampleLoading">Run loading</button>
						</p>
					</div>
				</div>
			</div>
		</section>
	</page-layout>
</template>

<script>
import SimpleModal from '../../components/SimpleModal.vue'

export default {
	components: {
		SimpleModal,
	},
	data() {
		return {
			exampleModal: false,
			exampleStackedModal: false
		}
	},
	methods: {
		basicConfirm() {
			this.$confirm({
				title: 'title',
				size: 'small',
				message: 'text',
				cancellable: true,
				confirmText: 'confirmText',
				cancelText: 'cancelText',
				onConfirm: () => {
					this.$confirm({
						message: 'second',
						size: 'small',
						buttonColor: 'secondary',
						onConfirm: () => {
							alert('onConfirm')
						}
					})
				},
				onCancel: () => {
					alert('onCancel')
				}
			})
		},
		exampleLoading() {
			this.$loading.start('Start loading...')
			setTimeout(() => {
				this.$loading.setText('New text')
				setTimeout(() => {
					this.$loading.setText()
					setTimeout(() => {
						this.$loading.stop()
					}, 1500);
				}, 1500);
			}, 1500);
		}
	}
}
</script>