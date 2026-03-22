export type SubmissionRow = Record<string, string>;

const RSVP_KEY = "alvaro-lama-rsvp-v1";
const LOGISTICS_KEY = "alvaro-lama-logistics-v1";

function load(key: string): SubmissionRow[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as SubmissionRow[]) : [];
  } catch {
    return [];
  }
}

function save(key: string, rows: SubmissionRow[]) {
  localStorage.setItem(key, JSON.stringify(rows));
}

export function appendRsvp(row: SubmissionRow): SubmissionRow {
  const saved = { ...row, submittedAt: new Date().toISOString() };
  const rows = load(RSVP_KEY);
  rows.push(saved);
  save(RSVP_KEY, rows);
  return saved;
}

export function appendLogistics(row: SubmissionRow): SubmissionRow {
  const saved = { ...row, submittedAt: new Date().toISOString() };
  const rows = load(LOGISTICS_KEY);
  rows.push(saved);
  save(LOGISTICS_KEY, rows);
  return saved;
}

export function getAllRsvps(): SubmissionRow[] {
  return load(RSVP_KEY);
}

export function getAllLogistics(): SubmissionRow[] {
  return load(LOGISTICS_KEY);
}

function escapeCell(v: string) {
  if (/[",\n\r]/.test(v)) return `"${v.replace(/"/g, '""')}"`;
  return v;
}

export function rowsToCsv(rows: SubmissionRow[]): string {
  if (rows.length === 0) return "";
  const keys = [...new Set(rows.flatMap((r) => Object.keys(r)))];
  const header = keys.map(escapeCell).join(",");
  const lines = rows.map((r) => keys.map((k) => escapeCell(r[k] ?? "")).join(","));
  return [header, ...lines].join("\n");
}

export function downloadCsvFile(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
