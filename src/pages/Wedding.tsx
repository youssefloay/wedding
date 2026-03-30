export function Wedding() {
  return (
    <div className="py-[140px] px-5 text-center">
      <div className="mx-auto max-w-sm flex flex-col items-center">
        
        {/* Main Cursive Title */}
        <h1 className="font-script text-[84px] text-[#b27d53] leading-[0.8] mb-10 drop-shadow-[0_2px_4px_rgba(120,80,50,0.1)] font-normal">
          The Wedding
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-[#5e5248] text-[15px] leading-snug mb-12 opacity-90">
          Álvaro &amp; Lama &bull; 17 April 2027 &bull; Monda
        </p>

        {/* Blended Glassy Cream Card */}
        <div className="w-full bg-[#FAF7F0]/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] p-7 pb-9 mb-8 shadow-[0_8px_32px_rgba(100,70,50,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col items-center relative overflow-hidden">
          
          <div className="text-4xl mb-4 opacity-80" role="img" aria-label="Castle">
            🏰
          </div>
          
          <h2 className="font-serif italic text-[28px] text-[#4f4339] mb-4 tracking-tight">
            Castillo de Monda
          </h2>
          
          {/* Decorative Delicate Divider */}
          <div className="flex items-center justify-center gap-3 w-40 mb-6">
            <div className="h-[0.5px] bg-[#DCD3C6] flex-1"></div>
            <div className="w-[5px] h-[5px] rotate-45 bg-[#DCD3C6]"></div>
            <div className="h-[0.5px] bg-[#DCD3C6] flex-1"></div>
          </div>

          <p className="text-[#5e5248] text-[15px] font-serif leading-relaxed mb-8 px-4">
            Camino Humilladero, 29110 Monda, Málaga
          </p>

          <a
            href="https://maps.apple.com/?address=Camino+Humilladero,29110+Monda,Malaga,Spain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-row items-center justify-center gap-2 rounded-[10px] border border-[#d2c7ba] bg-[#FAF7F0]/40 backdrop-blur-sm text-[#6F5244] px-8 py-3 text-[14px] font-sans font-medium shadow-[0_4px_10px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-[#FAF7F0]/60 transition-all w-full sm:w-auto"
          >
            <svg className="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Open in Maps
          </a>
        </div>

        {/* Timeline */}
        <div className="w-full text-left font-serif text-[#4a3f35] px-2 mb-10">
          
          <div className="flex flex-row items-center border-b border-[#DCD3C6]/60 py-4">
            <span className="w-[72px] uppercase tracking-widest font-sans font-medium text-[11px] text-[#AF7F5D]">
              Arrival
            </span>
            <span className="font-medium text-[15px] mr-5 text-[#4a3f35]">15:00</span>
            <span className="flex-1 border-l border-[#DCD3C6] pl-5 text-[#5c4b3a] text-[16px]">
              Guests start gathering
            </span>
          </div>

          <div className="flex flex-row items-center border-b border-[#DCD3C6]/60 py-4">
            <span className="w-[72px] uppercase tracking-widest font-sans font-medium text-[11px] text-[#AF7F5D]">
              Ceremony
            </span>
            <span className="font-medium text-[15px] mr-5 text-[#4a3f35]">17:00</span>
            <span className="flex-1 border-l border-[#DCD3C6] pl-5 text-[#5c4b3a] text-[16px]">
              The spark begins 🔥
            </span>
          </div>

          <div className="flex flex-row items-center border-b border-[#DCD3C6]/60 py-4">
            <span className="w-[72px] uppercase tracking-widest font-sans font-medium text-[11px] text-[#AF7F5D]">
              Cocktail
            </span>
            <span className="font-medium text-[15px] mr-5 text-[#4a3f35]">17:30</span>
            <span className="flex-1 border-l border-[#DCD3C6] pl-5 text-[#5c4b3a] text-[16px]">
              Tapas &amp; drinks 🍸
            </span>
          </div>

          <div className="flex flex-row items-center border-b border-[#DCD3C6]/60 py-4">
            <span className="w-[72px] uppercase tracking-widest font-sans font-medium text-[11px] text-[#AF7F5D]">
              Dinner
            </span>
            <span className="font-medium text-[15px] mr-5 text-[#4a3f35]">19:00</span>
            <span className="flex-1 border-l border-[#DCD3C6] pl-5 text-[#5c4b3a] text-[16px]">
              Celebrate with us
            </span>
          </div>

          <div className="flex flex-row items-center py-4">
            <span className="w-[72px] uppercase tracking-widest font-sans font-medium text-[11px] text-[#AF7F5D]">
              Party
            </span>
            <span className="font-medium text-[15px] mr-5 text-[#4a3f35]">21:00</span>
            <span className="flex-1 border-l border-[#DCD3C6] pl-5 text-[#5c4b3a] text-[16px]">
              Let's dance! 🎵
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
