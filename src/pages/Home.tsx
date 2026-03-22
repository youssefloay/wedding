import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=2000&q=80";

const quickInfo = [
  { icon: "📍", text: "Castillo de Monda, Spain" },
  { icon: "📅", text: "17 April 2027" },
  { icon: "✈️", text: "Málaga Airport (~40 min)" },
  { icon: "🛏️", text: "Accommodation available" },
] as const;

export function Home() {
  return (
    <div className="bg-[#F8F5F0]">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-b-[28px] border-x border-b border-[#E8DFD3] bg-white sm:rounded-[28px] sm:m-4 sm:border">
        <div className="grid min-h-[480px] lg:min-h-[520px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center bg-gradient-to-br from-[#F8F5F0] to-[#E8DFD3] p-8 sm:p-10 lg:p-12 lg:order-1">
            <p className="font-serif text-4xl leading-tight text-[#2F4A6D] sm:text-5xl lg:text-6xl mb-2">
              Álvaro & Lama
            </p>
            <p className="mb-4 text-lg font-medium text-[#7C9AB0] sm:text-xl">We are getting married</p>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#7C9AB0] sm:text-sm">
              17 April 2027 — Castillo de Monda
            </p>
            <p className="mb-8 max-w-xl text-base text-[#2B2B2B] sm:text-lg">
              We are so happy to celebrate this special moment with you in Andalusia.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/rsvp"
                className="inline-flex items-center justify-center rounded-full bg-[#2F4A6D] px-6 py-3 text-center text-white"
              >
                RSVP
              </Link>
              <Link
                to="/wedding"
                className="inline-flex items-center justify-center rounded-full border border-[#2F4A6D] px-6 py-3 text-center text-[#2F4A6D]"
              >
                View Details
              </Link>
            </div>
          </div>

          <div className="relative order-1 min-h-[240px] lg:order-2 lg:min-h-0">
            <img
              src={HERO_IMAGE}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#F8F5F0]/55" aria-hidden />
            <div
              className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_30%),radial-gradient(circle_at_80%_30%,white,transparent_25%),radial-gradient(circle_at_40%_80%,#E8DFD3,transparent_30%)]"
              aria-hidden
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:py-16">
        <h2 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-4">Welcome to our wedding website</h2>
        <p className="text-base leading-relaxed text-[#2B2B2B] sm:text-lg">
          Here you&apos;ll find everything you need to plan your trip, organise your stay, and celebrate
          with us.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:pb-20">
        <h2 className="font-serif text-center text-xl text-[#2F4A6D] sm:text-2xl mb-8">Quick info</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {quickInfo.map(({ icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-3 rounded-[22px] border border-[#E8DFD3] bg-white px-5 py-4 text-[#2B2B2B]"
            >
              <span className="text-xl" aria-hidden>
                {icon}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mx-auto max-w-2xl px-4 pb-12 text-center text-xs text-[#7A8A6A] sm:text-sm">
        Hero image: replace with an Andalusian castle / Castillo de Monda exterior (natural light, elegant
        — see README §10).
      </p>
    </div>
  );
}
