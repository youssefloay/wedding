import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-16 pb-8 px-6 text-center">
      <div className="flex flex-col items-center w-full max-w-sm mx-auto select-none mt-8 sm:mt-12">
        <p className="font-sans text-[10px] tracking-[0.25em] font-medium text-[#7d6c5b] uppercase mb-2">
          You are invited
        </p>
        <p className="italic font-serif text-[#7d6c5b] text-[16px] mb-8">
          to the wedding of
        </p>

        <div className="flex flex-col items-center font-serif text-[#4a3f35]">
          <span className="text-[32px] leading-none tracking-widest uppercase">Lama</span>
          <span className="text-[12px] font-sans tracking-[0.4em] mb-2 text-[#5c4e40]">Loay</span>
          
          <span className="italic text-3xl text-[#8b7967] mix-blend-multiply my-1 font-light">&amp;</span>
          
          <span className="text-[32px] leading-none tracking-widest uppercase mt-2">Álvaro</span>
          <span className="text-[12px] font-sans tracking-[0.4em] mb-2 text-[#5c4e40]">Recas</span>
        </div>

        <div className="mt-10 w-full max-w-[180px] flex items-center justify-between font-sans text-[#604f3f] tracking-[0.3em] text-[11px] font-medium uppercase relative">
          <span>Apr.</span>
          <span className="w-1 h-1 bg-[#8b7967] rounded-full mx-1"></span>
          <span>17</span>
          <span className="w-1 h-1 bg-[#8b7967] rounded-full mx-1"></span>
          <span>2027</span>
        </div>
        
        <p className="font-serif italic text-[14px] text-[#7d6c5b] mt-2">
          at 16pm
        </p>

        <div className="mt-10 text-[#5c4e40] uppercase tracking-[0.2em] text-[10px] space-y-1.5 leading-relaxed">
          <p>Castillo de Monda</p>
          <p>Málaga, Spain</p>
        </div>
        
        <div className="mt-8 text-[#604f3f] uppercase tracking-[0.16em] text-[9px]">
          <p>Reception after the ceremony</p>
        </div>
      </div>
    </div>
  );
}
