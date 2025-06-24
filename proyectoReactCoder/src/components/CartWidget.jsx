import './index.css'; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="shopping cart" className="cart-icon">🛒</span>
      <span className="cart-count">0</span> {}
    </div>
  );
};

export default CartWidget;