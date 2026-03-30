import { Link } from "react-router-dom";
import { getAllRsvps, getAllLogistics, rowsToCsv, downloadCsvFile } from "../lib/submissions";

export function DataExport() {
  const rsvps = getAllRsvps();
  const logistics = getAllLogistics();

  return (
    <div className="bg-white/40 py-10 sm:py-14">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8b7967]">Organiser</p>
        <h1 className="font-serif text-3xl text-[#4a3f35] sm:text-4xl mb-4">Export responses</h1>
        <p className="mb-8 text-sm text-[#5c4e40]">
          Demo storage uses this browser&apos;s <strong>localStorage</strong> only. For production, use a
          database and secure admin. CSV satisfies the spec for export; replace with a proper backend
          before going live.
        </p>

        <div className="space-y-6 rounded-[24px] border border-[#8b7967]/30 bg-[#F6F1E6]/70 backdrop-blur-md shadow-sm p-6 sm:p-8">
          <div>
            <p className="font-medium text-[#4a3f35]">Form 1 — RSVP ({rsvps.length})</p>
            <button
              type="button"
              disabled={rsvps.length === 0}
              onClick={() =>
                downloadCsvFile(`rsvp-export-${Date.now()}.csv`, rowsToCsv(rsvps))
              }
              className="mt-3 w-full rounded-full bg-[#4a3f35] px-6 py-3 text-white disabled:opacity-40"
            >
              Download all RSVPs (CSV)
            </button>
          </div>
          <div>
            <p className="font-medium text-[#4a3f35]">Form 2 — Logistics ({logistics.length})</p>
            <button
              type="button"
              disabled={logistics.length === 0}
              onClick={() =>
                downloadCsvFile(`logistics-export-${Date.now()}.csv`, rowsToCsv(logistics))
              }
              className="mt-3 w-full rounded-full border border-[#4a3f35] px-6 py-3 text-[#4a3f35] disabled:opacity-40"
            >
              Download all logistics (CSV)
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-[#8b7967]">
          <Link to="/" className="underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
