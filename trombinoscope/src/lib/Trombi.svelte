<script>
    export let items = [];
    let selected = undefined;
</script>

<div class="selected">
    {#if items[selected]}
        <h1>{items[selected].name} {items[selected].surname}</h1>
        <p>{items[selected].born}</p>
        {#if items[selected].dead}
            <p>{items[selected].dead}</p>
        {/if}
        <p>{items[selected].description}</p>
    {/if}
</div>

<div class="trombi-list">
    {#each items as item, i}
        <div
            class="trombi-item"
            class:active={selected === i}
            on:click={() => (selected = i)}
        >
            <h2>{item.name} {item.surname}</h2>
            <p>{item.age}</p>
        </div>
    {/each}
</div>

<style>
    h2 {
        margin: 0;
    }
    p {
        margin: 0;
    }
    .trombi-list {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin: 20px auto;
    }
    .trombi-item {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
        padding: 5px 10px;
        border-radius: 5px;
        padding: 5px;
    }
    .selected {
        width: 25%;
        height: 200px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
        margin: 20px auto;
        border-radius: 5px;
        padding: 10px;
    }
    .active {
        background-color: #eee;
    }
</style>
