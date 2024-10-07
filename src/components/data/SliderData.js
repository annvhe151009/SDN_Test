import { products } from "./ProductsData";
export const categories = [
  {
    title: "Shirt",
    products: products.filter((product) => product.category === "shirt"),
  },
  {
    title: "Pant",
    products: products.filter((product) => product.category === "pant"),
  },
  {
    title: "Beanie",
    products: products.filter((product) => product.category === "beanie"),
  },
];

export const images = [
  {
    src: "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80",
  },
];
