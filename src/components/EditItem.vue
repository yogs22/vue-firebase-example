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
                        <input type="text" class="form-control" v-validate="'required'" v-model="newItem.name" name="name"/>
                        <span class="text-danger" v-if="submitted && errors.has('name')">{{ errors.first('name') }}</span>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="number" class="form-control" v-validate="'required|numeric'" v-model="newItem.price" name="price"/>
                        <span class="text-danger" v-if="submitted && errors.has('price')">{{ errors.first('price') }}</span>
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
	import Vue from 'vue'
	import toastr from 'toastr'
	import VeeValidate from 'vee-validate'

	Vue.use(VeeValidate)

	export default {
		name: 'EditItem',
		firebase: {
			items: itemsRef,
			itemsObj: {
				source: itemsRef,
				asObject: true
			},
			submitted: false
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
				this.submitted = true
				this.$validator.validate().then(valid => {
					if (valid) {
						itemsRef.child(this.$route.params.id).set(this.newItem);
						this.$router.push('list-item')
						toastr.success('Item updated successfully')
					}
				})
			}
		}
	}
</script>