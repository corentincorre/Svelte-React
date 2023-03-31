<script>
    import Item from "./Item.svelte";
    export let game;
    import { cart } from "../data/stores";

    const addToCart = (product) => {
        for (let item of $cart) {
            if (item.id === product.id) {
                item.quantity += product.quantity;
                $cart = $cart;
                product.quantity = 1;
                return;
            }
        }
        $cart = [...$cart, product];
        product.quantity = 1;
    };

    $: game.quantity = 1;

    const more = () => game.quantity++;
    const less = () => (game.quantity > 1 ? game.quantity-- : null);
</script>

<div id="game-{game.id}" class="home-item">
    <Item {game} {more} {less} />
    <button
        class="add"
        on:click={() => {
            addToCart(game);
        }}>Ajouter au panier</button
    >
</div>

<style>
    .home-item {
        background-color: #f5f5f5;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
    }

    .home-item :global(.title-and-tags) {
        margin-bottom: 12px;
    }
    .add {
        background-color: #222;
        color: #f5f5f5;
        padding: 8px 24px;
    }
</style>
