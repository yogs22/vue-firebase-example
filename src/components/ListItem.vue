<template>
	<div class="container">
		<table class="table table-striped table-bordered">
	      <thead>
	        <tr>
	          <th>Item Name</th>
	          <th>Item Price</th>
	          <th colspan="2">Action</th>
	        </tr>
	      </thead>
	      <tbody>
	      	<tr v-for="item in items" :key="item['.key']">
	      		<td>{{ item.name }}</td>
	      		<td>{{ item.price }}</td>
	      		<td>
	      			<router-link :to="{ name: 'EditItem', params: {id: item['.key']} }" class="btn btn-primary">
	      				Edit
	      			</router-link>
	      			<button @click="deleteItem(item['.key'])" class="btn btn-danger">Delete</button>
	      		</td>
	      	</tr>
	      </tbody>
	    </table>
	</div>	
</template>

<script>
	import { itemsRef } from '../config/db'
	import toastr from 'toastr'

	export default {
		name: 'ListItem',
		data() {
			return {
				items: []
			}
		},
		firebase: {
			items: itemsRef
		},
		methods: {
			deleteItem(key) {
				itemsRef.child(key).remove()
				toastr.success('Item removed successfully')
			}
		}
	}
</script>

<style scoped>
	.btn-primary {
		color: white !important;
	}
</style>