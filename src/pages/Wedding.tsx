export function Wedding() {
  return (
    <div className="py-[140px] px-5 text-center">
      <div className="mx-auto max-w-sm flex flex-col items-center">
        
        {/* Main Cursive Title */}
        <h1 className="font-script text-[84px] text-[#9a4532] leading-[0.7] mb-10 font-normal">
          The Wedding
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-[#3b3228] text-[16px] leading-[1.4] mb-12">
          Álvaro &amp; Lama &bull; 17 April 2027 &bull; Monda
        </p>

        {/* Solid Vintage Paper Card */}
        <div className="w-full bg-[#f4ebd9] border-[1.5px] border-[#d4c8bc] rounded-[6px] p-6 pb-8 mb-8 shadow-[0_8px_16px_rgba(110,95,80,0.15)] flex flex-col items-center relative overflow-hidden">
          
          <div className="text-4xl mb-4 opacity-80" role="img" aria-label="Castle">
            🏰
          </div>
          
          <h2 className="font-serif italic text-[26px] text-[#2c241c] mb-4 tracking-tight">
            Castillo de Monda
          </h2>
          
          {/* Decorative Delicate Divider */}
          <div className="flex justify-center mb-5 w-full">
            <div className="h-[1px] bg-[#d3c6ba] w-[60%]"></div>
          </div>

          <p className="text-[#3b3228] text-[15px] font-serif leading-relaxed mb-8 px-4">
            Camino Humilladero, 29110 Monda, Málaga
          </p>

          <a
            href="https://maps.apple.com/?address=Camino+Humilladero,29110+Monda,Malaga,Spain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-row items-center justify-center gap-2 rounded-[6px] border-[1.5px] border-[#d3c6ba] bg-[#efe8de] text-[#5c4a3d] px-8 py-3 text-[15px] font-serif shadow-[0_4px_8px_rgba(150,140,130,0.2)] hover:bg-[#e6dcd0] transition-all w-full sm:w-auto"
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
