import Item from './Item'
import { useState } from 'react';
export default function HomeItem({ game, addToCart }) {
    const [quantity, setQuantity] = useState(1);


    return (
        <div id="game-{game.id}" className="home-item">
            <Item key={game.id} game={game} quantity={quantity} setQuantity={setQuantity} />
            <button
                className="add"
                onClick={() => {
                    addToCart(game, quantity);
                }}>Ajouter au panier</button>
        </div>
    );
}