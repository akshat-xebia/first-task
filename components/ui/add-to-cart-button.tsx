"use client";
import { Button } from "./button";
import { toast } from "sonner";
export default function AddToCartButton({ productId }: { productId: number }) {
  const handleAddToCart = () => {
    console.log("Added product to cart. Product ID: " + productId);
    toast("Product added to cart");
  };

  return (
    <Button className="mt-5" onClick={handleAddToCart}>
      Add to cart
    </Button>
  );
}
