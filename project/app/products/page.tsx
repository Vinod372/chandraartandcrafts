"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState("/products/bed1.jpg");
  const images = [
  "/products/bed1.jpg",
  "/products/bed2.jpg",
  "/products/bed3.jpg",
];
  return (
    <div className="min-h-screen bg-[#111] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          Our Premium Beds
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-[#1b1b1b] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={selectedImage}
              alt="Wooden Bed"
              width={700}
              height={500}
              className="w-full h-[500px] object-cover rounded-t-x|"
            />
           <div className="grid grid-cols-3 gap-3 mt-4">
  {images.map((img) => (
    <Image
      key={img}
      src={img}
      alt="Bed Image"
      width={300}
      height={200}
      onClick={() => setSelectedImage(img)}
      className={`rounded-lg object-cover cursor-pointer hover:scale-105 transition border-2 ${
        selectedImage === img ? "border-yellow-400" : "border-transparent"
      }`}
    />
  ))}
</div>
            <div className="p-6">

              <h2 className="text-3xl font-bold mb-6">
  Premium Sheesham Wood Storage Bed
</h2>
<p className="text-gray-300 mt-2 mb-6">
  Premium handcrafted Sheesham wood storage bed with spacious box storage, elegant walnut finish and long-lasting durability.
</p>

              <div className="space-y-3 text-lg">
  <div className="space-y-3 mt-5 text-lg">

  <p>✅ <strong>Material:</strong> 100% Solid Sheesham Wood</p>

  <p>✅ <strong>Finish:</strong> Premium Walnut Finish</p>

  <p>✅ <strong>Colour:</strong> Natural Brown</p>

  <p>✅ <strong>Storage:</strong> Spacious Box Storage</p>

  <p>✅ <strong>Sizes:</strong> King Size | Queen Size | Custom Size</p>

  <p>✅ <strong>Warranty:</strong> 5 Years</p>

  <p>✅ <strong>Assembly:</strong> Free Installation</p>

  <div className="mt-5">
  <p className="text-sm text-gray-400">Starting Price</p>
  <p className="text-4xl font-extrabold text-yellow-400">
    ₹32,999
    <span className="text-lg text-gray-300 ml-2">Onwards</span>
  </p>
</div>

</div>

<button className="mt-6 w-full bg-[#C89B3C] hover:bg-[#b8872d] text-black font-bold py-3 rounded-lg">
  Enquire on WhatsApp
</button>
</div>

              <button className="mt-6 bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold">
                Enquire Now
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}