"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product, productsList } from "@/constants/products-list";

interface ApplicationContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ApplicationContext = createContext<ApplicationContextType | null>(null);

export const ApplicationProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(productsList);

  return (
    <ApplicationContext.Provider value={{ products, setProducts }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error("Use this hook in a provider");
  }
  return context;
};
