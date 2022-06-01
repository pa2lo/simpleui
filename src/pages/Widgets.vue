<template>
	<page-layout>
		<h1>Widgets</h1>
		<div v-if="widgets.length">
			<data-table :items="widgets" :columns="tableColumns" word="widget">
				<template #header>
					<button class="button mla" @click.prevent="showCreateForm = true">Add widget</button>
				</template>
				<template #link="slotProps">
					<a class="items-table-link" :href="`#edit-${slotProps.item.id}`">{{ slotProps.item.title }}</a>
				</template>
				<template #actions="slotProps">
					<div class="flex ai-c">
						<a class="table-action-icon ttip left" data-text="Edit"><icon name="edit" /></a>
						<a class="table-action-icon delete ttip left" data-text="Delete" @click.prevent="deleteWidget(slotProps.item.id)"><icon name="trash" /></a>
					</div>
				</template>
				<template #status="slotProps">
					<span v-if="slotProps.item.status == 2" class="bedge warming">Fetching data</span>
					<span v-else class="bedge success">Active</span>
				</template>
			</data-table>
		</div>
		<div v-else>
			<h2>You have no widget - create new one</h2>
			<button class="button secondary medium" @click.prevent="showCreateForm = true">Add widget</button>
		</div>
		<simple-modal :show="showCreateForm" @close="showCreateForm = false" size="small" title="Add new widget">
			<template #body>
				<form class="card-body-form" @submit.prevent="submitNewWidget" autocomplete="off">
					<text-input class="autofocus" name="h_title" tooltip="title tooltip" title="Title" placeholder="Widget for mysite.xy" v-model="form.title" :error="errors.title" />
					<select-input name="h_service" title="Service" :options="widgetOptions" v-model="form.service" :error="errors.service" :emptyOption="true" />
					<text-input name="h_key" title="Secret key" v-model="form.secret_key" :error="errors.secret_key">
						<template #hint>
							<a href="#" @click.prevent="showHint = true">Where to find key?</a>
						</template>
					</text-input>
					<div>
						<button :class="{loading: creating}" class="button secondary full" type="submit">Add widget</button>
					</div>
				</form>
			</template>
		</simple-modal>
		<simple-modal :show="showHint" @close="showHint = false">
			<template #body>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium facere omnis incidunt sequi? Porro, in ea voluptatibus tempore nihil iste blanditiis ratione doloremque pariatur reiciendis nobis, repudiandae mollitia dolore.</p>
			</template>
			<template #footer>
				<button @click="showHint = false" class="button success autofocus">OK</button>
			</template>
		</simple-modal>
	</page-layout>
</template>

<script>
import SimpleModal from '../components/SimpleModal.vue'
import DataTable from '../components/DataTable.vue'
import TextInput from '../components/inputs/TextInput.vue'
import SelectInput from '../components/inputs/SelectInput.vue'

export default {
	components: {
		SimpleModal,
		DataTable,
		TextInput,
		SelectInput
	},
	data() {
		return {
			tableColumns: [
				{
					key: 'id',
					title: 'ID',
					class: 'ta-c narrow'
				},
				{
					key: 'title',
					title: 'Name',
					sortable: true,
					slot: 'link',
					class: 'p0'
				},
				{
					key: 'service',
					title: 'Service',
					sortable: true
				},
				{
					key: 'created_at',
					title: 'Created',
					sortable: true,
					format: (item) => new Date(item.created_at).toLocaleString(),
				},
				{
					key: 'status',
					title: 'Status',
					slot: 'status',
					sortable: true
				},
				{
					title: 'Actions',
					slot: 'actions',
					class: 'p0 narrow ta-c'
				}
			],

			widgets: [
				{
					id: 1,
					title: "Widget 1",
					service: "Service 2",
					created_at: '2020-12-12',
					link: '#edit',
					status: 1
				},
				{
					id: 2,
					title: "Widget 2",
					service: "Service 2",
					created_at: '2021-02-03',
					link: '#edit',
					status: 2
				},
				{
					id: 3,
					title: "Test widget 3",
					service: "Service 1",
					created_at: '2021-01-02',
					link: '#edit',
					status: 1
				}
			],

			showCreateForm: false,
			showHint: false,
			creating: false,

			errors: {},
			form: {
				title: null,
				service: null,
				secret_key: null
			},
			lastItemId: 3,

			widgetOptions: [{
				label: 'Option 1',
				val: 'Service 1'
			}, {
				label: 'Option 2',
				val: 'Service 2'
			}],
		}
	},
	methods: {
		submitNewWidget() {
			this.creating = true
			let hasError = false
			this.errors = {}
			setTimeout(() => {
				if (!this.form.title) {
					hasError = true,
					this.errors.title = 'Title filed is required!'
				}
				if (!this.form.service) {
					hasError = true,
					this.errors.service = 'Service filed is required!'
				}
				if (!this.form.secret_key) {
					hasError = true,
					this.errors.secret_key = 'Secret key is required!'
				}

				if (hasError) {
					this.creating = false
					this.$notific.error('Fill all fields')
				} else {
					this.widgets.push({
						id: ++this.lastItemId,
						title: this.form.title,
						service: this.form.service,
						created_at: new Date(),
						status: 2
					})

					this.creating = false
					this.form = {
						title: null,
						service: null,
						secret_key: null
					}

					this.showCreateForm = false

					this.$notific.success('Widget added')
				}
			}, 500);
		},
		deleteWidget(id) {
			let itemId = this.widgets.findIndex(item => item.id == id)
			this.widgets.splice(itemId, 1)
			this.$notific.success('Widget removed')
		}
	}
}
</script>