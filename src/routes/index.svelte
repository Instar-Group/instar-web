<script>
</script>

<main class="main">
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
		@apply items-center justify-center 
		grid grid-cols-2
		lg:flex-row lg:mt-16 lg:flex  
		md:flex-row md:mt-10  md:gap-7;
	}
	.main {
		 @apply flex flex-col items-center justify-center relative;
	}
	.logo {
		@apply flex flex-row 
		scale-[.8] pt-3
		md:scale-105
		lg:scale-105;
	}
	.logo-text {
		@apply text-white  text-4xl items-center justify-center flex
		mx-3;
	}
	.text-container {
		@apply flex flex-col items-center justify-center my-10;
	}
</style>
