"use client";
import AddToCartButton from "@/components/ui/add-to-cart-button";
import { useApplicationContext } from "@/context/application-context";
import { redirect } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const id = Number(params.id);

  // Call the hook at the top level before any conditional returns
  const { products } = useApplicationContext();

  if (isNaN(id)) {
    redirect("/not-found");
    return null;
  }

  const productDetails = products.find((product) => product.id === id);

  if (!productDetails) {
    redirect("/not-found");
    return null;
  }

  return (
    <div className="page grid grid-cols-5 gap-8">
      <div className="col-span-2">
        <div className="w-full bg-muted text-muted-foreground rounded-lg h-96 flex items-center justify-center">
          No image to show for now
        </div>
      </div>
      <div className="col-span-3">
        <h1 className="font-extrabold text-3xl">{productDetails.name}</h1>
        <p className="text-sm text-muted-foreground pt-1">
          {productDetails.description}
        </p>
        <p className="text-lg font-medium mt-2">₹{productDetails.price}</p>
        <AddToCartButton productId={productDetails.id} />
      </div>
    </div>
  );
}
