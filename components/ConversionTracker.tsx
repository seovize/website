"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Fires a single Vercel Analytics custom event on mount. Rendered on conversion
 * confirmation screens (e.g. the contact success state) so the actual lead
 * conversion is measurable, not just page views.
 */
export function ConversionTracker({
  event,
  data,
}: {
  event: string;
  data?: Record<string, string>;
}) {
  useEffect(() => {
    track(event, data);
    // Fire once on mount for this confirmation render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
