import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { chairImage, tableImage, sofaImage } from "../assets/images";
import "./Products.css";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Chair",
    description:
      "A timeless piece that combines comfort with elegant simplicity.",
    image: chairImage,
    price: "$299",
  },
  {
    id: "2",
    name: "Modern Table",
    description:
      "Clean lines and natural materials create a striking centerpiece.",
    image: tableImage,
    price: "$599",
  },
  {
    id: "3",
    name: "Lounge Sofa",
    description: "Experience ultimate comfort with this contemporary sofa.",
    image: sofaImage,
    price: "$1,299",
  },
];

const Products: React.FC = () => {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Collection
        </motion.h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="product-image"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={product.image} alt={product.name} />
                <motion.div
                  className="product-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/product/${product.id}`} className="view-details">
                    View Details
                  </Link>
                </motion.div>
              </motion.div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="price">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
