export const productsList = [
    {
        id: 1,
        name: "Apple MacBook Pro",
        description: "Powerful laptop with M3 chip, ideal for professionals and creators.",
        price: 200000,
        imageUrl: "https://example.com/macbook-pro.jpg"
    },
    {
        id: 2,
        name: "Lenovo ThinkPad X1 Carbon",
        description: "Ultra-lightweight business laptop with a durable design and long battery life.",
        price: 150000,
        imageUrl: "https://example.com/lenovo-thinkpad.jpg"
    },
    {
        id: 3,
        name: "Dell XPS 15",
        description: "High-performance Windows laptop with a stunning OLED display.",
        price: 180000,
        imageUrl: "https://example.com/dell-xps.jpg"
    },
    {
        id: 4,
        name: "HP Spectre x360",
        description: "Convertible 2-in-1 laptop with a sleek design and excellent battery life.",
        price: 140000,
        imageUrl: "https://example.com/hp-spectre.jpg"
    },
    {
        id: 5,
        name: "Asus ROG Zephyrus G14",
        description: "Gaming laptop with a high refresh rate display and powerful GPU.",
        price: 160000,
        imageUrl: "https://example.com/asus-rog.jpg"
    },
    {
        id: 6,
        name: "Microsoft Surface Laptop 5",
        description: "Lightweight laptop with a touch screen and premium build quality.",
        price: 130000,
        imageUrl: "https://example.com/surface-laptop.jpg"
    },
    {
        id: 7,
        name: "Razer Blade 15",
        description: "Sleek gaming laptop with RTX graphics and a 240Hz refresh rate display.",
        price: 190000,
        imageUrl: "https://example.com/razer-blade.jpg"
    },
    {
        id: 8,
        name: "Acer Predator Helios 300",
        description: "Affordable gaming laptop with high performance and cooling technology.",
        price: 135000,
        imageUrl: "https://example.com/acer-predator.jpg"
    },
    {
        id: 9,
        name: "Samsung Galaxy Book 3",
        description: "Ultra-thin laptop with a stunning AMOLED display and powerful specs.",
        price: 125000,
        imageUrl: "https://example.com/samsung-galaxy-book.jpg"
    },
    {
        id: 10,
        name: "LG Gram 17",
        description: "Extremely lightweight 17-inch laptop with a long-lasting battery.",
        price: 145000,
        imageUrl: "https://example.com/lg-gram.jpg"
    }
];


export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
}
