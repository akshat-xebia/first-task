"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/constants/products-list";
import { useApplicationContext } from "@/context/application-context";
import Link from "next/link";

export default function Products() {
  const { products } = useApplicationContext();

  return (
    <div className="page">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={"/product/" + product.id}>
      <Card className="h-full">
        {/* <Image
        alt={product.name}
        width={1080}
        height={1080}
        src={product.imageUrl}
      /> */}

        <CardHeader>
          <div className="aspect-square bg-muted text-muted-foreground flex items-center justify-center">
            <p>{product.name}</p>
            {/* <p className="text-xs">Didn&apos;t add the image for simplicity.</p> */}
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
