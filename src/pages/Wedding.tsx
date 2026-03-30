const timeline = [
  ["16:30", "Arrival"],
  ["17:00", "Ceremony"],
  ["18:00", "Cocktail"],
  ["20:00", "Dinner"],
  ["22:30", "Party"],
] as const;

export function Wedding() {
  return (
    <div className="py-16 sm:py-20 px-6">
      <div className="mx-auto max-w-4xl text-center mb-10">
        <p className="font-sans text-[10px] tracking-[0.25em] font-medium text-[#7d6c5b] uppercase mb-2">
          Itinerary
        </p>
        <h1 className="font-serif text-4xl text-[#4a3f35] sm:text-5xl italic">Wedding Details</h1>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] bg-[#F6F1E6]/70 backdrop-blur-md border border-[#8b7967]/20 p-6 sm:p-8 shadow-sm">
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] font-medium text-[#8b7967]">
              Venue
            </p>
            <h2 className="font-serif text-3xl text-[#4a3f35] sm:text-4xl mb-4">Castillo de Monda</h2>
            <p className="text-sm text-[#5c4e40] leading-relaxed">
              Castillo de Monda is a historic Andalusian castle nestled in the mountains near Marbella,
              offering breathtaking views and a unique blend of Spanish and Moorish heritage.
            </p>
          </div>
          <div className="rounded-[24px] bg-[#F6F1E6]/70 backdrop-blur-md border border-[#8b7967]/20 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
            <div className="font-serif italic text-2xl text-[#7d6c5b] mb-1">Saturday</div>
            <div className="text-2xl font-serif text-[#4a3f35] uppercase tracking-widest">17 Apr</div>
            <div className="text-[12px] font-sans tracking-[0.4em] text-[#5c4e40] mt-1">2027</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="font-serif italic text-2xl text-[#7d6c5b] mb-4 text-center">Schedule</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {timeline.map(([time, label]) => (
              <div key={time} className="rounded-[20px] bg-[#F6F1E6]/80 backdrop-blur-md border border-[#8b7967]/20 p-4 text-center shadow-sm hover:bg-[#F6F1E6]/90 transition-colors">
                <div className="text-[11px] font-sans tracking-widest text-[#8b7967]">{time}</div>
                <div className="mt-1 font-serif text-[15px] text-[#4a3f35]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[22px] bg-[#F6F1E6]/60 backdrop-blur-md border border-[#8b7967]/20 p-6 shadow-sm">
            <h2 className="font-serif italic text-xl text-[#7d6c5b] mb-3">Weather</h2>
            <p className="text-[#5c4e40] text-sm leading-relaxed">
              18–21°C daytime · 10–13°C evening.<br/>Bring a light layer.
            </p>
          </div>
          <div className="rounded-[22px] bg-[#F6F1E6]/60 backdrop-blur-md border border-[#8b7967]/20 p-6 shadow-sm">
            <h2 className="font-serif italic text-xl text-[#7d6c5b] mb-3">Dress code</h2>
            <p className="text-[#5c4e40] text-sm leading-relaxed">
              Elegant / formal.<br/>Outdoor-friendly shoes recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
