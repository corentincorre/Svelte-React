export default function QuantityCounter(quantity, setQuantity) {
    const more = () => {
        if (typeof quantity === 'object') {
            return quantity.setQuantity(quantity => quantity + 1)
        }
        else {
            return setQuantity(quantity + 1)
        }

    }
    const less = () => {
        if (typeof quantity === 'object') {
            return quantity.quantity > 1 ? quantity.setQuantity(quantity => quantity - 1) : false
        }
        else {
            return quantity > 1 ? setQuantity(quantity - 1) : false
        }
    }
    const changeValue = (v) => {
        if (typeof quantity === 'object') {
            return quantity.setQuantity(v)
        }
        else {
            return setQuantity(v)
        }
    }


    return (
        <form action="" className="quantity-form" onSubmit={(e) => e.preventDefault()}>
            <button onClick={more}>+</button>
            <input type="number" name="" id="" value={quantity.quantity} onChange={(e) => changeValue(e.target.value)} />
            <button onClick={less}>-</button>
        </form>
    )
}