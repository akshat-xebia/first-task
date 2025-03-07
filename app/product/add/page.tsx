import AddNewProductForm from "@/components/ui/add-product-form";
import React from "react";

export default function AddProductPage() {
  return (
    <div className="page flex flex-col gap-6 items-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-balance">
        Add New Product
      </h1>
      <AddNewProductForm />
    </div>
  );
}
