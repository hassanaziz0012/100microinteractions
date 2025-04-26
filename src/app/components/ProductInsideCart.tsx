import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react";

export default function ProductInsideCart() {
    const [mainImage, setMainImage] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Sample product data
    const product = {
        title: "Premium Wireless Headphones",
        description:
            "Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design for extended use. Connect via Bluetooth 5.0 for seamless streaming from your devices.",
        price: "$249.99",
        images: [
            "https://i.imgur.com/mcxNzRG.jpeg",
            "https://i.imgur.com/3Cs709b.jpeg",
            "https://i.imgur.com/wS4Taye.jpeg",
            "https://i.imgur.com/UmL8fxO.jpeg",
            "https://i.imgur.com/WXGL6xj.jpeg",
        ],
    };

    const handleAddToCart = () => {
        setAnimating(true);

        // Show toast after animation completes
        setTimeout(() => {
            setShowToast(true);
            setAnimating(false);

            // Hide toast after 3 seconds
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }, 1000);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1: Images */}
                <div className="space-y-4">
                    {/* Main image */}
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={product.images[mainImage]}
                            alt={`${product.title} - view ${mainImage + 1}`}
                            className="w-full h-96 object-contain"
                        />
                    </div>

                    {/* Thumbnail images */}
                    <div className="grid grid-cols-5 gap-2">
                        {product.images.map((image, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(idx)}
                                className={`bg-gray-100 border-2 rounded p-1 transition-all ${
                                    mainImage === idx
                                        ? "border-blue-500"
                                        : "border-gray-200 hover:border-gray-300"
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="w-full h-16 object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Column 2: Product details */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-2xl font-semibold text-blue-600">
                        {product.price}
                    </p>
                    <p className="text-gray-700">{product.description}</p>

                    {/* Add to cart button */}
                    <div className="relative">
                        <button
                            onClick={handleAddToCart}
                            disabled={animating}
                            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all w-full md:w-auto disabled:opacity-70"
                        >
                            <ShoppingCart className="mr-2" size={20} />
                            Add to cart
                        </button>

                        {/* Animated product image */}
                        {animating && (
                            <div className="absolute top-0 transform -translate-y-12 left-[calc(50%-4rem)] md:left-2 animate-cart-item">
                                <img
                                    src={product.images[mainImage]}
                                    alt="Product being added to cart"
                                    className="w-12 h-12 object-contain rounded"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Toast notification */}
            {showToast && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center animate-fade-in">
                    <span>Added to cart</span>
                    <button
                        onClick={() => setShowToast(false)}
                        className="ml-2 text-white hover:text-gray-200"
                    >
                        <X size={18} />
                    </button>
                </div>
            )}

            {/* CSS Animations */}
            <style jsx global>{`
                @keyframes cartAnimation {
                    0% {
                        transform: translateY(-3rem);
                        opacity: 1;
                        scale: 1;
                    }
                    100% {
                        transform: translateY(0.5rem);
                        opacity: 0;
                        scale: 0.5;
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-cart-item {
                    animation: cartAnimation 1s forwards;
                }

                .animate-fade-in {
                    animation: fadeIn 0.3s forwards;
                }
            `}</style>
        </div>
    );
}
