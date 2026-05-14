"use client";

export function JournalSubscribe() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", gap: "0.5rem", alignItems: "end", flex: 1, maxWidth: 420 }}
    >
      <input className="field" type="email" placeholder="you@inbox.com" style={{ flex: 1 }} />
      <button type="submit" className="btn btn-primary" data-cursor="subscribe">
        <span>Subscribe</span>
      </button>
    </form>
  );
}
