<script>
	import { isOverlayOpen } from '../stores/OverlayStore';
	import { fade } from 'svelte/transition';
	import CopyToClipboard from 'svelte-copy-to-clipboard';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	let copyText = 'https://instar.vercel.app';

	const handleSuccessfullyCopied = () => {
		toast.push('Copied Successfully', { duration: 1700 });
	};

	const handleFailedCopy = () => {
		toast.push('Failed to Copy', { duration: 1700 });
	};
</script>

<div
	class="w-screen z-10 h-screen fixed top-0 left-0 flex justify-center items-center bg-slate-600 opacity-90 "
	on:click={() => {
		isOverlayOpen.set(false);
	}}
	transition:fade
>
	<SvelteToast />
	<div on:click|stopPropagation class="text-white rounded-md relative ">
		<div class="main-content">
			<img
				class="qrcode"
				src="https://gist.githubusercontent.com/Archit1712Coder/9bdc91b1a2831c0d1537bc314acf1426/raw/3ab3fe9fb90ac2bf6a619ffc07e7d8febf4dc2c1/qrcode.svg"
				alt="qrcode"
			/>
			<div class="flex flex-col items-center ">
				<span class="text">Scan the QR Code to open the website on your phone</span>
				<span class="text-4xl my-4 ">OR</span>
				<span class="text ">Copy This Link and send to a friend </span>
				<div class="link">
					<span class="text">https://instar.vercel.app</span>
					<CopyToClipboard
						text={copyText}
						on:copy={handleSuccessfullyCopied}
						on:fail={handleFailedCopy}
						let:copy
					>
						<button class="link-btn" on:click={copy}
							><img
								src="https://gist.githubusercontent.com/Archit1712Coder/03ccdefa41b789bab15ca851de0d26a5/raw/a50fd30369387a447575f53ba22282eb0305554f/linkbutton.svg"
								alt="link-btn"
								width="25"
								height="25"
							/></button
						>
					</CopyToClipboard>
				</div>
			</div>

			<button class="close-button" on:click={() => isOverlayOpen.set(false)}>&times</button>
		</div>
	</div>
</div>

<style>
	.close-button {
		@apply absolute top-1 right-3  text-4xl text-gray-200;
	}
	.text {
		@apply text-base mx-4 my-4 text-center flex items-center justify-center
				md:text-2xl
				lg:text-2xl;
	}
	.link {
		@apply flex flex-row border rounded-md p-1 mt-2 items-center justify-center;
	}
	.link-btn {
		@apply hover:opacity-80 m-1;
	}
	.main-content {
		@apply bg-gray-800 text-white rounded-md flex flex-col  px-2 py-4
		scale-75
		md:flex-row md:scale-90 md:px-4 md:py-6
		lg:flex-row lg:scale-100 lg:px-8 lg:py-10;
	}
	.qrcode {
		@apply scale-[0.6]
		md:scale-90
		lg:scale-100;
	}
</style>
