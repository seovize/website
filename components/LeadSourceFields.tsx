"use client";

import { useEffect, useRef } from "react";

/**
 * Hidden form fields that capture lead-source metadata for Brevo segmentation:
 * the page the visitor was on immediately before landing on /contact
 * (document.referrer), and any UTM parameters present on the current URL
 * (covers campaign links that point straight at /contact).
 *
 * Pure client-side capture — never blocks rendering or submission if a value
 * is unavailable (e.g. referrer stripped by the browser).
 */
export function LeadSourceFields() {
  const sourcePageRef = useRef<HTMLInputElement>(null);
  const utmSourceRef = useRef<HTMLInputElement>(null);
  const utmMediumRef = useRef<HTMLInputElement>(null);
  const utmCampaignRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sourcePageRef.current && document.referrer) {
      sourcePageRef.current.value = document.referrer;
    }
    const params = new URLSearchParams(window.location.search);
    if (utmSourceRef.current) utmSourceRef.current.value = params.get("utm_source") ?? "";
    if (utmMediumRef.current) utmMediumRef.current.value = params.get("utm_medium") ?? "";
    if (utmCampaignRef.current) utmCampaignRef.current.value = params.get("utm_campaign") ?? "";
  }, []);

  return (
    <>
      <input type="hidden" name="sourcePage" ref={sourcePageRef} />
      <input type="hidden" name="utmSource" ref={utmSourceRef} />
      <input type="hidden" name="utmMedium" ref={utmMediumRef} />
      <input type="hidden" name="utmCampaign" ref={utmCampaignRef} />
    </>
  );
}
