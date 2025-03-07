import Link from "next/link";
import React from "react";

const NAV_ITEMS = [
  {
    id: 1,
    title: "Products",
    href: "/products",
  },
  {
    id: 2,
    title: "Add Product",
    href: "/product/add",
  },
];

export default function Navbar() {
  return (
    <nav className="h-16 border-b shadow-sm w-full">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-5">
        <Link href={"/"} className="font-extrabold">
          First App
        </Link>
        <div className="flex gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="font-medium hover:underline underline-offset-4 text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
