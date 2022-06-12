<script lang="ts">
    import {send} from '../../../lib/api'
    export let error: string
    export let success: string

    async function register(event: SubmitEvent){
        error = ''

        const formEl = event.target as HTMLFormElement
        const response = await send(formEl)

        if (response.error) {
            error = response.error
        }

        if (response.success) {
            success = response.success
        }
        formEl.reset()
    }
</script>

<form on:submit|preventDefault={register} method="post">

	<div>
		<label for="username">username</label>
		<input type="text" id="username" name="username" required />
	</div>

    <div>
        <label for="password">Password</label>
        <input  id="password" name="password" required type="password">
    </div>

    {#if error }
        <p class="error">{error}</p>
    {/if}

    {#if success }
        <div>
            <p>Thank you for signing in </p>
            <p>
                <a href="/auth/login">You can login</a>
            </p>
        </div>
    {/if}

    <button type="submit">Sign up</button>
</form>
