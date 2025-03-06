import React from "react";

const AboutUs = () => {
  const caseStudies = [
    {
      title: "AI-Powered Safety in a Large Warehouse",
      result: "30% reduction in safety incidents within 3 months.",
    },
    {
      title: "Fleet Optimization for a Logistics Company",
      result: "15% fuel cost savings within 2 months.",
    },
    {
      title: "Lithium-Ion Battery Rental for a Manufacturing Unit",
      result: "50% reduction in battery maintenance costs.",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl mb-12 text-white">Case Studies: Real Impact, Real Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-white hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{caseStudy.title}</h3>
              <p className="text-gray-400">{caseStudy.result}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center max-w-4xl mx-auto py-8">
          <h2 className="text-3xl mb-4">Our Offerings</h2>
          <hr className="w-1/4 border-gray-500 my-4 mx-auto" />
          <ul className="text-gray-300 text-lg space-y-2">
            <li>AI-Powered Human Detection Camera - Enhance workplace safety with real-time alerts.</li>
            <li>Fleet Management System - Optimize operations with GPS tracking and smart analytics.</li>
            <li>Lithium-Ion Battery Rental Kit - Cost-effective and eco-friendly power solutions for forklifts.</li>
            <li>Forklift Sales & Rentals (Coming Soon!)</li>
          </ul>
        </div>
        <div className="text-center max-w-4xl mx-auto py-8">
          <h2 className="text-3xl font-semibold mb-4">Industries We Serve</h2>
          <ul className="text-gray-300 text-lg space-y-2">
            <li>- Warehousing & Logistics - Safety, tracking, and efficiency in distribution centers.</li>
            <li>- Manufacturing Plants - Reduce downtime and optimize material movement.</li>
            <li>- Retail & E-Commerce - Enhance fulfillment speed and operational efficiency.</li>
            <li>- Construction Sites - Secure handling of heavy materials.</li>
            <li>- Cold Storage & Food Industry - Reliable logistics for temperature-sensitive goods.</li>
          </ul>
        </div>

      <div className="max-w-6xl mx-auto text-center mt-20">
        <h2 className="text-4xl font-semibold mb-6 text-white">Blog & Insights</h2>
        <hr className="w-1/4 border-gray-500 my-4 mx-auto" />
        <ul className="text-lg text-white space-y-4">
          <li className="hover:underline cursor-pointer">How AI is Transforming Warehouse Safety</li>
          <li className="hover:underline cursor-pointer">The Future of Fleet Management: Why GPS & IoT Matter</li>
          <li className="hover:underline cursor-pointer">Lithium-Ion vs. Lead-Acid Batteries: Which is Right for Your Fleet?</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
