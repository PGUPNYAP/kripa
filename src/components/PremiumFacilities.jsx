// components/PremiumFacilities.jsx

import acImg from "../assets/facilities/ac.png";
import wifiImg from "../assets/facilities/wifi1.png";
// import lockerImg from "../assets/facilities/lock1.jpg ";
import waterImg from "../assets/facilities/water1.png";
import lockerImg from "../assets/facilities/lockmain.jpg";

export default function PremiumFacilities() {
  // Applying Inter font-family to the whole section
  const sectionStyle = { fontFamily: "'Inter', sans-serif" };

  return (
    <section className="w-full bg-white pt-20 pb-16" style={sectionStyle}>
      
      {/* ── Heading block ── */}
      <div className="pl-[48px] mb-[25px]">
        <h2 
          className="font-bold text-black leading-tight mb-2 text-[40px] w-[554px]"
          style={{ height: "48px" }}
        >
          Exclusive Premium Facilities
        </h2>
        <p className="text-gray-500 text-sm w-[530px]">
          Focus on your goals, we'll take care of the comfort.
        </p>
      </div>

      {/* ── Cards row ── */}
      <div
        className="flex"
        style={{
          paddingLeft: "48px",
          paddingRight: "48px",
          gap: "78px",
        }}
      >
        {/* Card 1: AC */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="w-full rounded-[32px] overflow-hidden bg-gray-100 h-[220px]">
            <img
              src={acImg}
              alt="Air Conditioner"
              className="w-full h-full object-cover transform scale-125"
            />
          </div>
          <div className="w-[238px]">
            <h3 className="font-bold text-black text-[18px] mt-[14px] mb-[6px]">
              Fully Air Conditioned
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed h-[54px]">
              Separate AC for each wings.
            </p>
          </div>
        </div>

        {/* Card 2: Wi-Fi */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="w-full rounded-[32px] overflow-hidden bg-gray-100 h-[220px]">
            <img
              src={wifiImg}
              alt="Wi-Fi"
              className="w-full h-full object-cover transform scale-125"
            />
          </div>
          <div className="w-[238px]">
            <h3 className="font-bold text-black text-[18px] mt-[14px] mb-[6px]">
              Wi-Fi
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed h-[54px]">
              Free High Speed Wi-Fi.
            </p>
          </div>
        </div>

        {/* Card 3: Lockers */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="w-full rounded-[32px] overflow-hidden bg-gray-100 h-[220px]">
            <img
              src={lockerImg}
              alt="Lockers"
              className="w-full h-full object-cover transform scale-125"
            />
          </div>
          <div className="w-[238px]">
            <h3 className="font-bold text-black text-[18px] mt-[14px] mb-[6px]">
              Lockers
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed h-[86px]">
              Lockers are available for keep your belongings safe.
            </p>
          </div>
        </div>

        {/* Card 4: RO Water */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="w-full rounded-[32px] overflow-hidden bg-gray-100 h-[220px]">
            <img
              src={waterImg}
              alt="RO Water"
              className="w-full h-full object-cover transform scale-125"
            />
          </div>
          <div className="w-[238px]">
            <h3 className="font-bold text-black text-[18px] mt-[14px] mb-[6px]">
              RO Water
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed h-[86px]">
              Hot, Cold & Normal water is available through water dispenser.
            </p>
          </div>
        </div>


      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-2 mt-10">
        <div className="w-3 h-3 rounded-full bg-blue-600" />
        <div className="w-3 h-3 rounded-full border border-gray-300 bg-white" />
        <div className="w-3 h-3 rounded-full border border-gray-300 bg-white" />
      </div>
    </section>
  );
}