"use client";
import { Product, productsList } from "@/constants/products-list";
import { useApplicationContext } from "@/context/application-context";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

export default function AddNewProductForm() {
  const [loading, setLoading] = useState(false);
  const { setProducts } = useApplicationContext();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!productData.name || !productData.description || !productData.price) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const newProduct: Product = {
      id: productsList.length + 1,
      name: productData.name,
      description: productData.description,
      price: parseFloat(productData.price),
      imageUrl: "",
    };

    toast.loading("Adding Product", { id: "add-product" });

    setTimeout(() => {
      setProducts((prev) => [...prev, newProduct]);
      setLoading(false);
      setProductData({ name: "", description: "", price: "", imageUrl: "" });
      toast.success("Product Added", { id: "add-product" });
    }, 2000);
  };

  return (
    <form
      className="max-w-screen-md w-full border rounded-lg shadow-md px-5 py-6 flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <div className="space-y-1">
        <Label>Product Name</Label>
        <Input
          name="name"
          value={productData.name}
          onChange={handleChange}
          placeholder="Apple iPhone 16e"
          required
        />
      </div>
      <div className="space-y-1">
        <Label>Product Description</Label>
        <Textarea
          name="description"
          value={productData.description}
          onChange={handleChange}
          placeholder="Enter product details..."
          required
        />
      </div>
      <div className="space-y-1">
        <Label>Product Price (INR)</Label>
        <Input
          name="price"
          type="number"
          value={productData.price}
          onChange={handleChange}
          placeholder="80000"
          required
          min={0}
        />
      </div>
      <Button disabled={loading} type="submit" className="w-full">
        {loading ? "Adding..." : "Add Product"}
      </Button>
    </form>
  );
}
