<script context="module">
	export const prerender = true;
	
	import { level, module } from '../stores/stores.js';

	const modules = [
		["A","B","C"], 
		["A","B"], 
	];
</script>

<section>
	<h1>Start</h1>

	{#if $module < 1}
		<div>
			Choose module: 
			<ul>
				{#each modules as mod, index}
					<li><button on:click={() => module.set(index + 1)}>Module {index + 1}</button></li>
				{/each}
			</ul>
		</div>
	{/if}
	
	{#if $module >= 1}
		<div>
			Choose level for module {$module}: 
			<ul>
				{#each modules[$module - 1] as lev}
					<li><a sveltekit:prefetch href="/{$module}-{$level}">Level {lev}</a></li>
				{/each}
			</ul>
		</div>
	{/if}
</section>
