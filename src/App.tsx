import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Wedding } from "./pages/Wedding";
import { TravelStay } from "./pages/TravelStay";
import { RSVP } from "./pages/RSVP";
import { LogisticsForm } from "./pages/LogisticsForm";
import { DataExport } from "./pages/DataExport";
import { Gifts } from "./pages/Gifts";
import { FAQ } from "./pages/FAQ";

export default function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full relative">
      
      {/* Decorative Artwork Layers */}
      <img 
        src="/arch.png" 
        alt="" 
        className="absolute top-16 left-0 w-full pointer-events-none select-none z-0 object-contain object-top" 
      />
      <img 
        src="/latterns.png" 
        alt="" 
        className="absolute bottom-16 left-0 w-full pointer-events-none select-none z-0 object-contain object-bottom" 
      />

      {/* Main UI Overlay */}
      <div className="relative z-10 flex flex-col flex-1 w-full">
        <Header />
        <main className="flex-1 flex flex-col w-full pb-24 md:pb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/travel" element={<TravelStay />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/logistics" element={<LogisticsForm />} />
            <Route path="/export" element={<DataExport />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <div className="pb-20 md:pb-24">
          <Footer />
        </div>
      </div>

    </div>
  );
}
