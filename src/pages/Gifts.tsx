export function Gifts() {
  return (
    <div className="py-[140px] px-5 text-center">
      <div className="mx-auto max-w-sm flex flex-col items-center">
        
        {/* Main Cursive Title */}
        <h1 className="font-script text-[72px] text-[#9a4532] leading-[0.7] mb-8 font-normal">
          Gift Registry
        </h1>
        
        {/* Subtitle */}
        <p className="font-serif text-[#3b3228] text-[16px] leading-[1.4] mb-10">
          Álvaro &amp; Lama &bull; 17 April 2027 &bull; Monda
        </p>

        {/* Message */}
        <div className="w-full mb-8">
          <h2 className="font-serif text-[24px] text-[#2c241c] mb-3 flex items-center justify-center gap-2">
            Your presence is our gift <span className="opacity-70">🤍</span>
          </h2>
          <p className="text-[#3b3228] text-[15px] font-serif leading-relaxed px-2">
            But if you'd like to celebrate with more than your presence, there are a few options below.
          </p>
        </div>

        {/* Grid of Options */}
        <div className="grid grid-cols-2 gap-4 w-full mb-4">
          
          {/* Honeymoon Card */}
          <div className="bg-[#f4ebd9] border-[1.5px] border-[#d4c8bc] rounded-[6px] p-4 shadow-[0_8px_16px_rgba(110,95,80,0.15)] flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-[4px] bg-[#d9c8b4]/30 overflow-hidden mb-4 border border-[#d4c8bc]/50">
              <img 
                src="https://images.unsplash.com/photo-1543621453-61b6b55fd823?w=400&q=80" 
                alt="Honeymoon Toast" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </div>
            <h3 className="font-serif text-[18px] text-[#2c241c] mb-3">Honeymoon</h3>
            <a href="#" className="w-full rounded-[6px] border-[1.5px] border-[#a65335] text-[#a65335] py-2 text-[14px] font-serif font-medium hover:bg-[#a65335] hover:text-white transition-all bg-transparent shadow-sm">
              Contribute
            </a>
          </div>

          {/* Build a Home Card */}
          <div className="bg-[#f4ebd9] border-[1.5px] border-[#d4c8bc] rounded-[6px] p-4 shadow-[0_8px_16px_rgba(110,95,80,0.15)] flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-[4px] bg-[#d9c8b4]/30 overflow-hidden mb-4 border border-[#d4c8bc]/50">
              <img 
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&q=80" 
                alt="Home Setup" 
                className="w-full h-full object-cover opacity-90 grayscale-[40%]"
              />
            </div>
            <h3 className="font-serif text-[18px] text-[#2c241c] mb-3">Build a home</h3>
            <a href="#" className="w-full rounded-[6px] border-[1.5px] border-[#c2b5a5] text-[#9a8c7e] py-2 text-[14px] font-serif font-medium hover:bg-[#efe8de] transition-all bg-transparent shadow-sm opacity-80 cursor-not-allowed">
              Contribute
            </a>
          </div>

        </div>

        {/* Retail/External List */}
        <div className="grid grid-cols-2 gap-4 w-full">
          
          <div className="bg-[#f4ebd9] border-[1.5px] border-[#d4c8bc] rounded-[6px] p-5 shadow-[0_8px_16px_rgba(110,95,80,0.15)] flex flex-col items-center justify-between min-h-[120px]">
            <div className="font-serif text-[#2c241c] text-xl mb-1 tracking-tight flex items-center gap-1.5 italic">
              <span className="text-2xl leading-none">&Zeta;</span> Zankyou
            </div>
            <p className="text-[#5c4a3d] text-[10px] uppercase tracking-widest mb-4">
              Gift Registry
            </p>
            <a href="#" className="w-full rounded-[6px] bg-[#a65335] text-white py-2.5 text-[15px] font-serif tracking-widest shadow-[0_4px_8px_rgba(120,60,40,0.3)] hover:bg-[#8f452a] transition-all font-bold">
              RSVP
            </a>
          </div>

          <div className="bg-[#f4ebd9] border-[1.5px] border-[#d4c8bc] rounded-[6px] p-5 shadow-[0_8px_16px_rgba(110,95,80,0.15)] flex flex-col items-center justify-between min-h-[120px]">
            <div className="font-serif text-[#2c241c] text-xl mb-1 tracking-tighter italic">
              Printemps.
            </div>
            <p className="text-[#5c4a3d] text-[10px] uppercase tracking-widest mb-4">
              Paris Store
            </p>
            <a href="#" className="w-full rounded-[6px] bg-[#a65335] text-white py-2.5 text-[15px] font-serif tracking-widest shadow-[0_4px_8px_rgba(120,60,40,0.3)] hover:bg-[#8f452a] transition-all font-bold">
              RSVP
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
