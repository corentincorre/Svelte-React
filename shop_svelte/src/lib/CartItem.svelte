<script>
    import Item from "./Item.svelte";
    export let game;
    import { cart } from "../data/stores";
    import { element } from "svelte/internal";

    const removeItem = (id) => {
        return ($cart = $cart.filter((x) => {
            return x.id != id;
        }));
    };
    $: priceTotal = () => {
        let item = $cart.find((element) => element.id === game.id);
        return (item.price * item.quantity).toFixed(2);
    };

    const more = () => {
        game.quantity++;
        let tempCart = $cart;
        $cart = [];
        $cart = tempCart;
    };
    const less = () => {
        game.quantity > 1 ? game.quantity-- : null;
        let tempCart = $cart;
        $cart = [];
        $cart = tempCart;
    };
    console.log(game);
</script>

<div id="game-{game.id}" class="cart-item">
    <Item {game} {more} {less} />
    <div class="item-price-total">{priceTotal()}€</div>
    <button
        class="delete"
        on:click={() => {
            removeItem(game.id);
        }}
    />
</div>

<style>
    .cart-item {
        position: relative;
        background-color: #f5f5f5;
        padding: 12px;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
    }
    .cart-item .delete {
        position: absolute;
        border: none;
        top: 12px;
        right: 12px;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        border-radius: 50%;
        transform: rotate(45deg);
        background-color: red;
        color: #f5f5f5;
    }
    .cart-item .delete::before {
        content: "+";
        font-weight: 500;
        font-size: 16px;
        width: 16px;
        height: 16px;
        line-height: 16px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .cart-item :global(.item-infos) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 90%;
    }
    .item-price-total {
        text-align: right;
        font-weight: 700;
        padding: 4px 0;
    }
</style>
