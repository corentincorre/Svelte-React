<script>
    import Cart from "./lib/Cart.svelte";
    import games from "./data/games.json";
    import HomeItem from "./lib/HomeItem.svelte";
    import CartItem from "./lib/CartItem.svelte";
    import { cart } from "./data/stores";

    let hideCart = 1;
    $: price = updatePrice($cart);
    $: updatePrice = (cart) => {
        let price = 0;
        cart.forEach((element) => {
            price = Number(
                (price + element.price * element.quantity).toFixed(2)
            );
        });
        return price;
    };
    function checkout() {
        hideCart = 1;
        $cart = [];
        return console.log("Vous avez payé");
    }
</script>

<header>
    <a href="/" id="site-logo" on:click|preventDefault={() => (hideCart = 1)} />
    <Cart bind:hideCart {price} />
</header>
<main class:hide={hideCart === 0}>
    <h1>Les jeux du moment</h1>
    <div class="items-list">
        {#each games as game}
            <HomeItem {game} />
        {/each}
    </div>
</main>
<div class="cart" class:hide={hideCart === 1}>
    <a href="/" on:click|preventDefault={(e) => (hideCart = 1)} class="back">
        Retour à la boutique
    </a>
    <div class="items-list">
        <div class="labels">
            <p>Quantité</p>
            <p>Prix unitaire</p>
            <p>Prix total</p>
        </div>
        {#each $cart as game}
            <CartItem {game} />
        {/each}
    </div>
    <div class="totals">
        <p class="total">Total : {price}€</p>
        <button
            class="checkout-btn"
            on:click={() => {
                checkout();
            }}
        >
            Payer
        </button>
    </div>
</div>

<style>
    header {
        height: 80px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 80px;
    }
    main {
        padding: 24px 80px;
    }
    #site-logo {
        display: block;
        height: 64px;
        width: 200px;
        background: center / contain no-repeat
            url("https://www.micromania.fr/on/demandware.static/Sites-Micromania-Site/-/default/dw301a4b0c/images/logo-micromania.svg");
    }
    main .items-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }
    .cart {
        padding: 24px 80px;
    }
    .cart .items-list {
        display: grid;
        gap: 24px;
    }
    .hide {
        display: none;
    }
    a.back {
        color: black;
        display: inline-block;
        margin-bottom: 24px;
    }
    a.back:hover {
        text-decoration: none;
    }
    .totals {
        text-align: right;
    }
    .total {
        font-weight: 700;
        font-size: 24px;
        position: relative;
    }
    .total::after {
        content: "";
        background-color: black;
        position: absolute;
        height: 2px;
        width: 120px;
        bottom: -8px;
        right: 0;
    }
    .checkout-btn {
        background-color: #222;
        color: #f5f5f5;
        padding: 8px 24px;
    }
    .labels {
        display: flex;
        gap: 64px;
        justify-content: flex-end;
        margin-right: 24px;
    }
</style>
