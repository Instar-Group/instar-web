<script>
    import FaRegUserCircle from 'svelte-icons/fa/FaRegUserCircle.svelte'
</script>

<header class="header">
<!-- Logo -->
	<div class="logo">
        <img
            src="https://raw.githubusercontent.com/Instar-Group/instar-web/41958dc9fdee1fca654f8ff9e0c9732d325ad5af/static/InstarLogo.svg"
            alt="logo"
            height="70"
            width="70"
        />
    </div>
    <!-- Page Title -->
    <div>
        <span class="text-white text-3xl">Admin Console</span>
    </div>
    <!-- Admin Profile -->
    <div class="user-icon"><FaRegUserCircle/></div>
</header>


<style>
    .header{
        @apply sticky top-0 z-40 p-2 flex flex-row items-center justify-around
    }
    .logo{
        @apply flex items-center
    }
    .user-icon{
        @apply w-[65px] h-[65px] text-slate-200 cursor-pointer
                hover:text-white
    }
</style>
