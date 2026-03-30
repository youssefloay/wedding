import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-[190px] pb-12 px-5 text-center">
      <div className="flex flex-col items-center w-full max-w-sm mx-auto select-none">
        
        {/* Top Date & Location */}
        <div className="font-serif text-[#3b3228] text-[16px] leading-[1.4] mb-4">
          <p>Álvaro &amp; Lama,</p>
          <p>17 April 2027 &bull; Monda</p>
        </div>

        {/* Main Cursive Title */}
        <h1 className="font-script text-[84px] text-[#9a4532] leading-[0.7] mb-12 font-normal">
          Alvaro &amp; Lama
        </h1>

        {/* Action Buttons (Flat Vintage Rectangles) */}
        <div className="flex items-center justify-center gap-3 w-full px-2 mb-10">
          <Link
            to="/rsvp"
            className="flex-1 rounded-[6px] bg-[#a65335] text-white py-3 text-[17px] font-serif font-bold tracking-wide shadow-[0_4px_8px_rgba(120,60,40,0.3)] hover:bg-[#8f452a] transition-all"
          >
            RSVP
          </Link>
          <Link
            to="/wedding"
            className="flex-1 rounded-[6px] border-[1.5px] border-[#d3c6ba] bg-[#efe8de] text-[#5c4a3d] py-3 text-[17px] font-serif shadow-[0_4px_8px_rgba(150,140,130,0.2)] hover:bg-[#e6dcd0] transition-all"
          >
            View Details
          </Link>
        </div>

        {/* Solid Vintage Paper Card with Oranges */}
        <div className="w-full bg-[#f4ebd9] bg-[url('/card-bg-oranges.jpg')] bg-cover bg-center bg-no-repeat border-[1.5px] border-[#d4c8bc] rounded-[6px] p-6 pb-8 mb-8 shadow-[0_8px_16px_rgba(110,95,80,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20"></div> {/* subtle lightening to ensure text readability */}
          <div className="relative z-10">
            <h2 className="font-serif italic text-[24px] text-[#2c241c] mb-4 tracking-tight">
              Stay at Castillo de Monda
            </h2>
            
            <div className="flex justify-center mb-5">
              <div className="h-[1px] bg-[#d3c6ba] w-[80%]"></div>
            </div>
            
            <p className="text-[#3b3228] text-[15px] font-serif leading-relaxed mb-6 px-1">
              For the best experience, we recommend<br />staying at the venue.
            </p>
            <Link
              to="/rsvp"
              className="inline-block rounded-full border border-[#967d5e] bg-[#aa8a63] text-white px-8 py-3 text-[15px] font-sans font-medium shadow-[0_6px_10px_rgba(120,100,70,0.3)] hover:bg-[#967853] transition-all"
            >
              Request a room in RSVP
            </Link>
          </div>
        </div>

        {/* Wedding Flow */}
        <div className="w-full mt-2">
          
          <div className="flex items-center justify-center gap-3 w-full mb-6">
            <div className="h-[1px] bg-[#9a8c7e] w-12 opacity-50"></div>
            <h2 className="font-serif text-[24px] text-[#3b3228] tracking-tight">
              Wedding Flow
            </h2>
            <div className="h-[1px] bg-[#9a8c7e] w-12 opacity-50"></div>
          </div>

          <div className="text-[#3b3228] font-serif text-[16px] leading-loose tracking-wide">
            <p>&bull; Arrival &rarr; Ceremony &rarr; Cocktail &rarr;</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-[1px] bg-[#9a8c7e] w-16 opacity-40"></div>
              <p>&rarr; Party <span className="text-lg inline-block ml-1">🍹</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
