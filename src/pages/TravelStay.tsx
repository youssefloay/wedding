export function TravelStay() {
  return (
    <div className="py-[140px] px-5 text-center">
      <div className="mx-auto max-w-sm flex flex-col items-center">
        
        {/* Top Camera Icon */}
        <div className="text-4xl mb-4 opacity-80" role="img" aria-label="Camera">
          📷
        </div>
        
        {/* Title */}
        <h1 className="font-serif text-[42px] text-[#4f4339] mb-4 tracking-tight leading-none italic">
          Travel &amp; Stay
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-[#5e5248] text-[15px] leading-snug mb-12 opacity-90">
          Álvaro &amp; Lama &bull; 17 April 2027 &bull; Monda
        </p>

        {/* Where to Stay Section */}
        <div className="w-full text-left mb-10">
          <h2 className="font-serif text-[26px] text-[#4f4339] mb-5 tracking-tight ml-2">
            Where to Stay
          </h2>
          
          <div className="w-full bg-[#FAF7F0]/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] px-6 py-6 shadow-[0_8px_32px_rgba(100,70,50,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] space-y-5 font-serif text-[#4f4339]">
            
            <div className="leading-snug">
              <span className="text-[17px] font-medium block mb-1">Stay at Castillo de Monda</span>
              <span className="text-[15px] text-[#5e5248] block opacity-90">&bull; Details in your RSVP</span>
            </div>
            
            <div className="h-[0.5px] bg-[#DCD3C6] opacity-60 w-full" />
            
            <div className="leading-snug">
              <span className="text-[17px] font-medium block mb-1">Marbella</span>
              <span className="text-[15px] text-[#5e5248] font-normal opacity-90">&bull; 20-25 min drive (recommended)</span>
            </div>

            <div className="h-[0.5px] bg-[#DCD3C6] opacity-60 w-full" />
            
            <div className="leading-snug">
              <span className="text-[17px] font-medium block mb-1">Monda</span>
              <span className="text-[15px] text-[#5e5248] font-normal opacity-90">&bull; 5 min walk (closer)</span>
            </div>
          </div>
        </div>

        {/* Travel Info Section */}
        <div className="w-full text-left">
          <h2 className="font-serif text-[26px] text-[#4f4339] mb-5 tracking-tight ml-2">
            Travel Info
          </h2>
          
          <div className="w-full bg-[#FAF7F0]/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] px-6 py-6 shadow-[0_8px_32px_rgba(100,70,50,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] space-y-6 font-serif text-[#4f4339]">
            
            <div className="flex items-center gap-4">
              <span className="opacity-80 text-2xl">✈️</span>
              <span className="text-[16px] text-[#5e5248]">Fly to Málaga Airport (AGP)</span>
            </div>

            <div className="h-[0.5px] bg-[#DCD3C6] opacity-60 w-full" />
            
            <div className="flex items-center gap-4">
              <span className="opacity-80 text-2xl">🚕</span>
              <span className="text-[16px] text-[#5e5248]">Taxi or transfer (40min)</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

