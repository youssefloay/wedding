export function Gifts() {
  return (
    <div className="py-20 sm:py-32 px-6 flex-1 flex flex-col justify-center">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 w-full">
        <p className="mb-3 text-center text-[10px] uppercase tracking-[0.25em] font-medium text-[#7d6c5b]">
          Registry
        </p>
        <h1 className="font-serif text-center text-4xl text-[#4a3f35] sm:text-5xl italic mb-10">Gifts</h1>
        
        <div className="rounded-[24px] bg-[#F6F1E6]/70 backdrop-blur-md border border-[#8b7967]/20 p-8 sm:p-12 shadow-sm text-center">
          <p className="text-lg leading-relaxed text-[#5c4e40] mb-6 font-serif">
            Your presence at our wedding is the greatest gift of all.
          </p>
          <p className="text-sm leading-relaxed text-[#5c4e40] mb-8">
            If you wish to contribute, we would be grateful for a contribution towards our future together.
          </p>
          
          <div className="w-12 h-px bg-[#8b7967]/30 mx-auto my-6" />
          
          <p className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#8b7967]">
            Banking details to be shared later
          </p>
        </div>
      </div>
    </div>
  );
}
