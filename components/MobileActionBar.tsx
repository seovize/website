import Link from "next/link";

/* App-like floating action bar — mobile only (hidden on lg+).
   Keeps the primary conversion action in thumb reach at all times,
   the pattern native apps use. Safe-area aware; body gets bottom
   padding (globals.css) so nothing hides behind it. */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 lg:hidden"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-line bg-navy/90 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <Link
          href="/pricing"
          className="flex h-11 flex-1 items-center justify-center rounded-full text-sm font-semibold text-mist transition hover:text-cloud"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="flex h-11 flex-[1.4] items-center justify-center gap-1.5 rounded-full bg-orange px-4 text-sm font-bold text-white transition active:scale-[0.98]"
        >
          Get a Free Audit
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
