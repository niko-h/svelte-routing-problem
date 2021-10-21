<script>
	import { page } from '$app/stores';
	import { module } from '../stores/stores.js';
</script>

<main>
	<slot />
</main>

<footer>
	<h3>Footer</h3>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/" on:click={() => module.set(0)}>Start</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		</ul>
	</nav>
</footer>
