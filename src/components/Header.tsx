import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/wedding", label: "Wedding" },
  { to: "/travel", label: "Travel & Stay" },
  { to: "/gifts", label: "Gifts" },
  { to: "/rsvp", label: "RSVP" },
  { to: "/faq", label: "FAQ" },
] as const;

function linkClass({ isActive }: { isActive: boolean }) {
  return isActive ? "text-[#2F4A6D] font-medium" : "text-[#2B2B2B] hover:text-[#2F4A6D]";
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DFD3]/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-lg text-[#2F4A6D] sm:text-xl md:text-2xl shrink-0"
          onClick={() => setOpen(false)}
        >
          Álvaro & Lama
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/rsvp"
            className="rounded-full bg-[#2F4A6D] px-4 py-2 text-xs font-medium text-white sm:px-5 sm:text-sm"
            onClick={() => setOpen(false)}
          >
            RSVP
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block h-0.5 w-5 bg-[#2B2B2B]" />
            <span className="block h-0.5 w-5 bg-[#2B2B2B]" />
            <span className="block h-0.5 w-5 bg-[#2B2B2B]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#E8DFD3] bg-[#F8F5F0] px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-base">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `py-2 ${isActive ? "text-[#2F4A6D] font-semibold" : "text-[#2B2B2B]"}`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
