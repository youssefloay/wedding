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
    <div className="bg-[#F8F5F0] py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.25em] text-[#7C9AB0] sm:text-sm">
          FAQ
        </p>
        <h1 className="font-serif text-center text-4xl text-[#2F4A6D] sm:text-5xl mb-10">
          Common questions
        </h1>
        <ul className="space-y-4">
          {faqs.map(({ q, a }) => (
            <li key={q} className="rounded-[22px] bg-white p-6 shadow-sm border border-[#E8DFD3]/60">
              <h2 className="font-serif text-xl text-[#2F4A6D] mb-2">{q}</h2>
              <p className="text-[#2B2B2B] text-sm sm:text-base leading-relaxed">{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
