export default function QuantityCounter(quantity) {
    return (
        <form action="" className="quantity-form" onSubmit={(e) => e.preventDefault()}>
            <button onClick={() => more()}>+</button>
            <input type="number" name="" id="" defaultValue={quantity} />
            <button onClick={() => less()}>-</button>
        </form>
    )
}