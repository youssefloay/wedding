import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "../config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E8DFD3] bg-[#F8F5F0]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="font-serif text-xl text-[#2F4A6D]">Álvaro & Lama</p>
            <p className="mt-1 text-sm text-[#2B2B2B]">17 April 2027</p>
            <p className="text-sm text-[#2B2B2B]">Castillo de Monda, Spain</p>
          </div>
          <nav className="flex flex-col gap-2 text-sm sm:items-end">
            <Link to="/rsvp" className="text-[#2F4A6D] hover:underline">
              RSVP
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#2F4A6D] hover:underline">
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-8 text-center text-sm text-[#7A8A6A]">
          Made with love for our friends and family
        </p>
      </div>
    </footer>
  );
}
