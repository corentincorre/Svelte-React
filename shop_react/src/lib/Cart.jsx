export default function Cart({ price, count, showCart }) {


    return (
        <button className="cart-btn" onClick={() => showCart()}>
            <div className="total-price">{price}€</div>
            <div className="cart-icon">
                <div className="nb-items">{count}</div>
            </div>
        </button>
    );
}