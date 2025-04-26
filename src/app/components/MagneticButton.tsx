import { useState, useRef, useEffect } from "react";

export default function MagneticButton({ children = "Magnetic Button" }) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const magneticDistance = 150; // Distance in pixels where the magnetic effect starts
    const magneticStrength = 0.4; // How strong the magnetic effect is (0-1)

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const buttonCenterX = rect.left + rect.width / 2;
            const buttonCenterY = rect.top + rect.height / 2;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate distance between cursor and button center
            const deltaX = mouseX - buttonCenterX;
            const deltaY = mouseY - buttonCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // If the cursor is within the magnetic distance
            if (distance < magneticDistance) {
                // Calculate movement (stronger when closer)
                const factor = 1 - Math.max(0, distance / magneticDistance);
                const moveX = deltaX * factor * magneticStrength;
                const moveY = deltaY * factor * magneticStrength;

                setPosition({ x: moveX, y: moveY });
            } else {
                // Reset position when cursor is far
                setPosition({ x: 0, y: 0 });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-64">
            <button
                ref={buttonRef}
                className={`
          bg-blue-600 hover:bg-blue-700 
          text-white font-medium py-3 px-6 
          rounded-lg shadow-md transition-all duration-200
          transform will-change-transform
        `}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            >
                {children}
            </button>
        </div>
    );
}
