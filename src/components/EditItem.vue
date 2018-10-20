<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="newItem.price" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
	import { itemsRef } from '../config/db'
	import toastr from 'toastr'

	export default {
		name: 'EditItem',
		firebase: {
			items: itemsRef,
			itemsObj: {
				source: itemsRef,
				asObject: true
			}
		},
		data() {
			return {
				newItem: {}
			}
		},
		created() {
			let item = this.itemsObj[this.$route.params.id]
			this.newItem = {
				name: item.name,
				price: item.price 
			}
		},
		methods: {
			updateItem() {
				itemsRef.child(this.$route.params.id).set(this.newItem);
				this.$router.push('list-item')
				toastr.success('Item updated successfully')
			}
		}
	}
</script>