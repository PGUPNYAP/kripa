// components/plan/ExplorePlans.jsx
// To add a new plan: create its card in ./cards/, export from ./cards/index.js, import here

import {
  SingleDayCard,
  NightPlanCard,
  SixHoursCard,
  EightHoursCard,
} from "./cards";

export default function ExplorePlans() {
  return (
    <section className="w-full bg-gray-50 py-20 px-10 lg:px-20">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-gray-900 mb-3 leading-tight">
        Explore our Plans
      </h2>
      <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-16">
        Flexible plans designed to fit your workflow and Budget.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SingleDayCard />
        <NightPlanCard />
        <SixHoursCard />
        <EightHoursCard />
        {/* Add new cards here, e.g. <MonthlyCard /> */}
      </div>

      {/* Swipe hint */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full">
          <span>⟨⟨</span>
          <span>Swipe</span>
          <span>⟩⟩</span>
        </div>
      </div>

    </section>
  );
}