import './index.css'; 

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {/* productos */}
      <p>Pronto verás nuestros increíbles productos aquí.</p>
    </div>
  );
};

export default ItemListContainer;