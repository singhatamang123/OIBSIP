import React, { useState, useEffect, useRef } from "react";

const RotatingImage = ({ src, alt, className, fetchPriority }) => {
  const [rotation, setRotation] = useState(0);
  const rotateImageRef = useRef(null);

  useEffect(() => {
    const rotateImage = rotateImageRef.current;

    const handleMouseMove = (event) => {
      const rect = rotateImage.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const newAngle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);

      setRotation(newAngle);
    };

    const handleMouseOut = () => {
      setRotation(0);
    };

    rotateImage.addEventListener("mousemove", handleMouseMove);
    rotateImage.addEventListener("mouseout", handleMouseOut);

    return () => {
      rotateImage.removeEventListener("mousemove", handleMouseMove);
      rotateImage.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const style = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div className="container">
      <div className="left-side">
        <p>
          {" "}
          "Our pizzas aren’t just food, they’re experiences. So why wait? Start
          your flavor journey today and remember, every pizza is a personal
          pizza if you believe in yourself!”
        </p>
        <a href="/order" className="order-button">
          Get Your Pizza Now!
        </a>
      </div>
      <div className="right-side">
        <img
          ref={rotateImageRef}
          src={src}
          alt={alt}
          className={`${className} rotate-image`}
          style={style}
          data-fetchpriority={fetchPriority}
          loading="lazy"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

export default RotatingImage;
