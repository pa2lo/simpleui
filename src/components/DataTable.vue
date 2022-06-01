<template>
	<div class="data-table">
		<div v-if="searchable || $slots['header']" class="data-table-header">
			<div class="data-table-header-cont flex flex-wrap ai-c">
				<text-input class="dth-item" placeholder="Filter" icon="search" :clearable="true" v-model="searchWord" />
				<h3 class="dth-item">{{ itemCount }}</h3>
				<div v-if="$slots['header']" class="dth-item right">
					<slot name="header" />
				</div>
			</div>
		</div>
		<div class="items-table" :class="{empty: !filteredItems.length}">
			<table v-if="filteredItems.length">
				<thead>
					<th 
						v-for="(column, colindex) in columns"
						:key="colindex"
						:class="[
							column.class,
							{isSortable: column.sortable}
						]"
					>
						{{ column.title || '' }}
						<span v-if="column.sortable" class="th-sort-arrows">
							<a class="ith-sort" @click="setSorting(column.key, true)" title="Sort ascending" :class="{active: (sortBy == column.key) && sortDesc}">
								<icon name="caret-up" />
							</a>
							<a class="ith-sort" @click="setSorting(column.key, false)" title="Sort descending" :class="{active: (sortBy == column.key) && !sortDesc}">
								<icon name="caret-down" />
							</a>
						</span>
					</th>
				</thead>
				<tbody>
					<tr v-for="(item, index) in filteredItems" :key="index" >
						<td
							v-for="(column, colindex) in columns"
							:key="colindex"
							:class="[column.class]"
						>
							<slot v-if="column.slot" :name="column.slot" :item="item" />
							<template v-else-if="column.format">{{ column.format(item) }}</template>
							<template v-else>{{ item[column.key] }}</template>
						</td>
					</tr>
				</tbody>
			</table>
			<div v-else class="noresult">No {{ word }}s found!</div>
		</div>
	</div>
</template>

<script>
import TextInput from '../components/inputs/TextInput.vue'

export default {
	components: {
		TextInput
	},
	props: {
		items: {
			type: Array
		},
		word: {
			type: String,
			default: 'item'
		},
		searchable: {
			type: Boolean,
			default: true
		},
		searchBy: {
			type: String,
			default: 'title'
		},
		columns: {
			type: Array
		}
	},
	data() {
		return {
			searchWord: '',
			sortBy: '',
			sortDesc: false
		}
	},
	computed: {
		// filter items in table
		filteredItems() {
			// filter by search word
			let filteredItems = this.items.filter(item => item[this.searchBy].toLowerCase().includes(this.searchWord.toLowerCase()))

			// order items
			if (this.sortBy) {
				if (this.sortDesc) filteredItems = filteredItems.sort((a, b) => (a[this.sortBy] > b[this.sortBy]) ? 1 : -1)
				else filteredItems = filteredItems.sort((a, b) => (a[this.sortBy]	 < b[this.sortBy]) ? 1 : -1)
			}

			return filteredItems
		},

		// count filtered items
		itemCount() {
			// count items
			let count = this.filteredItems.length

			// fake pluralize
			let word = count > 1 ? `${this.word}s` : `${this.word}`

			return `${count} ${word}`
		}
	},
	methods: {
		setSorting(key, desc) {
			this.sortBy = key
			this.sortDesc = desc
		}
	}
}
</script>