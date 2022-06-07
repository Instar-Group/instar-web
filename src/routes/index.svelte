<script>
</script>

<main class="main">
	<!-- Logo -->
	<div class="logo">
		<img src="/static/InstarLogo.svg" alt="logo" height="100" width="100" />
		<span class="logo-text">Instar</span>
	</div>
	<!-- house points -->
	<div class="house-points">
		<div class="challengers">
			<div class="mx-5">
				<div class="text-container">
					<span class="">Challengers</span>
					<span class="">Score : 0</span>
				</div>
			</div>
		</div>
		<div class="gladiators">
			<div class="mx-5">
				<div class=" text-container">
					<span class="">Gladiators</span>
					<span class="">Score : 0</span>
				</div>
			</div>
		</div>
		<div class="warriors">
			<div class="mx-5">
				<div class=" text-container">
					<span class="">Warriors</span>
					<span class="">Score : 0</span>
				</div>
			</div>
		</div>
		<div class="knights">
			<div class="mx-5">
				<div class=" text-container">
					<span class="">Knights</span>
					<span class="">Score : 0</span>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.house-points {
		@apply flex items-center justify-center 
		flex-col mb-8
		lg:flex-row lg:mt-10 
		md:flex-row md:mt-7;
	}
	.main {
		@apply flex flex-col items-center justify-center;
	}
	.logo {
		@apply flex flex-row 
		scale-75 
		md:scale-100
		lg:scale-100;
	}
	.logo-text {
		@apply text-white  text-4xl items-center justify-center flex
		mx-3;
	}
	.text-container {
		@apply flex flex-col items-center justify-center my-10;
	}
</style>
