export default function QuantityCounter(quantity) {
    const more = () => {
        return quantity.setQuantity(quantity => quantity + 1)
    }
    const less = () => {
        return quantity > 1 ? setQuantity(quantity => quantity - 1) : false
    }


    return (
        <form action="" className="quantity-form" onSubmit={(e) => e.preventDefault()}>
            <button onClick={more}>+</button>
            <input type="number" name="" id="" value={quantity.quantity} onChange={(e) => quantity.setQuantity(e.target.value)} />
            <button onClick={less}>-</button>
        </form>
    )
}