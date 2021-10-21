<script context="module">
	export const prerender = true;
	
	import { goto } from '$app/navigation';
	import { level, module } from '../stores/stores.js';

	const modules = [
		["A","B","C"], 
		["A","B"], 
	];

	function enterModule(mod) {
		module.set(mod);
	}

	function enterLevel(module, lev) {
		level.set(lev);
		goto(`/${module}-${lev}`);
	}

</script>

<section>
	<h1>Start</h1>

	{#if $module < 1}
		<div>
			Choose module: 
			<ul>
				{#each modules as mod, index}
					<li><button on:click={() => enterModule(index + 1)}>Module {index + 1}</button></li>
				{/each}
			</ul>
		</div>
	{/if}
	
	{#if $module >= 1}
		<div>
			Choose level for module {$module}: 
			<ul>
				{#each modules[$module - 1] as lev}
					<li><button on:click={() => enterLevel($module, lev)}>Level {lev}</button></li>
				{/each}
			</ul>
		</div>
	{/if}
</section>
