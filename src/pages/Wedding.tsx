const timeline = [
  ["16:30", "Arrival"],
  ["17:00", "Ceremony"],
  ["18:00", "Cocktail"],
  ["20:00", "Dinner"],
  ["22:30", "Party"],
] as const;

export function Wedding() {
  return (
    <div className="bg-[#F8F5F0] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[#E8DFD3] bg-[#F8F5F0] p-6 sm:p-10">
        <div className="mb-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] bg-white p-6 sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#7C9AB0] sm:text-sm">
              Venue
            </p>
            <h1 className="font-serif text-4xl text-[#2F4A6D] sm:text-5xl mb-4">Castillo de Monda</h1>
            <p className="text-base text-[#2B2B2B] sm:text-lg">
              Castillo de Monda is a historic Andalusian castle nestled in the mountains near Marbella,
              offering breathtaking views and a unique blend of Spanish and Moorish heritage.
            </p>
          </div>
          <div className="rounded-[24px] bg-[#E8DFD3] p-6 sm:p-8">
            <div className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-2">Saturday</div>
            <div className="text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">17 April 2027</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="font-serif text-2xl text-[#2F4A6D] mb-4">Schedule</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {timeline.map(([time, label]) => (
              <div key={time} className="rounded-[22px] bg-white p-4 text-center sm:p-5">
                <div className="text-sm text-[#7C9AB0]">{time}</div>
                <div className="mt-2 font-medium text-[#2B2B2B]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[22px] bg-white p-6">
            <h2 className="font-serif text-2xl text-[#2F4A6D] mb-3">Weather</h2>
            <p className="text-[#2B2B2B]">
              18–21°C daytime · 10–13°C evening. Bring a light layer.
            </p>
          </div>
          <div className="rounded-[22px] bg-white p-6">
            <h2 className="font-serif text-2xl text-[#2F4A6D] mb-3">Dress code</h2>
            <p className="text-[#2B2B2B]">
              Elegant / formal. Outdoor-friendly shoes recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
