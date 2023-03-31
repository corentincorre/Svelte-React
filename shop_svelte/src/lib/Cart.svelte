<script>
    import { cart } from "../data/stores";
    export let hideCart = 1;
    export let price = 0;
    $: count = updateCount($cart);

    function updateCount(cart) {
        let count = 0;
        cart.forEach((element) => {
            count += element.quantity;
        });
        return count;
    }
</script>

<button class="cart-btn" on:click={() => (hideCart = 0)}>
    <div class="total-price">{price}€</div>
    <div class="cart-icon">
        <div class="nb-items">{count}</div>
    </div>
</button>

<style>
    .cart-btn {
        display: flex;
        gap: 12px;
        align-items: center;
        background-color: #f5f5f5;
        padding: 8px 16px;
        transition: all 0.2s;
        font-family: "Montserrat";
        border: none;
        font-size: 16px;
    }
    .cart-btn:hover {
        filter: brightness(95%);
    }
    .cart-icon {
        position: relative;
        width: 32px;
        height: 32px;
        background: center / contain no-repeat url("../assets/cart.svg");
    }
    .nb-items {
        position: absolute;
        top: -8px;
        right: -12px;
        text-align: center;
        background-color: #222;
        border: 4px solid #f5f5f5;
        color: white;
        padding: 2px 4px;
        min-width: 8px;
        border-radius: 12px;
        font-size: 12px;
        line-height: 12px;
    }
</style>
