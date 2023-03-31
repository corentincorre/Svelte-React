<script>
    import QuantityCounter from "./QuantityCounter.svelte";

    export let game;

    export let more = () => game.quantity++;
    export let less = () => (game.quantity > 1 ? game.quantity-- : null);
</script>

<div class="item-infos">
    <img src="src/assets/image.png" alt={game.title} />
    <div class="title-and-tags">
        <h2>{game.title}</h2>
        <div class="tags-list">
            {#each game.tags as tag}
                <div class="tag">{tag}</div>
            {/each}
        </div>
    </div>

    <QuantityCounter quantity={game.quantity} {more} {less} />

    <div class="item-price">{game.price}€</div>
</div>

<style>
    img {
        height: 200px;
        max-width: 300px;
        width: 100%;
        object-fit: cover;
    }
    .tags-list {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }
    .tag {
        background-color: #555;
        color: #f5f5f5;
        font-size: 12px;
        line-height: 12px;
        padding: 4px 8px;
        border-radius: 10px;
    }
    .item-price {
        text-align: right;
        font-weight: 700;
        padding: 4px 0;
    }
</style>
