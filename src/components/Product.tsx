import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import config from "../config/index.json";

function useOnScreen(
  ref: MutableRefObject<HTMLDivElement | null>,
  rootMargin = "0px"
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef: any = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIntersecting(entry?.isIntersecting);
      },
      { rootMargin }
    );

    if (ref && ref.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

interface StackedCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const StackedCard = ({ children, index, className = "" }: StackedCardProps) => {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(rootRef, "-150px");

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: index * 0.1,
        },
      });
    }
  }, [onScreen, controls, index]);

  const rowIndex = index % 2;
  const stackOffset = rowIndex * 10;
  const initialX = rowIndex === 0 ? -30 - stackOffset : 30 + stackOffset;
  const initialY = 40;
  const initialRotate = rowIndex === 0 ? -3 : 3;

  return (
    <motion.div
      ref={rootRef}
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        rotate: initialRotate,
        scale: 0.9,
        zIndex: 5 - index,
      }}
      animate={controls}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="bg-white rounded-xl shadow-2xl relative overflow-hidden h-full"
        style={{
          boxShadow: `
            0 ${8 + rowIndex * 2}px ${20 + rowIndex * 3}px rgba(0, 0, 0, 0.12),
            0 ${4 + rowIndex}px ${8 + rowIndex}px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6)
          `,
          transform: `perspective(1000px) rotateY(
            ${rowIndex === 0 ? -1 : 1}deg
          ) translateZ(0)`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

const Product = () => {
  const { product } = config;
  const textColor = "#444f78ff"; // same color for lines and text

  return (
    <section className="bg-background py-6" id="product">
      <div className="container max-w-5xl mx-auto m-4 px-4">
        {/* Title with colored lines */}
        <div className="max-w-4xl mx-auto my-8 px-4">
          <h1 className="flex items-center text-5xl font-bold leading-tight text-center">
            <span
              className="flex-grow h-3 mr-6"
              style={{ backgroundColor: textColor }}
            />
            <span className="whitespace-nowrap" style={{ color: textColor }}>
              {product.title}
            </span>
            <span
              className="flex-grow h-3 ml-6"
              style={{ backgroundColor: textColor }}
            />
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          {product.items.map((item, index) => (
            <StackedCard key={item.title} index={index}>
              <div className="flex flex-col p-3 h-full">
                <div className="w-full mb-3 relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={192}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl text-gray-800 font-bold leading-tight mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </StackedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
