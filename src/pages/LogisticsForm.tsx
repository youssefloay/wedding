import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { appendLogistics, rowsToCsv, downloadCsvFile, type SubmissionRow } from "../lib/submissions";

const initial = {
  fullName: "",
  email: "",
  flightArrival: "",
  flightDeparture: "",
  arrivalTime: "",
  transferConfirmation: "",
  dietaryFinal: "",
};

export function LogisticsForm() {
  const [form, setForm] = useState(initial);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exportRow, setExportRow] = useState<SubmissionRow | null>(null);

  function update<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Please enter your full name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }
    const row: SubmissionRow = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      flightArrival: form.flightArrival.trim(),
      flightDeparture: form.flightDeparture.trim(),
      arrivalTime: form.arrivalTime.trim(),
      transferConfirmation: form.transferConfirmation.trim(),
      dietaryFinal: form.dietaryFinal.trim(),
    };
    const saved = appendLogistics(row);
    console.info("Logistics submission", saved);
    setExportRow(saved);
    setDone(true);
  }

  if (done && exportRow) {
    const csv = rowsToCsv([exportRow]);
    return (
      <div className="min-h-[70vh] bg-transparent flex-1 flex flex-col justify-center px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-lg rounded-[28px] bg-[#F6F1E6]/70 backdrop-blur-md shadow-sm p-8 text-center sm:p-10">
          <h1 className="font-serif text-3xl text-[#4a3f35] mb-4">Thank you</h1>
          <p className="text-[#5c4e40] mb-6">
            Your logistics details have been saved locally for this demo. Connect a backend for production.
          </p>
          <button
            type="button"
            onClick={() => downloadCsvFile(`logistics-${Date.now()}.csv`, csv)}
            className="mb-4 w-full rounded-full bg-[#4a3f35] px-6 py-3 text-white"
          >
            Download as CSV
          </button>
          <Link to="/" className="text-sm text-[#8b7967] underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/40 py-10 sm:py-14">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8b7967]">Form 2 — Logistics</p>
        <h1 className="font-serif text-4xl text-[#4a3f35] sm:text-5xl mb-4">Final details</h1>
        <div className="mb-8 rounded-[20px] bg-[#E8DFD3] p-4 text-sm text-[#5c4e40]">
          This form is separate from your RSVP. In production, guests receive a link in{" "}
          <strong>February 2027</strong> for flights, transfers, and final dietary information. You can
          test the flow here anytime.
        </div>

        <form
          onSubmit={submit}
          className="space-y-5 rounded-[28px] border border-[#8b7967]/30 bg-[#F6F1E6]/70 backdrop-blur-md shadow-sm p-6 sm:p-8"
        >
          {error && (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
              {error}
            </p>
          )}

          <div>
            <label className="text-sm text-[#8b7967]" htmlFor="lg-name">
              Full name
            </label>
            <input
              id="lg-name"
              className="mt-2 w-full rounded-2xl border border-[#8b7967]/30 px-4 py-3"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              autoComplete="name"
            />
          </div>
          <div>
            <label className="text-sm text-[#8b7967]" htmlFor="lg-email">
              Email
            </label>
            <input
              id="lg-email"
              type="email"
              className="mt-2 w-full rounded-2xl border border-[#8b7967]/30 px-4 py-3"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="text-sm text-[#8b7967]" htmlFor="lg-arr">
              Flight arrival (airline / flight no. / date)
            </label>
            <input
              id="lg-arr"
              className="mt-2 w-full rounded-2xl border border-[#8b7967]/30 px-4 py-3"
              value={form.flightArrival}
              onChange={(e) => update("flightArrival", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-[#8b7967]" htmlFor="lg-dep">
              Flight departure
            </label>
            <input
              id="lg-dep"
              className="mt-2 w-full rounded-2xl border border-[#8b7967]/30 px-4 py-3"
              value={form.flightDeparture}
              onChange={(e) => update("flightDeparture", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-[#8b7967]" htmlFor="lg-time">
              Arrival time (local)
            </label>
            <input
              id="lg-time"
              className="mt-2 w-full rounded-2xl border border-[#8b7967]/30 px-4 py-3"
              value={form.arrivalTime}
              onChange={(e) => update("arrivalTime", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-[#8b7967]" htmlFor="lg-tr">
              Transfer confirmation
            </label>
            <textarea
              id="lg-tr"
              rows={3}
              className="mt-2 w-full rounded-2xl border border-[#8b7967]/30 px-4 py-3"
              value={form.transferConfirmation}
              onChange={(e) => update("transferConfirmation", e.target.value)}
              placeholder="e.g. Yes, need pickup from AGP at 14:00"
            />
          </div>
          <div>
            <label className="text-sm text-[#8b7967]" htmlFor="lg-diet">
              Dietary requirements (final)
            </label>
            <textarea
              id="lg-diet"
              rows={3}
              className="mt-2 w-full rounded-2xl border border-[#8b7967]/30 px-4 py-3"
              value={form.dietaryFinal}
              onChange={(e) => update("dietaryFinal", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-between">
            <Link
              to="/rsvp"
              className="inline-flex items-center justify-center rounded-full border border-[#4a3f35] px-6 py-3 text-center text-[#4a3f35]"
            >
              Back to RSVP
            </Link>
            <button type="submit" className="rounded-full bg-[#4a3f35] px-6 py-3 text-white">
              Submit logistics
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
