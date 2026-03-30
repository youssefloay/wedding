const faqs = [
  {
    q: "Why are there two forms?",
    a: "We use a first form (RSVP) to confirm attendance, accommodation interest, and transfers by 1 November 2026. A second form in February 2027 collects final travel and dietary details when plans are firmer.",
  },
  {
    q: "When is the RSVP deadline?",
    a: "Please respond by 1 November 2026.",
  },
  {
    q: "Does the RSVP confirm a room at the castle?",
    a: "No. The hotel will contact you directly to confirm availability. Payment is due when you reserve. Breakfast is €15 per person.",
  },
  {
    q: "What airport should I use?",
    a: "Málaga-Costa del Sol Airport (AGP) is the closest — about 40 minutes by car to the venue.",
  },
] as const;

export function FAQ() {
  return (
    <div className="py-16 sm:py-24 px-6 flex-1 flex flex-col">
      <div className="mx-auto max-w-3xl w-full">
        <p className="mb-3 text-center text-[10px] uppercase tracking-[0.25em] font-medium text-[#7d6c5b]">
          Information
        </p>
        <h1 className="font-serif text-center text-4xl text-[#4a3f35] sm:text-5xl italic mb-12">
          Common Questions
        </h1>
        <ul className="space-y-4">
          {faqs.map(({ q, a }) => (
            <li key={q} className="rounded-[20px] bg-[#F6F1E6]/70 backdrop-blur-md p-6 sm:p-8 shadow-sm border border-[#8b7967]/20 transition-all hover:bg-[#F6F1E6]/80">
              <h2 className="font-serif text-[20px] text-[#4a3f35] mb-3">{q}</h2>
              <p className="text-[#5c4e40] text-[15px] leading-relaxed">{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
