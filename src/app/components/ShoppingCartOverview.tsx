import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";

// Sample cart data
const initialCartItems: Product[] = [];

// Sample product data
const product = {
    id: 1,
    title: "Premium Cotton T-Shirt",
    description:
        "Our signature cotton t-shirt features a relaxed fit and premium fabric that gets softer with every wash. Perfect for everyday wear, this versatile piece easily transitions from casual daytime to evening looks.",
    price: 29.99,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
};

type Product = {
    id: number;
    title: string;
    price: number;
    size: string;
    quantity: number;
}

// Product images - using placeholders
const mainImage = "https://i.imgur.com/mcxNzRG.jpeg";
const additionalImages = [
    "https://i.imgur.com/mcxNzRG.jpeg",
    "https://i.imgur.com/3Cs709b.jpeg",
    "https://i.imgur.com/wS4Taye.jpeg",
    "https://i.imgur.com/UmL8fxO.jpeg",
    "https://i.imgur.com/WXGL6xj.jpeg",
];

export default function ShoppingCartOverview() {
    const [cartItems, setCartItems] = useState<Product[]>(initialCartItems);
    const [selectedImage, setSelectedImage] = useState(mainImage);
    const [showCartDropdown, setShowCartDropdown] = useState(false);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [isInWishlist, setIsInWishlist] = useState(false);

    const isProductInCart = cartItems.some((item) => item.id === product.id);

    const addToCart = () => {
        if (!selectedSize) {
            alert("Please select a size");
            return;
        }

        const existingItemIndex = cartItems.findIndex(
            (item) => item.id === product.id && item.size === selectedSize
        );

        if (existingItemIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingItemIndex].quantity += 1;
            setCartItems(updatedCart);
        } else {
            setCartItems([
                ...cartItems,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    size: selectedSize,
                    quantity: 1,
                },
            ]);
        }
    };

    const removeFromCart = () => {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
    };

    const toggleWishlist = () => {
        setIsInWishlist(!isInWishlist);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Brand name */}
                        <div className="flex-shrink-0">
                            <span className="font-bold text-xl">STYLISH</span>
                        </div>

                        {/* Navigation links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-black"
                                >
                                    Men
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-black"
                                >
                                    Women
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-black"
                                >
                                    Kids
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-black"
                                >
                                    Essentials
                                </a>
                            </div>
                        </div>

                        {/* Shopping cart */}
                        <div className="relative">
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 relative"
                                onMouseEnter={() => setShowCartDropdown(true)}
                                onMouseLeave={() => setShowCartDropdown(false)}
                            >
                                <ShoppingCart size={24} />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </button>

                            {/* Cart dropdown */}
                            {showCartDropdown && (
                                <div
                                    className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-10"
                                    onMouseEnter={() =>
                                        setShowCartDropdown(true)
                                    }
                                    onMouseLeave={() =>
                                        setShowCartDropdown(false)
                                    }
                                >
                                    <div className="px-4 py-2 border-b border-gray-200">
                                        <h3 className="text-sm font-medium">
                                            Your Cart ({getTotalItems()} items)
                                        </h3>
                                    </div>

                                    {cartItems.length > 0 ? (
                                        <>
                                            <div className="max-h-60 overflow-auto">
                                                {cartItems.map(
                                                    (item, index) => (
                                                        <div
                                                            key={index}
                                                            className="px-4 py-3 border-b border-gray-100 flex justify-between"
                                                        >
                                                            <div>
                                                                <p className="text-sm font-medium">
                                                                    {item.title}
                                                                </p>
                                                                <p className="text-xs text-gray-500">
                                                                    Size:{" "}
                                                                    {item.size}
                                                                </p>
                                                                <p className="text-xs text-gray-500">
                                                                    Qty:{" "}
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </p>
                                                            </div>
                                                            <p className="text-sm font-medium">
                                                                $
                                                                {(
                                                                    item.price *
                                                                    item.quantity
                                                                ).toFixed(2)}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                                                <span className="text-sm font-medium">
                                                    Total
                                                </span>
                                                <span className="text-sm font-bold">
                                                    $
                                                    {getTotalPrice().toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="px-4 py-2">
                                                <button className="w-full bg-black text-white py-2 text-sm rounded-md hover:bg-gray-800">
                                                    Checkout
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="px-4 py-8 text-center text-gray-500">
                                            Your cart is empty
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Product Display */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Column 1: Product Images */}
                    <div className="md:w-1/2">
                        {/* Main Image */}
                        <div className="mb-4">
                            <img
                                src={selectedImage}
                                alt="Product"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-5 gap-2">
                            {additionalImages.map((img, index) => (
                                <button
                                    key={index}
                                    className={`border-2 rounded ${
                                        selectedImage === img
                                            ? "border-black"
                                            : "border-gray-200"
                                    }`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`Product view ${index + 1}`}
                                        className="w-full h-auto"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Product Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-bold mb-2">
                            {product.title}
                        </h1>
                        <p className="text-xl font-medium mb-4">
                            ${product.price.toFixed(2)}
                        </p>
                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>

                        {/* Size Selection */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-3">
                                Select Size
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {product.availableSizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`h-10 w-10 rounded-md flex items-center justify-center border ${
                                            selectedSize === size
                                                ? "border-black bg-black text-white"
                                                : "border-gray-300"
                                        }`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button
                                className={`p-3 border rounded-md flex items-center justify-center ${
                                    isInWishlist
                                        ? "bg-red-50 border-red-200"
                                        : "border-gray-300"
                                }`}
                                onClick={toggleWishlist}
                            >
                                <Heart
                                    size={20}
                                    fill={isInWishlist ? "red" : "none"}
                                    color={
                                        isInWishlist ? "red" : "currentColor"
                                    }
                                />
                            </button>

                            <button
                                className={`flex-1 py-3 px-6 rounded-md font-medium ${
                                    isProductInCart
                                        ? "bg-red-500 hover:bg-red-600 text-white"
                                        : "bg-black hover:bg-gray-800 text-white"
                                }`}
                                onClick={
                                    isProductInCart ? removeFromCart : addToCart
                                }
                            >
                                {isProductInCart
                                    ? "Remove from Cart"
                                    : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
