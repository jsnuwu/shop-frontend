export type Product = {
  id: number;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:5000/products");
  return res.json();
}