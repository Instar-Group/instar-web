<script lang="ts">
	import { session } from '$app/stores';
	import { send } from '../../../lib/api';

	export let error: string;

	async function login(event: SubmitEvent) {
		const formEl = event.target as HTMLFormElement;
		const response = await send(formEl);

		if (response.error) {
			error = response.error;
		}

		$session.user = response.user;

		formEl.reset();
	}
</script>

<main class="main">
	<div class="login-form">
		<!-- Logo -->
		<div class="logo">
			<img
				src="https://raw.githubusercontent.com/Instar-Group/instar-web/41958dc9fdee1fca654f8ff9e0c9732d325ad5af/static/InstarLogo.svg"
				alt="logo"
				height="100"
				width="100"
			/>
			<span class="logo-text">Instar</span>
		</div>
		<!-- Login Form  -->
		<form
			class="bg-white shadow-md rounded content-center flex flex-col px-8 pt-6 pb-8 mb-4"
			on:submit|preventDefault={login}
			method="post"
		>
			<span class="text-2xl flex items-center justify-center text-center mb-4">Admin Login</span>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					name="username"
					required
					type="text"
				/>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
				<input
					class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					name="password"
					required
					type="password"
				/>
			</div>

			{#if error}
				<p class="error">{error}</p>
			{/if}

			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit">submit</button
			>
		</form>
	</div>
</main>

<style>
	.main {
		@apply flex items-center justify-center;
	}
	.login-form {
		@apply w-full max-w-xs space-y-10 flex flex-col items-center justify-center;
	}
	.logo {
		@apply flex flex-row 
		scale-[.6]
		md:scale-100
		lg:scale-100;
	}
	.logo-text {
		@apply text-white  text-4xl items-center justify-center flex
		mx-3;
	}
	.error{
		@apply text-red-600 pb-4 text-center
	}
</style>
