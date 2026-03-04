import { useEffect, useState } from "react";
import { getProducts } from "../api/shop";
import type { Product } from "../api/shop";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Produkte</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} – {p.price}€</li>
        ))}
      </ul>
    </div>
  );
}