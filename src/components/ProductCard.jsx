import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card className="product-card h-100 shadow-sm">
      {/* Product Image */}
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-card-img"
      />

      <Card.Body className="d-flex flex-column">
        {/* Product Name */}
        <Card.Title className="product-title">{product.name}</Card.Title>

        {/* Product Description */}
        <Card.Text className="product-description">
          {product.description}
        </Card.Text>

        {/* Price and Add to Cart Button */}
        <div className="mt-auto d-flex justify-content-between align-items-center pt-3">
          <span className="product-price">{product.price}</span>
          <Button variant="primary" className="add-to-cart-btn">
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
