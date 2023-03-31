import Item from './Item'
export default function CartItem({ game, removeFromCart, cart }) {
    const priceTotal = () => {
        return (game.price * game.quantity).toFixed(2);
    }
    const setQuantity = (quantity) => {
        game.quantity = quantity
    }

    return (
        <div id="game-{game.id}" className="cart-item">
            <Item key={game.id} game={game} quantity={game.quantity} setQuantity={setQuantity} />
            <div className="item-price-total">{priceTotal()}€</div>
            <button
                className="delete"
                onClick={() => {
                    removeFromCart(game);
                }}
            />
        </div>
    );
}