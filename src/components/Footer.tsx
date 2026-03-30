import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "../config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#8b7967]/30 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="font-serif text-[18px] text-[#4a3f35]">Álvaro & Lama</p>
            <p className="mt-1 text-[11px] font-sans tracking-widest uppercase text-[#5c4e40]">17 April 2027</p>
            <p className="text-[11px] font-sans tracking-widest uppercase text-[#5c4e40]">Castillo de Monda, Spain</p>
          </div>
          <nav className="flex flex-col gap-2 text-[11px] font-sans tracking-widest uppercase sm:items-end">
            <Link to="/rsvp" className="text-[#4a3f35] hover:text-[#8b7967] transition-colors">
              RSVP
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#4a3f35] hover:text-[#8b7967] transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-8 text-center text-[10px] tracking-wide text-[#7d6c5b]">
          Made with love for our friends and family
        </p>
      </div>
    </footer>
  );
}
