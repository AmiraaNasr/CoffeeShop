import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

function HeroCarousel() {
  const slides = [
    {
      id: 1,
      image: '/images/slide1.jpg',
      title: 'Your Favorite Coffee',
      description: 'Freshly brewed coffee made for your perfect moment.',
      buttonText: 'Order Now',
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      title: 'Start Your Morning Right ☕',
      description: 'Fresh coffee, delicious pastries and good vibes.',
      buttonText: 'Explore Menu',
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      title: 'Bring Brew & Bean Home',
      description: 'Discover our coffee beans, mugs and accessories.',
      buttonText: 'Visit Shop',
    },
  ];

  return (
    <Carousel className="hero-carousel" fade>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100 carousel-image"
            src={slide.image}
            alt={slide.title}
          />
          <Carousel.Caption className="carousel-caption-box">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <Button variant="warning" className="carousel-btn">
              {slide.buttonText}
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroCarousel;
