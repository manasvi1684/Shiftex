import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, phone, service, message };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz3v1eLSTNzoKJbJi5Knp41YY4XSrxFp2eYTY34vu0E1Hu6rouKOROQstHTuaA2xnPv/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      alert("Your details have been submitted!");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="bg-black py-20 relative">
      <div className="max-w-4xl mx-auto text-center px-4 text-white">
        <h2 className="text-4xl font-light mb-8">
          Transform your material handling with intelligent solutions.
        </h2>
        <p className="text-white mb-12 text-lg">
          Connect with us today for expert guidance on safety, efficiency, and sustainability in your operations.
        </p>
        <button
          className="bg-purple-500 text-black px-12 py-4 text-lg hover:bg-gray-200 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          Get in Touch
        </button>

        {/* Contact Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="tel:+916205616918" className="text-white text-2xl hover:text-gray-400">
            <FiPhone />
          </a>
          <a href="mailto:sparshranjan46@gmail.com" className="text-white text-2xl hover:text-gray-400">
            <FiMail />
          </a>
        </div>
      </div>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your contact number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Select Service</label>
                <select
                  className="w-full p-2 border rounded"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Choose a Service</option>
                  <option value="Forklift Rentals">Forklift Rentals</option>
                  <option value="Fleet Management System">Fleet Management System</option>
                  <option value="Preventive Maintenance">Preventive Maintenance</option>
                  <option value="Operator Training">Operator Training</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
                Submit
              </button>
            </form>
            <p className="text-gray-600 mt-4 text-sm">
              Or contact us on WhatsApp: <span className="font-semibold">+91 6205616918</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;