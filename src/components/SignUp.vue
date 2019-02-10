<template>
	<div class="signup">
	    <img src="@/assets/logo.png">
		<h3>Register your account</h3>
		<form @submit="signUp">
			<input type="email" v-model="email" placeholder="Email"> 
			<input type="password" v-model="password" placeholder="Password">
			<button type="submit" class="btn btn-success">Sign Up</button>
		</form>
		<p><a @click="toLogIn">Go back</a></p>
	</div>
</template>

<script>
	import Vue from 'vue'
	import firebase from 'firebase'

	export default {
		name: 'signUp',
		data: function() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signUp: function() {
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					function(user) {
						Vue.swal('OK', 'Your account has been created', 'success')
					}, 
					function(err) {
						Vue.swal('Error', 'Oops, ' + err.message, 'error')
					}
				);
			},
			toLogIn: function() {
				this.$router.replace('login')
			}
		}
	}
</script>

<style scoped>
	img {
		width: 10%;
	}

	input {
		width: 20%;
		display: block;
		margin: auto;
		margin-bottom: 14px;
		border: 1px solid #41b883;
		padding: 10px 14px;
	}

	.signup {
		display: block;
		margin: auto;
		text-align: center;
		padding: 40px;
		width: 100%
	}

	p {
		margin-top: 15px;
	}
</style>