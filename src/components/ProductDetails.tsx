import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { chairImage, tableImage, sofaImage } from "../assets/images";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  details: {
    materials: string;
    dimensions: string;
    care: string;
  };
}

const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Chair",
    description:
      "A timeless piece that combines comfort with elegant simplicity. Perfect for any modern living space.",
    image: chairImage,
    price: "$299",
    details: {
      materials: "Solid oak wood, premium fabric",
      dimensions: "H: 90cm, W: 60cm, D: 60cm",
      care: "Wipe with a damp cloth. Avoid direct sunlight.",
    },
  },
  {
    id: "2",
    name: "Modern Table",
    description:
      "Clean lines and natural materials create a striking centerpiece for your dining area.",
    image: tableImage,
    price: "$599",
    details: {
      materials: "Solid walnut wood, tempered glass",
      dimensions: "H: 75cm, W: 120cm, D: 80cm",
      care: "Clean with a soft cloth. Use coasters for hot items.",
    },
  },
  {
    id: "3",
    name: "Lounge Sofa",
    description:
      "Experience ultimate comfort with this contemporary sofa that blends style with ergonomic design.",
    image: sofaImage,
    price: "$1,299",
    details: {
      materials: "Solid wood frame, premium leather",
      dimensions: "H: 85cm, W: 220cm, D: 90cm",
      care: "Vacuum regularly. Spot clean with leather cleaner.",
    },
  },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <motion.div
        className="product-not-found"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Product not found</h2>
      </motion.div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <motion.div
      className="product-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-details-container">
        <motion.div
          className="product-image-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </motion.div>

        <motion.div
          className="product-info-section"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>

          <div className="product-details-grid">
            <div className="detail-item">
              <h3>Materials</h3>
              <p>{product.details.materials}</p>
            </div>
            <div className="detail-item">
              <h3>Dimensions</h3>
              <p>{product.details.dimensions}</p>
            </div>
            <div className="detail-item">
              <h3>Care Instructions</h3>
              <p>{product.details.care}</p>
            </div>
          </div>

          <motion.button
            className="add-to-cart-button"
            onClick={handleAddToCart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
