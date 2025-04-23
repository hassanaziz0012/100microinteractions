import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

interface Product {
    name: string;
    price: number;
    imageUrl: string;
}

const SkeletonLoadingCard: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        // Simulate data loading with setTimeout
        const timer = setTimeout(() => {
            setProduct({
                name: "Air Max Supreme",
                price: 129.99,
                imageUrl: "https://i.imgur.com/PeYTjbG.jpeg", // Placeholder image
            });
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="m-20">
            <div className="w-64 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300">
                {/* Image section */}
                <div className="h-48 relative overflow-hidden">
                    {loading ? (
                        <div className="animate-pulse bg-gray-200 h-full w-full" />
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full w-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${product?.imageUrl})`,
                            }}
                        />
                    )}
                </div>

                {/* Product info section */}
                <div className="p-4">
                    {/* Product name */}
                    {loading ? (
                        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                    ) : (
                        <motion.h3
                            initial={{ opacity: 0, bottom: "-5px" }}
                            animate={{ opacity: 1, bottom: "0px" }}
                            className="font-bold text-lg relative"
                        >
                            {product?.name}
                        </motion.h3>
                    )}

                    {/* Price and add to cart */}
                    <div className="flex justify-between items-center mt-3">
                        {loading ? (
                            <>
                                <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
                                <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                            </>
                        ) : (
                            <>
                                <motion.span
                                    initial={{ opacity: 0, bottom: "-5px" }}
                                    animate={{ opacity: 1, bottom: "0px" }}
                                    className="font-bold text-lg"
                                >
                                    ${product?.price}
                                </motion.span>
                                <motion.button
                                    initial={{ opacity: 0, bottom: "-5px" }}
                                    animate={{ opacity: 1, bottom: "0px" }}
                                    className="h-8 w-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all"
                                >
                                    <ShoppingCart size={16} />
                                </motion.button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoadingCard;
