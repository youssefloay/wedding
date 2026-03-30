const options = ["Taxi", "Rental car", "Transfer"] as const;

const alternatives = [
  {
    title: "Monda",
    detail: "Guesthouses / rentals · €90–€180 / night",
    href: "https://www.booking.com/city/es/monda.html",
    label: "Browse on Booking",
  },
  {
    title: "Nearby villages",
    detail: "Ojén, Coín, Tolox · €80–€200 / night",
    href: "https://www.skyscanner.net/hotels/spain/monda-hotels",
    label: "Search on Skyscanner",
  },
  {
    title: "Marbella (best option)",
    detail: "20–25 min away · €150–€400 / night",
    href: "https://www.booking.com/city/es/marbella.html",
    label: "Browse on Booking",
  },
] as const;

export function TravelStay() {
  return (
    <div className="py-16 sm:py-20 px-6">
      <div className="mx-auto max-w-5xl text-center mb-10">
        <p className="font-sans text-[10px] tracking-[0.25em] font-medium text-[#7d6c5b] uppercase mb-2">
          Logistics
        </p>
        <h1 className="font-serif text-4xl text-[#4a3f35] sm:text-5xl italic">Travel & Stay</h1>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-[#F6F1E6]/70 backdrop-blur-md border border-[#8b7967]/20 p-6 sm:p-8 shadow-sm">
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] font-medium text-[#8b7967]">
              Accommodation
            </p>
            <h2 className="font-serif text-3xl text-[#4a3f35] sm:text-4xl mb-3">Castillo de Monda</h2>
            <p className="mb-4 text-sm text-[#5c4e40] leading-relaxed">
              If you would like to stay at Castillo de Monda, please indicate your interest in the RSVP
              form. The hotel will contact you directly to confirm availability and booking details.
            </p>
            <div className="rounded-[18px] bg-white/40 p-5 text-[12px] text-[#5c4e40] border border-[#8b7967]/10 mt-6">
              <p className="font-serif italic text-[#7d6c5b] mb-2 text-base">Important</p>
              <ul className="list-disc space-y-1.5 pl-4 flex flex-col gap-1">
                <li>Submitting the form does NOT confirm a reservation</li>
                <li>Payment is required at the time of booking</li>
                <li>Breakfast: €15 per person</li>
              </ul>
            </div>
          </div>
          <div className="rounded-[24px] bg-[#F6F1E6]/70 backdrop-blur-md border border-[#8b7967]/20 p-6 sm:p-8 shadow-sm">
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] font-medium text-[#8b7967]">
              Connections
            </p>
            <h2 className="font-serif text-3xl text-[#4a3f35] sm:text-4xl mb-3">Getting There</h2>
            <p className="mb-6 text-sm text-[#5c4e40] leading-relaxed">
              Nearest airport: <strong className="font-semibold text-[#4a3f35]">Málaga-Costa del Sol Airport</strong><br/><br/>Transport options from the airport:
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.15em] font-sans font-medium text-[#8b7967]">
              {options.map((x) => (
                <span key={x} className="rounded-full border border-[#8b7967]/30 bg-white/40 hover:bg-white/60 px-5 py-2.5 transition-colors shadow-sm">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-[24px] bg-[#F6F1E6]/70 backdrop-blur-md border border-[#8b7967]/20 p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif italic text-2xl text-[#7d6c5b] sm:text-3xl mb-3 text-center">Alternative stays</h2>
          <p className="mb-8 text-[#5c4e40] text-sm text-center">
            If you prefer not to stay at the castle, there are many nearby options.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {alternatives.map(({ title, detail, href, label }) => (
              <div key={title} className="flex flex-col rounded-[20px] bg-white/40 border border-[#8b7967]/10 p-5 hover:bg-white/60 transition-colors shadow-sm">
                <div className="font-serif text-[18px] text-[#4a3f35] leading-tight">{title}</div>
                <p className="mt-2 flex-1 text-xs text-[#5c4e40]">{detail}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[9px] uppercase tracking-widest font-medium text-[#8b7967] mix-blend-multiply hover:opacity-70 transition-opacity"
                >
                  {label} &nearr;
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-[#F6F1E6]/70 backdrop-blur-md border border-[#8b7967]/20 p-6 sm:p-8 shadow-sm text-center">
          <h2 className="font-serif italic text-2xl text-[#7d6c5b] sm:text-3xl mb-3">Transfers</h2>
          <p className="mb-8 text-[#5c4e40] text-sm max-w-xl mx-auto">
            Transfers are optional and paid by guests. We will group guests where possible.
          </p>
          <div className="grid gap-4 text-sm sm:grid-cols-2 max-w-xl mx-auto">
            <div className="rounded-[16px] bg-white/40 border border-[#8b7967]/10 p-5 text-[#5c4e40] shadow-sm">
              <strong className="text-[#4a3f35] text-lg font-serif">€95</strong> total <br/> <span className="text-xs text-[#7d6c5b] italic">up to 4 people</span>
            </div>
            <div className="rounded-[16px] bg-white/40 border border-[#8b7967]/10 p-5 text-[#5c4e40] shadow-sm">
              <strong className="text-[#4a3f35] text-lg font-serif">€100–110</strong> total <br/> <span className="text-xs text-[#7d6c5b] italic">up to 7 people</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
