import { useState } from 'react';
import games from "./data/games.json";
import Cart from './lib/Cart';
import HomeItem from './lib/HomeItem';
import CartItem from './lib/CartItem';

function App() {
  const [cart, setCart] = useState([]);
  const [hideCart, setHideCart] = useState(1);

  function getPrice() {
    let price = 0;
    cart.forEach((element) => {
      price = Number(
        (price + element.price * element.quantity).toFixed(2)
      );
    });
    return price;
  }
  function getCount() {
    let count = 0;
    cart.forEach((element) => {
      count += element.quantity;
    });
    return count;
  }

  function checkout() {
    setHideCart(1);
    setCart([]);
    return console.log("Vous avez payé");
  }
  function addToCart(game, quantity) {
    let res = game;
    res.quantity = quantity
    setCart([...cart, res]);
  }
  function removeFromCart(game) {
    let res = cart.filter((x) => {
      return x.id != game.id;
    })
    setCart(res);
  }
  function showCart() {
    return setHideCart(0)
  }

  return (
    <>
      <header>
        <a href="/" id="site-logo" onClick={() => setHideCart(1)} />
        <Cart price={getPrice()} count={getCount()} showCart={showCart}></Cart>
      </header>
      <main className={hideCart ? '' : 'hide'}>
        <h1>Les jeux du moment</h1>
        <div className="items-list">
          {games.map((game) => (
            <HomeItem key={game.id} game={game} addToCart={addToCart} />
          ))}
        </div>
      </main>
      <div className={"cart" + (hideCart ? ' hide' : '')}>
        <a href="/" className="back" onClick={() => setHideCart(1)}>
          Retour à la boutique
        </a>
        <div class="labels">
          <p>Quantité</p>
          <p>Prix unitaire</p>
          <p>Prix total</p>
        </div>
        <div className="items-list">
          {cart.map((game) => (
            <CartItem key={game.id} game={game} removeFromCart={removeFromCart} />
          ))}
        </div>
        <div className="totals">
          <p className="total">Total : {getPrice()}€</p>
          <button className="checkout-btn" onClick={checkout}>
            Payer
          </button>
        </div>
      </div>
    </>
  )
}

export default App
