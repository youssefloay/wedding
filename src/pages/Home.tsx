import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-[140px] pb-12 px-5 text-center">
      <div className="flex flex-col items-center w-full max-w-sm mx-auto select-none">
        
        {/* Top Date & Location */}
        <div className="font-serif text-[#5c4b3a] text-[15px] leading-snug mb-2 opacity-90">
          <p>Álvaro &amp; Lama,</p>
          <p>17 April 2027 &bull; Monda</p>
        </div>

        {/* Main Cursive Title */}
        <h1 className="font-script text-[84px] text-[#b27d53] leading-[0.8] mb-12 drop-shadow-[0_2px_4px_rgba(120,80,50,0.1)] font-normal">
          Alvaro &amp; Lama
        </h1>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 w-full px-4 mb-14">
          <Link
            to="/rsvp"
            className="flex-1 rounded-[10px] bg-gradient-to-b from-[#cf7755] to-[#a65134] text-white py-2.5 text-[15px] font-serif tracking-widest shadow-[0_6px_14px_rgba(166,81,52,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)] [text-shadow:0_1px_1px_rgba(0,0,0,0.2)] hover:from-[#ba6043] hover:to-[#99472e] transition-all"
          >
            RSVP
          </Link>
          <Link
            to="/wedding"
            className="flex-1 rounded-[10px] border border-[#d2c7ba] bg-[#FAF7F0]/40 backdrop-blur-sm text-[#6F5244] py-2.5 text-[15px] font-serif shadow-[0_4px_10px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-[#FAF7F0]/60 transition-all"
          >
            View Details
          </Link>
        </div>

        {/* Blended Glassy Cream Card */}
        <div className="w-full bg-[#FAF7F0]/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] p-7 pb-9 mb-10 shadow-[0_8px_32px_rgba(100,70,50,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] relative overflow-hidden">
          <h2 className="font-serif italic text-[24px] text-[#4f4339] mb-4 tracking-tight">
            Stay at Castillo de Monda
          </h2>
          <div className="flex items-center justify-center w-full mb-4 opacity-50">
            <div className="h-[0.5px] bg-[#DCD3C6] w-[40px]"></div>
          </div>
          <p className="text-[#5e5248] text-[16px] font-serif leading-relaxed mb-8 px-2 tracking-wide">
            For the best experience, we recommend<br />staying at the venue.
          </p>
          <Link
            to="/rsvp"
            className="inline-block rounded-full bg-gradient-to-b from-[#c3ab8e] to-[#a38766] text-white px-8 py-[10px] text-[15px] font-sans font-medium shadow-[0_6px_16px_rgba(150,120,90,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:from-[#B59C7F] hover:to-[#9C8060] transition-all"
          >
            Request a room in RSVP
          </Link>
        </div>

        {/* Decorative Delicate Divider */}
        <div className="flex items-center justify-center gap-3 w-32 mb-8">
          <div className="h-[0.5px] bg-[#DCD3C6] flex-1"></div>
          <div className="w-[5px] h-[5px] rotate-45 bg-[#DCD3C6]"></div>
          <div className="h-[0.5px] bg-[#DCD3C6] flex-1"></div>
        </div>

        {/* Wedding Flow */}
        <div className="w-full">
          <h2 className="font-serif text-[26px] text-[#4f4339] mb-4 tracking-tight">
            Wedding Flow
          </h2>
          <div className="text-[#5e5248] font-serif text-[17px] leading-loose opacity-95 tracking-wide">
            <p>&bull; Arrival &rarr; Ceremony &rarr; Cocktail &rarr;</p>
            <p className="pl-6">&rarr; Party <span className="text-xl inline-block ml-1" style={{ transform: "rotate(15deg)" }}>🎉</span></p>
          </div>
        </div>

      </div>
    </div>
  );
}
