import { NavLink, Link } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/wedding", label: "Wedding" },
  { to: "/travel", label: "Travel" },
  { to: "/gifts", label: "Gifts" },
  { to: "/rsvp", label: "RSVP" },
] as const;

export function Header() {
  return (
    <>
      <header className="sticky top-0 w-full z-40 bg-[#F6F1E6]">
        <div className="mx-auto flex h-16 w-full items-center justify-center px-4">
          <Link
            to="/"
            className="font-serif text-[22px] text-[#4a3f35] shrink-0 italic tracking-wide"
          >
            Álvaro & Lama
          </Link>
        </div>
      </header>

      {/* Andalusian Moorish Style Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 pointer-events-none pb-0 md:pb-6 flex justify-center">
        <div className="w-full md:max-w-[500px] pointer-events-auto">
          {/* Moorish architectural horseshoe profile simulation using intense rounded corners, borders, and warm contrast */}
          <div className="relative bg-[#3e342c] rounded-t-[36px] md:rounded-[36px] border-t-2 md:border-2 border-[#8b7967]/50 px-3 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] overflow-hidden">
            
            {/* Subtle Arabesque / Geometry pattern backdrop */}
            <div 
              className="absolute inset-0 opacity-[0.06]" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23EFECE6' fill-opacity='1' fill-rule='evenodd'/%3E")`
              }} 
            />

            <div className="relative flex justify-between items-center px-4">
              {nav.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `group relative flex flex-col items-center justify-center gap-1 transition-all duration-500 w-12 ${
                      isActive ? "text-[#F6F1E6] -translate-y-1.5" : "text-[#8b7967] hover:text-[#F6F1E6]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Architectural inspired active indicator (Moorish eight-point star suggested) */}
                      <span className={`absolute -top-3 text-[10px] text-[#8b7967] transition-all duration-500 ${isActive ? 'opacity-100 rotate-45 scale-100' : 'opacity-0 scale-50'}`}>
                        ✦
                      </span>
                      
                      {/* Nav Label */}
                      <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-semibold mt-1">
                        {label}
                      </span>
                      
                      {/* Bottom line active indicator */}
                      <span className={`h-[1px] bg-[#8b7967] mt-1 transition-all duration-500 rounded-full ${isActive ? 'w-4' : 'w-0'}`} />
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
}
