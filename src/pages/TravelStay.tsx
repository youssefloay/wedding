const options = ["Taxi", "Rental car", "Transfer"] as const;

const alternatives = [
  {
    title: "Monda",
    detail: "Guesthouses / rentals · €90–€180 / night",
    href: "https://www.booking.com/city/es/monda.html",
    label: "Browse on Booking.com",
  },
  {
    title: "Nearby villages (Ojén, Coín, Tolox)",
    detail: "€80–€200 / night",
    href: "https://www.skyscanner.net/hotels/spain/monda-hotels",
    label: "Search on Skyscanner",
  },
  {
    title: "Marbella (best option)",
    detail: "20–25 min away · €150–€400 / night",
    href: "https://www.booking.com/city/es/marbella.html",
    label: "Browse on Booking.com",
  },
] as const;

export function TravelStay() {
  return (
    <div className="bg-[#F8F5F0] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[#E8DFD3] bg-[#F8F5F0] p-6 sm:p-10">
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-white p-6 sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#7C9AB0] sm:text-sm">
              Castle accommodation
            </p>
            <h2 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Castillo de Monda</h2>
            <p className="mb-4 text-[#2B2B2B]">
              If you would like to stay at Castillo de Monda, please indicate your interest in the RSVP
              form.
            </p>
            <p className="mb-4 text-[#2B2B2B]">
              The hotel will contact you directly to confirm availability and booking details.
            </p>
            <div className="rounded-2xl bg-[#E8DFD3] p-4 text-sm text-[#2B2B2B]">
              <p className="font-semibold text-[#2F4A6D] mb-2">Important</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Submitting the form does NOT confirm a reservation</li>
                <li>Payment is required at the time of booking</li>
                <li>Breakfast: €15 per person</li>
              </ul>
            </div>
          </div>
          <div className="rounded-[24px] bg-white p-6 sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#7C9AB0] sm:text-sm">
              Getting there
            </p>
            <h2 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Travel to Monda</h2>
            <p className="mb-4 text-[#2B2B2B]">
              Nearest airport: <strong>Málaga-Costa del Sol Airport</strong>. Transport options:
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {options.map((x) => (
                <span key={x} className="rounded-full border border-[#E8DFD3] bg-[#F8F5F0] px-4 py-2">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-[24px] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Alternative accommodation</h2>
          <p className="mb-6 text-[#2B2B2B]">
            If you prefer not to stay at the castle, there are many nearby options.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {alternatives.map(({ title, detail, href, label }) => (
              <div key={title} className="flex flex-col rounded-[20px] border border-[#E8DFD3] bg-[#F8F5F0]/50 p-5">
                <div className="font-serif text-xl text-[#2F4A6D]">{title}</div>
                <p className="mt-2 flex-1 text-sm text-[#2B2B2B]">{detail}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium text-[#2F4A6D] underline-offset-2 hover:underline"
                >
                  {label} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-white p-6 sm:p-7">
          <h2 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Transfers</h2>
          <p className="mb-4 text-[#2B2B2B]">
            Transfers are optional and paid by guests. We will group guests where possible.
          </p>
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-2xl bg-[#F8F5F0] p-4">
              <strong>€95</strong> total → up to 4 people
            </div>
            <div className="rounded-2xl bg-[#F8F5F0] p-4">
              <strong>€100–110</strong> total → up to 7 people
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
