import React, { useState } from 'react'
import { assets } from '../assets/assets.js'

const ServiceCard = ({ title, price, buttonText }) => {
  return (
    <div className="bg-neutral-900 rounded-lg p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-light mb-2 text-white">{title}</h3>
      <p className="text-2xl font-medium text-white">₹{price}</p>
      <button className="bg-purple-500 text-white px-4 py-2 mt-2 rounded hover:bg-purple-600 transition-colors">
        {buttonText}
      </button>
    </div>
  )
}

const Services_Home = () => {
  const [showAll, setShowAll] = useState(false)

  const initialServices = [
    {
      id: 1,
      title: "Forklift Rental",
      price: "200.00",
      buttonText: "Book Now"
    },
    {
      id: 2,
      title: "Industry Insights",
      price: "100.00",
      buttonText: "View Course"
    },
    {
      id: 3,
      title: "Forklift Purchase",
      price: "15,000.00",
      buttonText: "Book Now"
    }
  ]

  const additionalServices = [
    {
      id: 4,
      title: "Premium Forklift Rental",
      price: "2,500,000.00",
      buttonText: "Book Now"
    },
    {
      id: 5,
      title: "Monthly Forklift Rental",
      price: "800,000.00",
      buttonText: "Book Now"
    },
    {
      id: 6,
      title: "Daily Forklift Rental",
      price: "25,000.00",
      buttonText: "Book Now"
    }
  ]

  const displayedServices = showAll 
    ? [...initialServices, ...additionalServices]
    : initialServices

  return (
    <div className="bg-black py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-white text-6xl font-light text-center mb-16">
          Our Services
          <hr className="w-1/3 h-auto border-white my-4 mx-auto" />
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              price={service.price}
              buttonText={service.buttonText}
            />
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-white text-black px-8 py-3 text-lg hover:bg-gray-200 transition-colors"
            >
              Load More
            </button>
            <hr className="my-5 w-2/3 h-auto border-white my-4 mx-auto" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Services_Home