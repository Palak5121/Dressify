import React from 'react';
import './App.css';
import product1 from '../src/assets/product1.jpg';
import skincare from '../src/assets/skincare.jpg';
import bag from '../src/assets/bag.jpg';
import gift from '../src/assets/gift.jpg';
import shoe from '../src/assets/shoe.jpg';
import NavbarHeader from './auth/Navbar';
import perfume from '../src/assets/perfume_1.jpg';
import product4 from '../src/assets/product4.jpg';
import MySlider from './comman/slider';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="landing-page">
      <div className="header container-fluid">
        <NavbarHeader />
      </div>
      <section className="banner">
        <div className="banner">
          <h2 className="banner_text">
            India's Biggest <br></br>
            Winter sale
            <span className="banner_text">50-90%</span>
            <span>Off</span>
            <h2 className="banner_explore">+Explore</h2>
          </h2>
        </div>
      </section>

      <section className="products">
        <Link to="/product" className="product-link">
          <div className="product">
            <img src={product4} alt="Product 1" />
            <h2>Fashion & Beauty</h2>
            <p>Explore our stylish collection.</p>
          </div>
        </Link>
        <div className="product">
          <img src={gift} alt="Product 1" />
          <h2>Milan</h2>
          <p>Explore our stylish collection.</p>
        </div>

        <div className="product">
          <img src={skincare} alt="Product 1" />
          <h2>Chanel</h2>
          <p>Explore our stylish collection.</p>
        </div>
        <div className="product">
          <img src={bag} alt="Product 1" />
          <h2>Milan</h2>
          <p>Explore our stylish collection.</p>
        </div>
        <div className="product">
          <img src={shoe} alt="Product 1" />
          <h2>Coco</h2>
          <p>Explore our stylish collection.</p>
        </div>
      </section>
      <section className="products">
        <div className="product">
          <img src={perfume} alt="Product 1" />
          <h2>Fashion & Beauty</h2>
          <p>Explore our stylish collection.</p>
        </div>
        <div className="product">
          <img src={gift} alt="Product 1" />
          <h2>Milan</h2>
          <p>Explore our stylish collection.</p>
        </div>

        <div className="product">
          <img src={skincare} alt="Product 1" />
          <h2>Chanel</h2>
          <p>Explore our stylish collection.</p>
        </div>
        <div className="product">
          <img src={bag} alt="Product 1" />
          <h2>Milan</h2>
          <p>Explore our stylish collection.</p>
        </div>
        <div className="product">
          <img src={shoe} alt="Product 1" />
          <h2>Coco</h2>
          <p>Explore our stylish collection.</p>
        </div>
      </section>
      <div className="exploremore">
        <button className="explore-btn">Explore More</button>
      </div>
    </div>
  );
}
