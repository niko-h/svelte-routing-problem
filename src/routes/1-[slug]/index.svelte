<script>
	import { page } from '$app/stores';
	import { module, level } from '../../stores/stores.js';
	
	// on reload determine module and level from slug
	if($module === 0 || $level === '-') {
		let slug;
		page.subscribe(value => slug = value.params.slug);
		module.set(1); // hard-coded module
		level.set(slug);
	}
</script>

<section>
	<h2>Module: {$module} | Level: {$level}</h2>
</section>