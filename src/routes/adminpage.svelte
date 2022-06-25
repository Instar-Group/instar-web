<script context="module" lang="ts">
	import Header from '../components/Header.svelte';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session }) => {
		if (!session.user) {
			return {
				status: 302,
				redirect: 'auth/adminlogin'
			};
		}
		return {
			status: 200,
			props: {
				user: session.user.username
			}
		};
	};
</script>



<svelte:head>
	<title>Admin Page</title>
</svelte:head>

<main class="main">
	<Header />
	<!-- House scores -->
	<div class="flex items-center justify-center w-screen ">
		<span class="text">House Scores</span>
	</div>
	<div class="house-points">
		<div class="challengers w-44 h-44">
			<div class="mx-5 items-center flex flex-col">
				<div class="text-container">
					<span class="">Challengers</span>
					<div class="flex flex-row space-x-3">
						<span class="">Score : </span>
						<input class="score-input bg-[#FF5252]" type="text" placeholder="0" />
					</div>
				</div>
				<button class="update-btn">Update Score</button>
			</div>
		</div>
		<div class="gladiators w-44 h-44">
			<div class="mx-5">
				<div class=" text-container">
					<span class="">Gladiators</span>
					<div class="flex flex-row space-x-3">
						<span class="">Score : </span>
						<input class="score-input bg-[#6BCB77]" type="text" placeholder="0" />
					</div>
				</div>
			</div>
			<button class="update-btn">Update Score</button>
		</div>
		<div class="warriors w-44 h-44">
			<div class="mx-5">
				<div class=" text-container">
					<span class="">Warriors</span>
					<div class="flex flex-row space-x-3">
						<span class="">Score : </span>
						<input class="score-input bg-[#72AAFC]" type="text" placeholder="0" />
					</div>
				</div>
			</div>
			<button class="update-btn">Update Score</button>
		</div>
		<div class="knights w-44 h-44">
			<div class="mx-5">
				<div class=" text-container">
					<span class="">Knights</span>
					<div class="flex flex-row space-x-3">
						<span class="">Score : </span>
						<input class="score-input bg-[#FFD93D]" type="text" placeholder="0" />
					</div>
				</div>
			</div>
			<button class="update-btn">Update Score</button>
		</div>
	</div>
</main>

<style>
	.text {
		@apply text-white text-4xl;
	}
	.house-points {
		@apply items-center justify-center 
		grid grid-cols-2
		lg:flex-row lg:mt-16 lg:flex  
		md:flex-row md:mt-10  md:gap-7;
	}
	.text-container {
		@apply flex flex-col items-center justify-center my-10;
	}
	.update-btn {
		@apply bg-slate-100/30 p-1 mb-3 rounded-md
                transition-all duration-300 hover:bg-slate-100/50;
	}
	.score-input {
		@apply placeholder-slate-50 h-5 w-16 flex text-center 
        items-center justify-center mt-1.5 focus:outline-slate-400;
	}
</style>
