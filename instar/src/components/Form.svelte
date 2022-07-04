<script>
  let name = "",
    password = "";

  const submit = () => {
    
    if (password == "chk") {
        console.log("succcess");
    }
  };
</script>

<form class="flex space-y-5 flex-col" onsubmit="return false" on:submit|preventDefault={submit}>
  <span class="text-white text-4xl text-center">Admin Login</span>
  <div class="mb-6">
    <label
      for="base-input"
      class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
      >Username</label
    >
    <input
      type="text"
      id="base-input"
      bind:value={name}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
  <div class="mb-6">
    <label
      for="name-input"
      class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
      >Password</label
    >
    <input
      type="password"
      id="password-input"
      bind:value={password}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
  <div class="flex items-center justify-center">
    <button
      type="button"
      class="text-white   bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out duration-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >Log In</button
    >
  </div>
</form>
