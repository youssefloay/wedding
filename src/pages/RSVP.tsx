import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { appendRsvp, downloadCsvFile, rowsToCsv, type SubmissionRow } from "../lib/submissions";

const TOTAL_STEPS = 8;

type Attendance = "yes" | "no" | "unsure" | "";
type StayCastle = "yes" | "no" | "maybe" | "";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  attendance: Attendance;
  hasPlusOne: "yes" | "no" | "";
  plusOneName: string;
  welcomeDinner: "yes" | "no" | "maybe" | "";
  welcomeGuests: string;
  stayAtCastle: StayCastle;
  roomType: string;
  breakfast: "yes" | "no" | "";
  transfer: "yes" | "no" | "maybe" | "";
  dietary: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  attendance: "",
  hasPlusOne: "",
  plusOneName: "",
  welcomeDinner: "",
  welcomeGuests: "",
  stayAtCastle: "",
  roomType: "",
  breakfast: "",
  transfer: "",
  dietary: "",
};

function ChoiceRow({
  options,
  value,
  onChange,
  columns = 3,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  columns?: 2 | 3;
}) {
  const grid = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";
  return (
    <div className={`grid gap-3 ${grid}`}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`rounded-2xl border p-4 text-left text-sm transition ${
            value === opt
              ? "border-[#2F4A6D] bg-[#F8F5F0] ring-2 ring-[#2F4A6D]/20"
              : "border-[#E8DFD3] bg-white hover:border-[#7C9AB0]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-[#E8DFD3] bg-[#F8F5F0] p-6 sm:p-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#7C9AB0] sm:text-sm">How it works</p>
          <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-5xl mb-4">A simple two-step process</h2>
          <p className="text-base text-[#2B2B2B] sm:text-lg">
            We are using two separate forms to keep planning simple and make sure we collect the right
            information at the right time.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-white p-6 sm:p-8">
            <div className="mb-2 text-sm text-[#7C9AB0]">Form 1 — RSVP</div>
            <h3 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Now until 1 November 2026</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#2B2B2B]">
              <li>Confirm attendance</li>
              <li>Add your plus one</li>
              <li>Request accommodation</li>
              <li>Indicate transfer interest</li>
              <li>Help us estimate the welcome dinner</li>
            </ul>
          </div>
          <div className="rounded-[24px] bg-white p-6 sm:p-8">
            <div className="mb-2 text-sm text-[#7C9AB0]">Form 2 — Logistics</div>
            <h3 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">February 2027</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#2B2B2B]">
              <li>Flight and arrival details</li>
              <li>Final transfer coordination</li>
              <li>Dietary restrictions and allergies (final)</li>
              <li>Last practical information</li>
            </ul>
            <Link
              to="/logistics"
              className="mt-6 inline-flex rounded-full border border-[#2F4A6D] px-5 py-2 text-sm font-medium text-[#2F4A6D]"
            >
              Open logistics form (Form 2)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function formToRow(form: FormState): SubmissionRow {
  return {
    fullName: form.fullName.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    attendance: form.attendance,
    hasPlusOne: form.hasPlusOne,
    plusOneName: form.plusOneName.trim(),
    welcomeDinner: form.welcomeDinner,
    welcomeGuests: form.welcomeGuests.trim(),
    stayAtCastle: form.stayAtCastle,
    roomType: form.roomType.trim(),
    breakfast: form.breakfast,
    transfer: form.transfer,
    dietary: form.dietary.trim(),
  };
}

export function RSVP() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [savedRow, setSavedRow] = useState<SubmissionRow | null>(null);
  const [error, setError] = useState<string | null>(null);

  const attending = form.attendance === "yes" || form.attendance === "unsure";
  const progress = useMemo(() => (step / TOTAL_STEPS) * 100, [step]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
  }

  function validateStep(): string | null {
    switch (step) {
      case 1:
        if (!form.fullName.trim()) return "Please enter your full name.";
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
          return "Please enter a valid email.";
        if (!form.phone.trim() || form.phone.trim().length < 6) return "Please enter a valid phone number.";
        return null;
      case 2:
        if (!form.attendance) return "Please select whether you will attend.";
        return null;
      case 3:
        if (!attending) return null;
        if (!form.hasPlusOne) return "Please let us know if you are bringing a guest.";
        if (form.hasPlusOne === "yes" && !form.plusOneName.trim()) return "Please enter your guest's name.";
        return null;
      case 4:
        if (!attending) return null;
        if (!form.welcomeDinner) return "Please respond about the welcome dinner.";
        return null;
      case 5:
        if (!attending) return null;
        if (!form.stayAtCastle) return "Please indicate if you would like to stay at the castle.";
        if (form.stayAtCastle === "yes" || form.stayAtCastle === "maybe") {
          if (!form.breakfast) return "Please indicate breakfast preference (€15 per person).";
        }
        return null;
      case 6:
        if (!attending) return null;
        if (!form.transfer) return "Please indicate if you need a transfer.";
        return null;
      case 7:
        return null;
      default:
        return null;
    }
  }

  function next() {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(1, s - 1));
  }

  function submit() {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    const row = formToRow(form);
    const saved = appendRsvp(row);
    console.info("RSVP submission", saved);
    setSavedRow(saved);
    setSubmitted(true);
  }

  if (submitted && savedRow) {
    const csv = rowsToCsv([savedRow]);
    return (
      <div className="min-h-[70vh] bg-gradient-to-b from-[#F8F5F0] to-[#E8DFD3] px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-lg rounded-[28px] bg-white p-8 text-center sm:p-10">
          <h1 className="font-serif text-3xl text-[#2F4A6D] mb-4">Thank you</h1>
          <p className="text-[#2B2B2B] mb-6">
            Your RSVP has been saved in this browser for the demo. In production, wire this to email and a
            database, and forward accommodation requests to the hotel as per your process.
          </p>
          <button
            type="button"
            onClick={() => downloadCsvFile(`rsvp-${Date.now()}.csv`, csv)}
            className="mb-3 w-full rounded-full bg-[#2F4A6D] px-6 py-3 text-white"
          >
            Download this RSVP (CSV)
          </button>
          <p className="mb-4 text-xs text-[#7C9AB0]">
            <Link to="/export" className="underline">
              Bulk export (organiser)
            </Link>
          </p>
          <p className="mb-4 text-sm text-[#2B2B2B]">
            In <strong>February 2027</strong> you&apos;ll receive a link for{" "}
            <Link to="/logistics" className="text-[#2F4A6D] underline">
              Form 2 — logistics
            </Link>
            .
          </p>
          <Link to="/" className="text-sm text-[#7C9AB0] underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <HowItWorks />

      <div className="bg-gradient-to-b from-[#F8F5F0] to-[#E8DFD3] px-4 pb-16 pt-2 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto flex min-h-[560px] max-w-3xl items-center justify-center">
          <div className="w-full rounded-[28px] bg-white p-6 sm:p-8">
            <div className="mb-6 flex justify-between text-xs text-[#7C9AB0] sm:text-sm">
              <span>RSVP — Form 1</span>
              <span>
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
            <div className="mb-8 h-2 w-full rounded-full bg-[#E8DFD3]">
              <div
                className="h-2 rounded-full bg-[#2F4A6D] transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {error && (
              <p className="mb-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                {error}
              </p>
            )}

            {step === 1 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Contact</h2>
                <p className="mb-6 text-sm text-[#2B2B2B] sm:text-base">
                  RSVP deadline: <strong>1 November 2026</strong>. A separate logistics form will follow in{" "}
                  <strong>February 2027</strong>.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-[#7C9AB0]" htmlFor="fullName">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3"
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#7C9AB0]" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#7C9AB0]" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      autoComplete="tel"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Attendance</h2>
                <p className="mb-5 text-sm text-[#2B2B2B] sm:text-base">
                  Will you join us on 17 April 2027?
                </p>
                <ChoiceRow
                  options={["Yes", "No", "Not sure"]}
                  value={
                    form.attendance === "yes"
                      ? "Yes"
                      : form.attendance === "no"
                        ? "No"
                        : form.attendance === "unsure"
                          ? "Not sure"
                          : ""
                  }
                  onChange={(v) => {
                    if (v === "Yes") update("attendance", "yes");
                    else if (v === "No") update("attendance", "no");
                    else update("attendance", "unsure");
                  }}
                />
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Plus one</h2>
                {!attending ? (
                  <p className="text-[#2B2B2B]">No guest details needed — thank you for letting us know.</p>
                ) : (
                  <>
                    <p className="mb-5 text-sm text-[#2B2B2B]">Are you bringing a guest?</p>
                    <ChoiceRow
                      options={["Yes", "No"]}
                      value={form.hasPlusOne === "yes" ? "Yes" : form.hasPlusOne === "no" ? "No" : ""}
                      onChange={(v) => update("hasPlusOne", v === "Yes" ? "yes" : "no")}
                      columns={2}
                    />
                    {form.hasPlusOne === "yes" && (
                      <div className="mt-6">
                        <label className="text-sm text-[#7C9AB0]" htmlFor="plusOneName">
                          Guest name
                        </label>
                        <input
                          id="plusOneName"
                          className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3"
                          value={form.plusOneName}
                          onChange={(e) => update("plusOneName", e.target.value)}
                        />
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Welcome dinner</h2>
                {!attending ? (
                  <p className="text-[#2B2B2B]">We hope to celebrate with you another time.</p>
                ) : (
                  <>
                    <p className="mb-5 text-sm text-[#2B2B2B]">
                      We may host a welcome gathering before the wedding. Will you join?
                    </p>
                    <ChoiceRow
                      options={["Yes", "No", "Not sure"]}
                      value={
                        form.welcomeDinner === "yes"
                          ? "Yes"
                          : form.welcomeDinner === "no"
                            ? "No"
                            : form.welcomeDinner === "maybe"
                              ? "Not sure"
                              : ""
                      }
                      onChange={(v) => {
                        if (v === "Yes") update("welcomeDinner", "yes");
                        else if (v === "No") update("welcomeDinner", "no");
                        else update("welcomeDinner", "maybe");
                      }}
                    />
                    <div className="mt-6">
                      <label className="text-sm text-[#7C9AB0]" htmlFor="wg">
                        Guest count estimate (optional, including you)
                      </label>
                      <input
                        id="wg"
                        inputMode="numeric"
                        className="mt-2 w-full max-w-xs rounded-2xl border border-[#E8DFD3] px-4 py-3"
                        value={form.welcomeGuests}
                        onChange={(e) => update("welcomeGuests", e.target.value)}
                        placeholder="e.g. 2"
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {step === 5 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Accommodation</h2>
                {!attending ? (
                  <p className="text-[#2B2B2B]">No accommodation needed.</p>
                ) : (
                  <>
                    <p className="mb-5 text-sm text-[#2B2B2B]">Would you like to stay at Castillo de Monda?</p>
                    <ChoiceRow
                      options={["Yes", "No", "Maybe"]}
                      value={
                        form.stayAtCastle === "yes"
                          ? "Yes"
                          : form.stayAtCastle === "no"
                            ? "No"
                            : form.stayAtCastle === "maybe"
                              ? "Maybe"
                              : ""
                      }
                      onChange={(v) => {
                        if (v === "Yes") update("stayAtCastle", "yes");
                        else if (v === "No") update("stayAtCastle", "no");
                        else update("stayAtCastle", "maybe");
                      }}
                    />
                    {(form.stayAtCastle === "yes" || form.stayAtCastle === "maybe") && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <label className="text-sm text-[#7C9AB0]">Room type (optional)</label>
                          <select
                            className="mt-2 w-full rounded-2xl border border-[#E8DFD3] bg-white px-4 py-3"
                            value={form.roomType}
                            onChange={(e) => update("roomType", e.target.value)}
                          >
                            <option value="">Prefer not to say</option>
                            <option value="Double">Double</option>
                            <option value="Twin">Twin</option>
                            <option value="Suite">Suite</option>
                          </select>
                        </div>
                        <div>
                          <p className="text-sm text-[#7C9AB0] mb-2">Breakfast (€15 per person)</p>
                          <ChoiceRow
                            options={["Yes", "No"]}
                            value={form.breakfast === "yes" ? "Yes" : form.breakfast === "no" ? "No" : ""}
                            onChange={(v) => update("breakfast", v === "Yes" ? "yes" : "no")}
                            columns={2}
                          />
                        </div>
                      </div>
                    )}
                    <div className="mt-6 rounded-[20px] bg-[#E8DFD3] p-5 text-sm text-[#2B2B2B]">
                      <p className="font-semibold text-[#2F4A6D] mb-2">Important</p>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>The hotel will contact you directly.</li>
                        <li>This form does NOT confirm your reservation.</li>
                        <li>Payment is required at booking.</li>
                      </ul>
                    </div>
                  </>
                )}
              </>
            )}

            {step === 6 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Transport</h2>
                {!attending ? (
                  <p className="text-[#2B2B2B]">No transfer needed.</p>
                ) : (
                  <>
                    <p className="mb-5 text-sm text-[#2B2B2B]">Do you need an organised transfer?</p>
                    <ChoiceRow
                      options={["Yes", "No", "Maybe"]}
                      value={
                        form.transfer === "yes"
                          ? "Yes"
                          : form.transfer === "no"
                            ? "No"
                            : form.transfer === "maybe"
                              ? "Maybe"
                              : ""
                      }
                      onChange={(v) => {
                        if (v === "Yes") update("transfer", "yes");
                        else if (v === "No") update("transfer", "no");
                        else update("transfer", "maybe");
                      }}
                    />
                    <p className="mt-4 text-xs text-[#7C9AB0]">
                      Up to 4 people: €95 total · Up to 7 people: €100–€110 total (paid by guests).
                    </p>
                  </>
                )}
              </>
            )}

            {step === 7 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Dietary (light)</h2>
                <p className="mb-4 text-sm text-[#2B2B2B]">
                  Optional. You&apos;ll confirm details again in the February logistics form.
                </p>
                <label className="text-sm text-[#7C9AB0]" htmlFor="dietary">
                  Restrictions or allergies
                </label>
                <textarea
                  id="dietary"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3"
                  value={form.dietary}
                  onChange={(e) => update("dietary", e.target.value)}
                  placeholder="Leave blank if none"
                />
              </>
            )}

            {step === 8 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-3">Review</h2>
                <dl className="space-y-3 text-sm text-[#2B2B2B]">
                  <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                    <dt className="text-[#7C9AB0]">Name</dt>
                    <dd className="text-right font-medium">{form.fullName || "—"}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                    <dt className="text-[#7C9AB0]">Email</dt>
                    <dd className="text-right font-medium break-all">{form.email || "—"}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                    <dt className="text-[#7C9AB0]">Phone</dt>
                    <dd className="text-right font-medium">{form.phone || "—"}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                    <dt className="text-[#7C9AB0]">Attendance</dt>
                    <dd className="text-right font-medium">{form.attendance || "—"}</dd>
                  </div>
                  {attending && (
                    <>
                      <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                        <dt className="text-[#7C9AB0]">Plus one</dt>
                        <dd className="text-right font-medium">
                          {form.hasPlusOne === "yes"
                            ? form.plusOneName || "—"
                            : form.hasPlusOne === "no"
                              ? "No"
                              : "—"}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                        <dt className="text-[#7C9AB0]">Welcome dinner</dt>
                        <dd className="text-right font-medium">{form.welcomeDinner || "—"}</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                        <dt className="text-[#7C9AB0]">Castle stay</dt>
                        <dd className="text-right font-medium">{form.stayAtCastle || "—"}</dd>
                      </div>
                      {(form.stayAtCastle === "yes" || form.stayAtCastle === "maybe") && (
                        <>
                          <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                            <dt className="text-[#7C9AB0]">Room type</dt>
                            <dd className="text-right font-medium">{form.roomType || "—"}</dd>
                          </div>
                          <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                            <dt className="text-[#7C9AB0]">Breakfast</dt>
                            <dd className="text-right font-medium">{form.breakfast || "—"}</dd>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                        <dt className="text-[#7C9AB0]">Transfer</dt>
                        <dd className="text-right font-medium">{form.transfer || "—"}</dd>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between gap-4 pb-2">
                    <dt className="text-[#7C9AB0]">Dietary</dt>
                    <dd className="text-right font-medium max-w-[60%]">{form.dietary.trim() || "—"}</dd>
                  </div>
                </dl>
              </>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={back}
                disabled={step === 1}
                className="rounded-full border border-[#2F4A6D] px-6 py-3 text-[#2F4A6D] disabled:opacity-40"
              >
                Back
              </button>
              {step < TOTAL_STEPS ? (
                <button type="button" onClick={next} className="rounded-full bg-[#2F4A6D] px-6 py-3 text-white">
                  Continue
                </button>
              ) : (
                <button type="button" onClick={submit} className="rounded-full bg-[#2F4A6D] px-6 py-3 text-white">
                  Submit RSVP
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
