<script>
    export let character;
</script>

<div class="card lg:card-side shadow-xl m-10 font-mono bg-base-100">
    <figure><img src={character.image} alt={character.name} /></figure>
    <div class="card-body gap-4">
        <h2 class="card-title font-semi-bold text-2xl">-{character.name}</h2>
        <span
            class="{character.status == 'Alive'
                ? 'text-emerald-700  bg-emerald-200'
                : 'text-red-900 bg-rose-500'}
    w-fit
    px-1
    rounded"
            >-{character.status}
        </span>
        <span>-{character.species}</span>
        <span>-Last Seen: {character.location.name}</span>
        <span>-Gender: {character.gender}</span>
    </div>
</div>