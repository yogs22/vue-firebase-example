<template>
	<div class="login">
		<img src="@/assets/logo.png">
		<h3>Sign In</h3>
		<form @submit="logIn">
			<input type="text" v-model="email" placeholder="Email"> 
			<input type="password" v-model="password" placeholder="Password">
			<button type="submit" class="btn btn-success">Log In</button>
		</form>
		<p>You don't have account ? <a @click="toSignUp">Create account</a></p>
	</div>
</template>

<script>
	import Vue from 'vue'
	import firebase from 'firebase'

	export default {
		name: 'Login',
		data: function() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			logIn: function() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						this.$router.replace('hello')
					}, 
					(err) => {
						Vue.swal('Oops', err.message, 'error')
					}
				);
			},
			toSignUp: function() {
				this.$router.replace('signup')
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

	.login {
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