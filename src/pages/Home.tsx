import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=2000&q=80";

export function Home() {
  return (
    <div className="bg-[#F8F5F0]">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-b-[28px] border-x border-b border-[#E8DFD3] bg-white shadow-xl sm:rounded-[28px] sm:m-4 sm:border">
        <div className="grid min-h-[480px] lg:min-h-[520px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center bg-gradient-to-br from-[#F8F5F0] to-[#E8DFD3] p-8 sm:p-10 lg:p-12 lg:order-1">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#7C9AB0] sm:text-sm">
              17 April 2027 · Castillo de Monda
            </p>
            <h1 className="font-serif text-4xl leading-tight text-[#2F4A6D] sm:text-5xl lg:text-6xl mb-5">
              A celebration in Andalusia
            </h1>
            <p className="mb-8 max-w-xl text-base text-[#2B2B2B] sm:text-lg">
              We are so happy to celebrate this special moment with you. Explore the details, organise
              your stay, and confirm your attendance.
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
            <div className="absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="grid grid-cols-2 gap-3 rounded-[24px] bg-white/85 p-4 text-xs backdrop-blur sm:grid-cols-4 sm:gap-4 sm:p-6 sm:text-sm">
                <div>
                  <div className="text-[#7C9AB0]">Date</div>
                  <div className="mt-1 font-medium text-[#2B2B2B]">17 Apr 2027</div>
                </div>
                <div>
                  <div className="text-[#7C9AB0]">Place</div>
                  <div className="mt-1 font-medium text-[#2B2B2B]">Monda, Spain</div>
                </div>
                <div>
                  <div className="text-[#7C9AB0]">Stay</div>
                  <div className="mt-1 font-medium text-[#2B2B2B]">Castle + nearby</div>
                </div>
                <div>
                  <div className="text-[#7C9AB0]">RSVP by</div>
                  <div className="mt-1 font-medium text-[#2B2B2B]">1 Nov 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-2xl text-center text-sm text-[#7A8A6A]">
          Hero photograph is a placeholder — replace with your castle or venue image before launch.
        </p>
      </div>
    </div>
  );
}
