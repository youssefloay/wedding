const options = ["Taxi", "Rental car", "Organised transfer"] as const;

const stays = [
  ["Monda", "€90–€180 / night"],
  ["Nearby villages", "€80–€200 / night"],
  ["Marbella", "€150–€400 / night"],
  ["Transfers", "€95–€110 total"],
] as const;

export function TravelStay() {
  return (
    <div className="bg-[#F8F5F0] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-[#E8DFD3] bg-[#F8F5F0] p-6 shadow-xl sm:p-10">
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#7C9AB0] sm:text-sm">
              Stay at the castle
            </p>
            <h2 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">
              Accommodation at Castillo de Monda
            </h2>
            <p className="mb-4 text-[#2B2B2B]">
              If you would like to stay at the castle, please indicate it in the RSVP form. The hotel will
              contact you directly to confirm your booking.
            </p>
            <div className="rounded-2xl bg-[#E8DFD3] p-4 text-sm text-[#2B2B2B]">
              <strong>Important:</strong> submitting the form does not confirm a room. Payment is required
              at the time of reservation. Breakfast is €15 per person.
            </div>
          </div>
          <div className="rounded-[24px] bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#7C9AB0] sm:text-sm">
              Getting there
            </p>
            <h2 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Travel to Monda</h2>
            <p className="mb-4 text-[#2B2B2B]">
              The nearest airport is Málaga-Costa del Sol Airport, approximately 40 minutes from the venue.
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

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stays.map(([name, price]) => (
            <div key={name} className="rounded-[20px] bg-white p-5 shadow-sm">
              <div className="font-serif text-xl text-[#2F4A6D]">{name}</div>
              <div className="mt-2 text-sm text-[#2B2B2B]">{price}</div>
            </div>
          ))}
        </div>

        <div className="rounded-[24px] bg-white p-6 shadow-sm sm:p-7">
          <h2 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Transfer information</h2>
          <p className="mb-4 text-[#2B2B2B]">
            Transfers are optional and are paid by guests. We will aim to group guests together where
            possible to optimise costs.
          </p>
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-2xl bg-[#F8F5F0] p-4">
              Up to 4 people: <strong>€95 total</strong>
            </div>
            <div className="rounded-2xl bg-[#F8F5F0] p-4">
              Up to 7 people: <strong>€100–€110 total</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
