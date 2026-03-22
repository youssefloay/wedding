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
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[#E8DFD3] bg-[#F8F5F0] p-6 shadow-xl sm:p-10">
        <div className="mb-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#7C9AB0] sm:text-sm">
              Wedding details
            </p>
            <h1 className="font-serif text-4xl text-[#2F4A6D] sm:text-5xl mb-4">Castillo de Monda</h1>
            <p className="text-base text-[#2B2B2B] sm:text-lg">
              A historic Andalusian castle nestled in the hills near Marbella, combining Spanish charm
              with Moorish architectural influences.
            </p>
          </div>
          <div className="rounded-[24px] bg-[#E8DFD3] p-6 sm:p-8">
            <div className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-2">Saturday</div>
            <div className="text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">17 April 2027</div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {timeline.map(([time, label]) => (
            <div key={time} className="rounded-[22px] bg-white p-4 text-center shadow-sm sm:p-5">
              <div className="text-sm text-[#7C9AB0]">{time}</div>
              <div className="mt-2 font-medium text-[#2B2B2B]">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[22px] bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-[#2F4A6D] mb-3">Weather</h2>
            <p className="text-[#2B2B2B]">
              Expect beautiful spring weather: around 18–21°C during the day and cooler evenings around
              10–13°C.
            </p>
          </div>
          <div className="rounded-[22px] bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-[#2F4A6D] mb-3">Dress code</h2>
            <p className="text-[#2B2B2B]">
              Elegant / formal. As parts of the celebration take place outdoors, comfortable shoes are
              recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
