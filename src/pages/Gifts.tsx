export function Gifts() {
  return (
    <div className="py-[140px] px-5 text-center">
      <div className="mx-auto max-w-sm flex flex-col items-center">
        
        {/* Main Cursive Title */}
        <h1 className="font-script text-[72px] text-[#b27d53] leading-[0.8] mb-6 drop-shadow-[0_2px_4px_rgba(120,80,50,0.1)] font-normal">
          Gift Registry
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-[#5e5248] text-[15px] leading-snug mb-10 opacity-90">
          Álvaro &amp; Lama &bull; 17 April 2027 &bull; Monda
        </p>

        {/* Message */}
        <div className="w-full mb-8">
          <h2 className="font-serif text-[24px] text-[#4f4339] mb-3 flex items-center justify-center gap-2">
            Your presence is our gift <span className="opacity-70">🤍</span>
          </h2>
          <p className="text-[#5e5248] text-[16px] font-serif leading-relaxed px-2">
            But if you'd like to celebrate with more than your presence, there are a few options below.
          </p>
        </div>

        {/* Grid of Options */}
        <div className="grid grid-cols-2 gap-4 w-full mb-4">
          
          {/* Honeymoon Card */}
          <div className="bg-[#FAF7F0]/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] p-4 shadow-[0_8px_32px_rgba(100,70,50,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-[10px] bg-[#d9c8b4]/30 overflow-hidden mb-4 border border-white/40 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1543621453-61b6b55fd823?w=400&q=80" 
                alt="Honeymoon Toast" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-[18px] text-[#4f4339] mb-3">Honeymoon</h3>
            <a href="#" className="w-full rounded-full border border-[#cf7755] text-[#cf7755] py-2 text-[14px] font-sans font-medium hover:bg-[#cf7755] hover:text-white transition-all bg-white/20 shadow-sm">
              Contribute
            </a>
          </div>

          {/* Build a Home Card */}
          <div className="bg-[#FAF7F0]/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] p-4 shadow-[0_8px_32px_rgba(100,70,50,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-[10px] bg-[#d9c8b4]/30 overflow-hidden mb-4 border border-white/40 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&q=80" 
                alt="Home Setup" 
                className="w-full h-full object-cover opacity-90 grayscale-[20%]"
              />
            </div>
            <h3 className="font-serif text-[18px] text-[#4f4339] mb-3">Build a home</h3>
            <a href="#" className="w-full rounded-full border border-[#DCD3C6] text-[#8b7967] py-2 text-[14px] font-sans font-medium hover:bg-[#FAF7F0] transition-all bg-white/20 shadow-sm opacity-80 cursor-not-allowed">
              Contribute
            </a>
          </div>

        </div>

        {/* Retail/External List */}
        <div className="grid grid-cols-2 gap-4 w-full">
          
          <div className="bg-[#FAF7F0]/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] p-5 shadow-[0_8px_32px_rgba(100,70,50,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col items-center justify-between min-h-[120px]">
            <div className="font-serif text-[#4f4339] text-xl mb-1 tracking-tight flex items-center gap-1.5 italic font-medium">
              <span className="text-2xl leading-none">&Zeta;</span> Zankyou
            </div>
            <p className="text-[#8b7967] text-[10px] uppercase tracking-widest mb-4">
              Gift Registry
            </p>
            <a href="#" className="w-full rounded-[10px] bg-gradient-to-b from-[#cf7755] to-[#a65134] text-white py-2 text-[14px] font-serif shadow-[0_4px_10px_rgba(166,81,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:to-[#99472e] transition-all">
              Contribute
            </a>
          </div>

          <div className="bg-[#FAF7F0]/40 backdrop-blur-[12px] border border-white/60 rounded-[16px] p-5 shadow-[0_8px_32px_rgba(100,70,50,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col items-center justify-between min-h-[120px]">
            <div className="font-serif text-[#4f4339] text-xl mb-1 tracking-tighter italic font-medium">
              Printemps.
            </div>
            <p className="text-[#8b7967] text-[10px] uppercase tracking-widest mb-4">
              Paris Store
            </p>
            <a href="#" className="w-full rounded-[10px] bg-gradient-to-b from-[#cf7755] to-[#a65134] text-white py-2 text-[14px] font-serif shadow-[0_4px_10px_rgba(166,81,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:to-[#99472e] transition-all">
              Contribute
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
