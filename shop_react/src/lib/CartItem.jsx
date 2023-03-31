import Item from './Item'
export default function CartItem({ game, removeFromCart }) {
    const priceTotal = () => {
        return (game.price * game.quantity).toFixed(2);
    }

    return (
        <div id="game-{game.id}" className="cart-item">
            <Item game={game} />
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