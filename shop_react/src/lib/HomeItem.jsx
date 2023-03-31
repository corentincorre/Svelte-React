import Item from './Item'
export default function HomeItem({ game, addToCart }) {
    let quantity = 1

    return (
        <div id="game-{game.id}" className="home-item">
            <Item game={game} />
            <button
                className="add"
                onClick={() => {
                    addToCart(game, quantity);
                }}>Ajouter au panier</button>
        </div>
    );
}