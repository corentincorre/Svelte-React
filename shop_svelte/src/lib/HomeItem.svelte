<script>
    import Item from "./Item.svelte";
    export let game;
    import { cart } from "../data/stores";

    const addToCart = (product, qnt) => {
        for (let item of $cart) {
            if (item.id === product.id) {
                item.quantity += qnt;
                $cart = $cart;

                return (qnt = 1);
            }
        }
        console.log(qnt);
        product["quantity"] = qnt;
        $cart = [...$cart, product];
        return (qnt = 1);
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
            addToCart(game, game.quantity);
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
