import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

function Products() {
  // Simple JavaScript array holding product details
  const products = [
    {
      id: 1,
      name: 'Cappuccino',
      price: '$4.00',
      description: 'Rich espresso with steamed milk and creamy foam.',
      image: '/images/cappuccino.jpg',
    },
    {
      id: 2,
      name: 'Iced Latte',
      price: '$5.00',
      description: 'Smooth espresso, cold milk and refreshing ice.',
      image: '/images/iced-latte.jpg',
    },
    {
      id: 3,
      name: 'Fresh Croissant',
      price: '$2.50',
      description: 'Freshly baked and perfectly buttery croissant.',
      image: '/images/croissant.jpg',
    },
    {
      id: 4,
      name: 'Coffee Beans',
      price: '$18.00',
      description: 'Premium roasted coffee beans for your perfect brew.',
      image: '/images/coffee-beans.jpg',
    },
  ];

  return (
    <section className="products-section py-5" id="menu">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Freshly brewed coffee and delicious artisanal treats
          </p>
        </div>

        {/* Responsive Product Grid */}
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={6} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Products;
