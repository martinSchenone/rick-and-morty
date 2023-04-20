<script>
	import Card from '../../lib/components/Card.svelte';
	export let data;
	const info = data.data.info;
	$: characters = data.data.results;
	$: page = 1;
	$: hasnext = info.next;
	const next = () => {
		if (hasnext === null) {
			return (page = 1);
		}
		return page++;
	};
	const prev = () => {
		if (page <= 1) {
			return (page = 1);
		}
		page--;
	};
</script>

<div class="container mx-auto mt-10 font-mono">
	<h1 class="text-3xl text-center font-bold text-primary">Rick and morty characters</h1>
</div>

<div class="container mx-auto mt-10">
	<div class="btn-group flex px-2 gap-2">
		<a
			sveltekit:prefetch
			on:click={prev}
			class="
      {page !== 1 ? '' : 'btn-disabled'}
      btn
      btn-outline
      flex-1
      bg-primary text-gray-100
      "
			href="/characters?page={page}"
		>
			Previous
		</a>
		<a
			href="/characters?page={page}"
			sveltekit:prefetch
			on:click={next}
			class="btn btn-outline flex-1 bg-primary text-gray-100"
		>
			Next
		</a>
	</div>
	{#each characters as character}
		<Card {character} />
	{/each}
</div>
