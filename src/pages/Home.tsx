import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center">
      <div className="flex flex-col items-center w-full max-w-sm mx-auto select-none mt-12 sm:mt-16">
        <p className="font-sans text-[11px] tracking-[0.25em] font-medium text-[#7d6c5b] uppercase mb-3">
          You are invited
        </p>
        <p className="italic font-serif text-[#7d6c5b] text-[18px] mb-12">
          to the wedding of
        </p>

        <div className="flex flex-col items-center font-serif text-[#4a3f35]">
          <span className="text-[34px] leading-none tracking-widest uppercase">Lama</span>
          <span className="text-[13px] font-sans tracking-[0.4em] mb-4 text-[#5c4e40]">Loay</span>
          
          <span className="italic text-4xl text-[#8b7967] mix-blend-multiply my-2 font-light">&amp;</span>
          
          <span className="text-[34px] leading-none tracking-widest uppercase mt-4">Álvaro</span>
          <span className="text-[13px] font-sans tracking-[0.4em] mb-4 text-[#5c4e40]">Recas</span>
        </div>

        <div className="mt-16 w-full max-w-[200px] flex items-center justify-between font-sans text-[#604f3f] tracking-[0.3em] text-[12px] font-medium uppercase relative">
          <span>Apr.</span>
          <span className="w-1 h-1 bg-[#8b7967] rounded-full mx-2"></span>
          <span>17</span>
          <span className="w-1 h-1 bg-[#8b7967] rounded-full mx-2"></span>
          <span>2027</span>
        </div>
        
        <p className="font-serif italic text-[16px] text-[#7d6c5b] mt-3">
          at 16pm
        </p>

        <div className="mt-14 text-[#5c4e40] uppercase tracking-[0.2em] text-[11px] space-y-2 leading-relaxed">
          <p>Castillo de Monda</p>
          <p>Málaga, Spain</p>
        </div>
        
        <div className="mt-12 text-[#604f3f] uppercase tracking-[0.2em] text-[10px]">
          <p>Reception after the ceremony</p>
        </div>
        
        <div className="mt-14 pb-8 flex justify-center">
          <Link
            to="/rsvp"
            className="inline-flex items-center justify-center rounded-sm border border-[#8b7967]/30 px-10 py-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#604f3f] bg-white/10 hover:bg-white/40 hover:border-[#8b7967]/80 backdrop-blur-sm transition-all duration-300 shadow-sm"
          >
            RSVP
          </Link>
        </div>
      </div>
    </div>
  );
}
