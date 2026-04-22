import React from 'react';

// Updated illustration path as per your request
import illustration from '../assets/contact-illustration.png';

const CONCERNS = ["Plans", "Facilities", "Membership", "Events Info", "Others"];

export default function ContactSection() {
  const sectionStyle = { fontFamily: "'Inter', sans-serif" };

  return (
    <section className="w-full bg-white py-16 px-12" style={sectionStyle}>
      
      {/* ── Heading block ── */}
      <div className="mb-8">
        <h2 className="text-[40px] font-bold text-black leading-tight tracking-tight">
          Assistance
        </h2>
        <p className="text-[14px] text-gray-500 mt-1">
          Get quick and easy support whenever you need.
        </p>
      </div>

      {/* ── Main light-blue card ── */}
      <div
        className="flex items-stretch rounded-[32px] overflow-hidden shadow-sm"
        style={{ 
          background: "#E1F0FF", // Lighter blue matching the screenshot
          width: "100%", 
          minHeight: "560px",
          border: "1px solid rgba(0,0,0,0.05)"
        }}
      >
        {/* ── LEFT: Illustration ── */}
        <div
          className="flex items-center justify-center shrink-0"
          style={{ width: "45%", paddingLeft: "40px" }}
        >
          {/* Using mix-blend-mode: multiply to remove white background from the illustration */}
          <img
            src={illustration}
            alt="Support illustration"
            className="w-full h-auto object-contain pointer-events-none"
            style={{ 
              maxWidth: "420px", 
              mixBlendMode: "multiply" // This removes the white background
            }}
          />
        </div>

        {/* ── RIGHT: Form ── */}
        <div
          className="flex flex-col justify-center flex-1"
          style={{ padding: "60px 80px 60px 20px" }}
        >
          {/* Form Heading */}
          <h3 className="text-[32px] font-bold text-black leading-tight mb-2">
            "Need Help? We're Here for You"
          </h3>
          <p className="text-gray-600 text-[15px] mb-8">
            We're just a message away. Let us assist you.
          </p>

          {/* Concern Section */}
          <div className="mb-6">
            <p className="text-black text-[15px] font-semibold mb-4">
              What is your concern related to?
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {CONCERNS.map((c) => (
                <label key={c} className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="concern"
                      value={c}
                      className="peer appearance-none w-5 h-5 rounded-full bg-white border-none cursor-pointer checked:bg-blue-600 transition-all"
                    />
                    <div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="text-gray-700 text-[14px] font-medium group-hover:text-black transition-colors">
                    {c}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Form Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white rounded-2xl text-gray-800 outline-none border-none placeholder:text-gray-400 px-6"
              style={{ height: "56px", fontSize: "15px" }}
            />

            <div className="flex gap-4">
              <input
                type="tel"
                placeholder="Enter your Mobile No."
                className="flex-1 bg-white rounded-2xl text-gray-800 outline-none border-none placeholder:text-gray-400 px-6"
                style={{ height: "56px", fontSize: "15px" }}
              />
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="flex-1 bg-white rounded-2xl text-gray-800 outline-none border-none placeholder:text-gray-400 px-6"
                style={{ height: "56px", fontSize: "15px" }}
              />
            </div>

            <textarea
              placeholder="Describe your concern & request here...."
              className="w-full bg-white rounded-2xl text-gray-800 outline-none border-none resize-none placeholder:text-gray-400 p-6"
              style={{ height: "140px", fontSize: "15px" }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end mt-8 gap-12">
            <button
              type="button"
              className="text-gray-600 text-[15px] font-semibold hover:text-black transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-black font-bold text-[15px] rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all active:scale-95"
              style={{ width: "120px", height: "54px" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}