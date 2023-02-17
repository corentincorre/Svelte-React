<script>
    export let items = [];
    let selected = 0;
    function next() {
        if (selected + 1 < items.length) {
            selected++;
        }
    }
    function previous() {
        if (selected > 0) {
            selected--;
        }
    }
    $: currentItem = items[selected];
</script>

<slot item={currentItem}>coucou</slot>
<button on:click={previous}>Précédent</button>
{#each items as item, currentIndex}
    <span
        class:active={selected === currentIndex}
        on:click={() => (selected = currentIndex)}>{item.name}</span
    >
{/each}
<button on:click={next}>Suivant</button>

<style>
    span {
        margin: 1rem;
        cursor: pointer;
    }
    div {
        font-size: 4rem;
    }

    .active {
        color: red;
    }
</style>
