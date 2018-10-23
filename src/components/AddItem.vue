<template>
	<div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="addItem">
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
                        <input type="submit" class="btn btn-success" value="Add Item"/>
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
		name: 'AddItem',
		data: function() {
			return {
				newItem: {
					name: '',
					price: ''
				},
				submitted: false
			}
		},
		methods: {
			addItem(e) {
				this.submitted = true
				this.$validator.validate().then(valid => {
					if (valid) {
						itemsRef.push(this.newItem)
						this.newItem.name = ''
						this.newItem.price = ''
						this.$router.push('/list-item')
						toastr.success('Item added successfully')
					}
				})
			}
		}
	}
</script>