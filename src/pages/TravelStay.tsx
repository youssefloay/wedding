export function TravelStay() {
  return (
    <div className="py-[140px] px-5 text-center">
      <div className="mx-auto max-w-sm flex flex-col items-center">
        
        {/* Top Camera Icon */}
        <div className="text-4xl mb-4 opacity-80" role="img" aria-label="Camera">
          📷
        </div>
        
        {/* Title */}
        <h1 className="font-serif text-[42px] text-[#3b3228] mb-4 tracking-tight leading-none italic">
          Travel &amp; Stay
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-[#3b3228] text-[16px] leading-[1.4] mb-10">
          Álvaro &amp; Lama &bull; 17 April 2027 &bull; Monda
        </p>

        {/* Where to Stay Section */}
        <div className="w-full text-left mb-8">
          <h2 className="font-serif text-[26px] text-[#2c241c] mb-4 tracking-tight ml-2">
            Where to Stay
          </h2>
          
          <div className="w-full bg-[#f4ebd9] bg-[url('/card-bg-oranges.jpg')] bg-cover bg-center bg-no-repeat border-[1.5px] border-[#d4c8bc] rounded-[6px] px-6 py-6 shadow-[0_8px_16px_rgba(110,95,80,0.15)] font-serif text-[#3b3228] relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20"></div>
            <div className="relative z-10 space-y-4">
              <div className="leading-snug">
                <span className="text-[17px] font-medium block mb-1">Stay at Castillo de Monda</span>
                <span className="text-[15px] text-[#5c4a3d] block font-medium">&bull; Details in your RSVP</span>
              </div>
              
              <div className="h-[1px] bg-[#d3c6ba] opacity-60 w-full" />
              
              <div className="leading-snug">
                <span className="text-[17px] font-medium block mb-1">Marbella</span>
                <span className="text-[15px] text-[#5c4a3d] font-medium">&bull; 20-25 min drive (recommended)</span>
              </div>

              <div className="h-[1px] bg-[#d3c6ba] opacity-60 w-full" />
              
              <div className="leading-snug">
                <span className="text-[17px] font-medium block mb-1">Monda</span>
                <span className="text-[15px] text-[#5c4a3d] font-medium">&bull; 5 min walk (closer)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Info Section */}
        <div className="w-full text-left">
          <h2 className="font-serif text-[26px] text-[#2c241c] mb-4 tracking-tight ml-2">
            Travel Info
          </h2>
          
          <div className="w-full bg-[#f4ebd9] bg-[url('/card-bg-oranges.jpg')] bg-cover bg-center bg-no-repeat border-[1.5px] border-[#d4c8bc] rounded-[6px] px-6 py-6 shadow-[0_8px_16px_rgba(110,95,80,0.15)] font-serif text-[#3b3228] relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20"></div>
            <div className="relative z-10 space-y-5">
              <div className="flex items-center gap-4">
                <span className="opacity-80 text-2xl">✈️</span>
                <span className="text-[16px] text-[#5c4a3d] font-medium">Fly to Málaga Airport (AGP)</span>
              </div>

              <div className="h-[1px] bg-[#d3c6ba] opacity-60 w-full" />
              
              <div className="flex items-center gap-4">
                <span className="opacity-80 text-2xl">🚕</span>
                <span className="text-[16px] text-[#5c4a3d] font-medium">Taxi or transfer (40min)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

