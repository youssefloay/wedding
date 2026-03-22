import { useMemo, useState } from "react";

const TOTAL_STEPS = 7;

type Attendance = "yes" | "no" | "unsure" | "";
type Accommodation = "castle" | "elsewhere" | "unsure" | "";

type FormState = {
  attendance: Attendance;
  firstName: string;
  lastName: string;
  email: string;
  hasPlusOne: "yes" | "no" | "";
  plusOneFirstName: string;
  plusOneLastName: string;
  accommodation: Accommodation;
  roomType: string;
  breakfast: "yes" | "no" | "";
  transfer: "yes" | "no" | "maybe" | "";
  welcomeDinner: "yes" | "no" | "maybe" | "";
  welcomeGuests: string;
};

const initialForm: FormState = {
  attendance: "",
  firstName: "",
  lastName: "",
  email: "",
  hasPlusOne: "",
  plusOneFirstName: "",
  plusOneLastName: "",
  accommodation: "",
  roomType: "Double",
  breakfast: "",
  transfer: "",
  welcomeDinner: "",
  welcomeGuests: "",
};

function ChoiceRow({
  options,
  value,
  onChange,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
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
      <div className="rounded-[28px] border border-[#E8DFD3] bg-[#F8F5F0] p-6 shadow-sm sm:p-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#7C9AB0] sm:text-sm">How it works</p>
          <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-5xl mb-4">A simple two-step process</h2>
          <p className="text-base text-[#2B2B2B] sm:text-lg">
            We are using two separate forms to keep planning simple and make sure we collect the right
            information at the right time.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-2 text-sm text-[#7C9AB0]">Step 1 — RSVP</div>
            <h3 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Now until 1 November 2026</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#2B2B2B]">
              <li>Confirm attendance</li>
              <li>Add your plus one</li>
              <li>Request accommodation</li>
              <li>Indicate transfer interest</li>
              <li>Help us estimate the welcome dinner</li>
            </ul>
          </div>
          <div className="rounded-[24px] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-2 text-sm text-[#7C9AB0]">Step 2 — Final details</div>
            <h3 className="font-serif text-2xl text-[#2F4A6D] sm:text-3xl mb-3">Sent in February 2027</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#2B2B2B]">
              <li>Flight and arrival details</li>
              <li>Final transfer coordination</li>
              <li>Dietary restrictions and allergies</li>
              <li>Last practical information</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RSVP() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const attending = form.attendance === "yes" || form.attendance === "unsure";
  const progress = useMemo(() => (step / TOTAL_STEPS) * 100, [step]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
  }

  function validateStep(): string | null {
    switch (step) {
      case 2:
        if (!form.attendance) return "Please select whether you will attend.";
        return null;
      case 3:
        if (!form.firstName.trim() || !form.lastName.trim()) return "Please enter your name.";
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
          return "Please enter a valid email.";
        if (attending) {
          if (!form.hasPlusOne) return "Please let us know if you are bringing a guest.";
          if (form.hasPlusOne === "yes") {
            if (!form.plusOneFirstName.trim() || !form.plusOneLastName.trim())
              return "Please enter your guest's name.";
          }
        }
        return null;
      case 4:
        if (!attending) return null;
        if (!form.accommodation) return "Please choose an accommodation option.";
        if (form.accommodation === "castle") {
          if (!form.roomType.trim()) return "Please select a room type.";
          if (!form.breakfast) return "Please indicate breakfast preference.";
        }
        return null;
      case 5:
        if (!attending) return null;
        if (!form.transfer) return "Please indicate transfer interest.";
        return null;
      case 6:
        if (!attending) return null;
        if (!form.welcomeDinner) return "Please respond about the welcome dinner.";
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
    console.info("RSVP submission", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] bg-gradient-to-b from-[#F8F5F0] to-[#E8DFD3] px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-lg rounded-[28px] bg-white p-8 text-center shadow-xl sm:p-10">
          <h1 className="font-serif text-3xl text-[#2F4A6D] mb-4">Thank you</h1>
          <p className="text-[#2B2B2B]">
            Your RSVP has been recorded. This demo prints data to the browser console only — connect a
            backend or form service to receive submissions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <HowItWorks />

      <div className="bg-gradient-to-b from-[#F8F5F0] to-[#E8DFD3] px-4 pb-16 pt-2 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto flex min-h-[560px] max-w-3xl items-center justify-center">
          <div className="w-full rounded-[28px] bg-white p-6 shadow-xl sm:p-8">
            <div className="mb-6 flex justify-between text-xs text-[#7C9AB0] sm:text-sm">
              <span>RSVP</span>
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
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-3">Before you begin</h2>
                <p className="mb-6 text-[#2B2B2B]">
                  This form takes a few minutes. You can use the Back button to change answers. The RSVP
                  deadline is <strong>1 November 2026</strong>.
                </p>
                <div className="rounded-[20px] bg-[#E8DFD3] p-5 text-sm text-[#2B2B2B]">
                  <strong>Note:</strong> A second form will be sent in <strong>February 2027</strong> for
                  flights, final transfers, and dietary requirements.
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Attendance</h2>
                <p className="mb-5 text-sm text-[#2B2B2B] sm:text-base">
                  Please confirm whether you will be joining us on 17 April 2027.
                </p>
                <ChoiceRow
                  options={["Yes, I will attend", "No, I won’t be able to attend", "I’m not sure yet"]}
                  value={
                    form.attendance === "yes"
                      ? "Yes, I will attend"
                      : form.attendance === "no"
                        ? "No, I won’t be able to attend"
                        : form.attendance === "unsure"
                          ? "I’m not sure yet"
                          : ""
                  }
                  onChange={(v) => {
                    if (v.startsWith("Yes")) update("attendance", "yes");
                    else if (v.startsWith("No")) update("attendance", "no");
                    else update("attendance", "unsure");
                  }}
                />
                <div className="mt-5 rounded-[18px] bg-[#E8DFD3] p-4 text-sm text-[#2B2B2B]">
                  RSVP deadline: <strong>1 November 2026</strong>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Your details</h2>
                <p className="mb-5 text-sm text-[#2B2B2B]">
                  So we can keep you updated{attending ? " and plan for your guest" : ""}.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-[#7C9AB0]" htmlFor="fn">
                      First name
                    </label>
                    <input
                      id="fn"
                      className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3 text-[#2B2B2B]"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#7C9AB0]" htmlFor="ln">
                      Last name
                    </label>
                    <input
                      id="ln"
                      className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3 text-[#2B2B2B]"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      autoComplete="family-name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-[#7C9AB0]" htmlFor="em">
                      Email
                    </label>
                    <input
                      id="em"
                      type="email"
                      className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3 text-[#2B2B2B]"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                </div>
                {attending && (
                  <div className="mt-6 space-y-4">
                    <p className="text-sm font-medium text-[#2B2B2B]">Are you bringing a guest?</p>
                    <ChoiceRow
                      options={["Yes", "No"]}
                      value={form.hasPlusOne === "yes" ? "Yes" : form.hasPlusOne === "no" ? "No" : ""}
                      onChange={(v) => update("hasPlusOne", v === "Yes" ? "yes" : "no")}
                    />
                    {form.hasPlusOne === "yes" && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="text-sm text-[#7C9AB0]" htmlFor="p1">
                            Guest first name
                          </label>
                          <input
                            id="p1"
                            className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3"
                            value={form.plusOneFirstName}
                            onChange={(e) => update("plusOneFirstName", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="text-sm text-[#7C9AB0]" htmlFor="p2">
                            Guest last name
                          </label>
                          <input
                            id="p2"
                            className="mt-2 w-full rounded-2xl border border-[#E8DFD3] px-4 py-3"
                            value={form.plusOneLastName}
                            onChange={(e) => update("plusOneLastName", e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {step === 4 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-3">Accommodation</h2>
                {!attending ? (
                  <p className="text-[#2B2B2B]">We&apos;ll miss you — no accommodation is needed.</p>
                ) : (
                  <>
                    <p className="mb-6 text-[#2B2B2B]">Would you like to stay at Castillo de Monda?</p>
                    <ChoiceRow
                      options={["Yes, at the castle", "No, I will stay elsewhere", "I am not sure yet"]}
                      value={
                        form.accommodation === "castle"
                          ? "Yes, at the castle"
                          : form.accommodation === "elsewhere"
                            ? "No, I will stay elsewhere"
                            : form.accommodation === "unsure"
                              ? "I am not sure yet"
                              : ""
                      }
                      onChange={(v) => {
                        if (v.includes("castle")) update("accommodation", "castle");
                        else if (v.includes("elsewhere")) update("accommodation", "elsewhere");
                        else update("accommodation", "unsure");
                      }}
                    />
                    {form.accommodation === "castle" && (
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="text-sm text-[#7C9AB0]">Room type</label>
                          <select
                            className="mt-2 w-full rounded-2xl border border-[#E8DFD3] bg-white px-4 py-3 text-[#2B2B2B]"
                            value={form.roomType}
                            onChange={(e) => update("roomType", e.target.value)}
                          >
                            <option>Double</option>
                            <option>Twin</option>
                            <option>Suite</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-[#7C9AB0]">Breakfast (€15 / person)</label>
                          <ChoiceRow
                            options={["Yes", "No"]}
                            value={form.breakfast === "yes" ? "Yes" : form.breakfast === "no" ? "No" : ""}
                            onChange={(v) => update("breakfast", v === "Yes" ? "yes" : "no")}
                          />
                        </div>
                      </div>
                    )}
                    <div className="mt-6 rounded-[20px] bg-[#E8DFD3] p-5 text-sm text-[#2B2B2B]">
                      <strong>Important:</strong> The hotel will contact you directly to confirm your
                      reservation. Submitting this form does not confirm a room. Payment is required at the
                      time of reservation.
                    </div>
                  </>
                )}
              </>
            )}

            {step === 5 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Transfers</h2>
                {!attending ? (
                  <p className="text-[#2B2B2B]">No transfer needed — thank you for letting us know.</p>
                ) : (
                  <>
                    <p className="mb-5 text-sm text-[#2B2B2B]">
                      Would you like to be grouped with other guests for an organised transfer (paid by
                      guests)?
                    </p>
                    <ChoiceRow
                      options={["Yes, please", "No, thanks", "Maybe — contact me later"]}
                      value={
                        form.transfer === "yes"
                          ? "Yes, please"
                          : form.transfer === "no"
                            ? "No, thanks"
                            : form.transfer === "maybe"
                              ? "Maybe — contact me later"
                              : ""
                      }
                      onChange={(v) => {
                        if (v.startsWith("Yes")) update("transfer", "yes");
                        else if (v.startsWith("No")) update("transfer", "no");
                        else update("transfer", "maybe");
                      }}
                    />
                    <p className="mt-4 text-xs text-[#7C9AB0]">
                      Up to 4 people: €95 total · Up to 7 people: €100–€110 total.
                    </p>
                  </>
                )}
              </>
            )}

            {step === 6 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-2">Welcome dinner</h2>
                {!attending ? (
                  <p className="text-[#2B2B2B]">We hope to see you another time.</p>
                ) : (
                  <>
                    <p className="mb-5 text-sm text-[#2B2B2B]">
                      We may host a welcome gathering before the wedding. Will you join?
                    </p>
                    <ChoiceRow
                      options={["Yes", "No", "Not sure yet"]}
                      value={
                        form.welcomeDinner === "yes"
                          ? "Yes"
                          : form.welcomeDinner === "no"
                            ? "No"
                            : form.welcomeDinner === "maybe"
                              ? "Not sure yet"
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
                        How many in your party (including you)? Optional estimate.
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

            {step === 7 && (
              <>
                <h2 className="font-serif text-3xl text-[#2F4A6D] sm:text-4xl mb-3">Review</h2>
                <dl className="space-y-3 text-sm text-[#2B2B2B]">
                  <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                    <dt className="text-[#7C9AB0]">Attendance</dt>
                    <dd className="text-right font-medium">{form.attendance || "—"}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                    <dt className="text-[#7C9AB0]">Name</dt>
                    <dd className="text-right font-medium">
                      {form.firstName} {form.lastName}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                    <dt className="text-[#7C9AB0]">Email</dt>
                    <dd className="text-right font-medium break-all">{form.email || "—"}</dd>
                  </div>
                  {attending && (
                    <>
                      <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                        <dt className="text-[#7C9AB0]">Guest</dt>
                        <dd className="text-right font-medium">
                          {form.hasPlusOne === "yes"
                            ? `${form.plusOneFirstName} ${form.plusOneLastName}`.trim() || "—"
                            : form.hasPlusOne === "no"
                              ? "No"
                              : "—"}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                        <dt className="text-[#7C9AB0]">Accommodation</dt>
                        <dd className="text-right font-medium">{form.accommodation || "—"}</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-[#E8DFD3] pb-2">
                        <dt className="text-[#7C9AB0]">Transfer</dt>
                        <dd className="text-right font-medium">{form.transfer || "—"}</dd>
                      </div>
                      <div className="flex justify-between gap-4 pb-2">
                        <dt className="text-[#7C9AB0]">Welcome dinner</dt>
                        <dd className="text-right font-medium">{form.welcomeDinner || "—"}</dd>
                      </div>
                    </>
                  )}
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
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full bg-[#2F4A6D] px-6 py-3 text-white"
                >
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
