<script>
	import { isOverlayOpen } from '../stores/OverlayStore';
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
	<button
		class="share-btn"
		on:click={() => {
			isOverlayOpen.set(true);
		}}
	>
		<img
			src="https://gist.githubusercontent.com/Archit1712Coder/b4a2775ed18f990f2143a167619dec06/raw/2e974b199f4eed64283e0fd4a009be3f5da0edf3/sharebutton.svg"
			alt="share-btn"
			height="50"
			width="50"
		/>
	</button>
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
	.share-btn {
		@apply absolute right-14 top-14 scale-50 md:scale-100
		 		md:right-28 md:top-28;
	}
</style>
