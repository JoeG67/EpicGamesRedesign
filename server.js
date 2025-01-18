import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 3000;

// Define the data
const items = [
  {
    name: "Game 1",
    image: "",
  },
  {
    name: "Game 2",
    image: "",
  },
  {
    name: "Game 3",
    image: "",
  },
];

const products = [
  {
    name: "Game 1",
    image: "game-controller.jpg",
    price: 29.99,
    inventoryStatus: "IN STOCK",
  },
  {
    name: "Game 2",
    image: "headphones.jpg",
    price: 59.99,
    inventoryStatus: "LOW STOCK",
  },
  {
    name: "Game 3",
    image: "tablet.jpg",
    price: 199.99,
    inventoryStatus: "OUT OF STOCK",
  },
  {
    name: "Game 4",
    image: "laptop.jpg",
    price: 899.99,
    inventoryStatus: "IN STOCK",
  },
  {
    name: "Game 5",
    image: "camera.jpg",
    price: 499.99,
    inventoryStatus: "IN STOCK",
  },
];

// Enable CORS and parse JSON request bodies
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Route to get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Route to get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
