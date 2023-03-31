<script>
    export let quantity = 1;
    export let more = () => quantity++;
    export let less = () => (quantity > 1 ? quantity-- : null);
</script>

<form action="" class="quantity-form" on:submit={(e) => e.preventDefault()}>
    <button on:click={() => more()}>+</button>
    <input type="number" name="" id="" bind:value={quantity} />
    <button on:click={() => less()}>-</button>
</form>

<style>
    .quantity-form {
        display: flex;
        gap: 4px;
    }
    .quantity-form input {
        border: 1px solid #222;
        width: 48px;
        height: 24px;
        box-sizing: border-box;
    }
    .quantity-form button {
        background-color: #222;
        color: #f5f5f5;
        width: 24px;
        height: 24px;
    }
</style>
