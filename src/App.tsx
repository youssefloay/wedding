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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
      <Footer />
    </div>
  );
}
