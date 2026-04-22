import React from 'react';

// Import images...
import abhinavImg from '../assets/abhinav1.jpg';
import pinkyImg from '../assets/pinky.jpg';
import sitaImg from '../assets/sita.jpg';

const TestimonialCard = ({ name, role, text, image, stars = 5 }) => {
  return (
    /* EXACT DIMENSIONS: 380px width, 420px height */
    <div className="relative flex flex-col bg-white rounded-[32px] shadow-lg overflow-hidden w-[380px] h-[420px] border border-gray-100 mx-auto transition-transform hover:scale-[1.02] duration-300">
      
      {/* Top Section - Text */}
      <div className="p-8 pb-4 flex-grow">
        <p className="text-normal text-[15px] leading-relaxed font-family-inter">
          {text}
        </p>
      </div>

      {/* Avatar - Positioned to overlap the wave */}
      <div className="relative z-20 px-8 flex">
        <div className="w-[120px] h-[120px] rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
            }}
          />
        </div>
      </div>

      {/* Bottom Section - Identity & Wave */}
      {/* Set a fixed height for the bottom blue section to maintain 420px total height */}
      <div className="relative -mt-12 pt-14 pb-8 px-8 bg-gradient-to-br from-[#A5C9FD] via-[#6395F9] to-[#3B82F6]">
        {/* SVG Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%]">
          <svg 
            viewBox="0 0 500 150" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[70px]"
          >
            <path 
              d="M0.00,49.98 C149.99,150.00 349.89,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
              className="fill-[#A5C9FD]" /* Matches start of gradient */
            ></path>
          </svg>
        </div>

        <div className="flex justify-between items-end relative z-10">
          <div>
            <h3 className="text-black text-2xl font-bold tracking-tight">
              {name}
            </h3>
            <p className="text-white text-sm font-medium mt-1">
              {role}
            </p>
          </div>
          
          <div className="flex gap-0.5 pb-1">
            {[...Array(stars)].map((_, i) => (
              <svg 
                key={i} 
                viewBox="0 0 24 24" 
                width="16" 
                height="16" 
                className="fill-orange-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const testimonials = [
    {
      name: "Abhinav Jha",
      role: "Preparing for UPSC",
      text: "I am coming here from past one year and there is not a single instance where i found something unusual or complaining about this library, environment is cozy & bit relaxed perfect place for study.",
      image: abhinavImg,
    },
    {
      name: "Pinky Yadav",
      role: "Preparing for UPSC",
      text: "I am preparing for UPSC CSE coming here from last 2 years having great experience. Ambience is peaceful and cozy, such a nice place to study peacefully along with that staff is very cooperative.",
      image: pinkyImg,
    },
    {
      name: "Sita Choudhary",
      role: "Data Analytics",
      text: "The main reason preparing here is the calm and smooth ambience which helps me during my study. It has truly become my go-to place for achieving my daily learning goals.",
       image: sitaImg,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-4 font-sans">
      {/* Full Screen Wrapper */}
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Testimonials
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            See what our users say about us.
          </p>
        </div>

        {/* Increased gap-x (horizontal) and gap-y (vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-79 justify-items-center">
          {testimonials.map((item, index) => (
            <TestimonialCard 
              key={index}
              name={item.name}
              role={item.role}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;