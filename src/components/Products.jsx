import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const ProductCard = ({ image, title, description, idealFor }) => {
  return (
    <div className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 text-white p-6">
      {/* Product Image */}
      <div className="aspect-video overflow-hidden mb-4 rounded-md flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-scale-down group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <p className="text-gray-400 text-xs italic">Ideal for: {idealFor}</p>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      id: 1,
      image: assets.AiDetect,
      title: "AI-Powered Human Detection Camera",
      description:
        "Uses AI vision to detect human movement near forklifts. Sends real-time alerts to operators. Reduces risk of collisions and workplace injuries.",
      idealFor: "Warehouses, logistics hubs, factories",
    },
    {
      id: 2,
      image: assets.blog_services.blog_service_2,
      title: "Fleet Management System",
      description:
        "GPS tracking & route optimization for forklifts. Real-time diagnostics to reduce downtime. Data-driven insights to improve fleet performance.",
      idealFor: "Large warehouses, logistics companies, industrial fleets",
    },
    {
      id: 3,
      image: assets.lithiumion,
      title: "Lithium-Ion Battery Rental Kit",
      description:
        "Longer lifespan & fast charging compared to lead-acid batteries. Flexible rental plans to reduce upfront costs. Sustainable & maintenance-free solution.",
      idealFor: "Forklift operators looking for reliable, eco-friendly energy",
    },
  ];

  return (
    <div className="bg-black py-4 mt-4">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Products & Services Section */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light text-center mb-10">
          Products & Services
          <hr className="w-1/4 border-gray-500 my-4 mx-auto" />
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.slice(0, 2).map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              idealFor={product.idealFor}
            />
          ))}

          {/* Centered Product in Second Row */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <div className="max-w-[600px] sm:max-w-[650px] w-full min-h-[300px] sm:min-h-[530px]">
              <ProductCard
                key={products[2].id}
                image={products[2].image}
                title={products[2].title}
                description={products[2].description}
                idealFor={products[2].idealFor}
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light text-center mt-16 mb-10">
          Coming Soon
          <hr className="w-1/4 border-gray-500 my-4 mx-auto" />
        </h2>

        {/* Coming Soon Grid */}
        <div className="flex justify-center">
  <div className="max-w-[600px] sm:max-w-[650px] w-full min-h-auto">
    <ProductCard
      key={4}
      image={assets.crane_images.crane_img7}
      title="Forklift Rentals"
      description="Daily, weekly, or monthly rental options for maximum flexibility. Well-maintained, high-performance forklifts for uninterrupted operations. On-demand servicing and support included in all rental packages."
      idealFor="Warehouses, construction sites, manufacturing plants"
    />
  </div>
</div>


      </div>
    </div>
  );
};

export default Products;
