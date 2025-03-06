import React from "react";
import { assets } from "../assets/assets.js";
import TypingEffect from "../components/TypingEffect.jsx";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Center Image Container */}
        <div className="relative w-full aspect-video">
          <img
            src={assets.front_img}
            alt="Crane Operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div> {/* Optional overlay */}
        </div>

        {/* Welcome Text */}
        <div className="text-center max-w-5xl mx-auto py-16 md:py-20 px-4 sm:px-0">
          <TypingEffect
            text="WELCOME TO SHIFTIX INDIA"
            speed={150}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider mb-6 break-words"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Your trusted partner in intelligent material handling solutions. We bring cutting-edge AI, IoT, and sustainable energy to logistics, ensuring safety, efficiency, and cost-effectiveness.
          </p>
        </div>

        {/* Offerings Section */}
        

        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto py-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg mb-4">
            At Shiftix India, our mission is to revolutionize material handling and logistics by integrating cutting-edge AI, IoT, and sustainable energy solutions. We strive to:
          </p>
          <ul className="text-gray-300 text-lg space-y-2">
            <li>- Enhance workplace safety with smart AI-powered detection systems.</li>
            <li>- Optimize fleet performance through intelligent tracking and data analytics.</li>
            <li>- Promote sustainability with eco-friendly lithium-ion power solutions.</li>
            <li>- Empower businesses with reliable, cost-effective material handling equipment.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="text-center max-w-4xl mx-auto py-8">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Shiftix India?</h2>
          <ul className="text-gray-300 text-lg space-y-2">
            <li>- Innovative Technology - AI, IoT, and smart energy solutions for enhanced productivity.</li>
            <li>- Cost-Effective Solutions - Reduce operational costs with rentals and fleet optimization.</li>
            <li>- Sustainability Focus - Lithium-Ion Battery Rental Kits for eco-friendly material handling.</li>
            <li>- Reliable & Scalable Services - Scalable solutions for small to large industrial facilities.</li>
            <li>- Expert Support & Maintenance - Dedicated customer support and on-site assistance.</li>
          </ul>
        </div>

        {/* Industries We Serve */}
        
      </div>
    </div>
  );
};

export default Hero;
