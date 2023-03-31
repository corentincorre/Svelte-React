import QuantityCounter from "./QuantityCounter"
export default function Item({ game, quantity, setQuantity }) {
    const setQuant = (quantity) => {
        return setQuantity(quantity)
    }


    return (
        <div className="item-infos">
            <img src="src/assets/image.png" alt={game.title} />
            <div className="title-and-tags">
                <h2>{game.title}</h2>
                <div className="tags-list">
                    {game.tags.map((tag) => (
                        <div className="tag">{tag}</div>
                    ))}
                </div>
            </div>
            <QuantityCounter key={game.id} quantity={quantity} setQuantity={setQuant} />

            <div className="item-price">{game.price}€</div>
        </div>
    )
}